import { CreateCourseInput } from "@/graphql/generated";
import Course from "@/models/course-model";
import User from "@/models/user-model";

export async function createCourse(parent: any, { input, userId }: { input: CreateCourseInput; userId: String }) {
  try {
    const newCourse = await Course.create({ ...input, tutorId: userId });

    await User.findByIdAndUpdate(userId, {
      $push: { "tutorProfile.courseIds": newCourse._id },
    });

    const populatedCourse = await Course.findById(newCourse._id).populate("tutorId").exec();

    return populatedCourse;
  } catch (error: any) {
    console.error("Error creating course: ", error.message);
    throw new Error("Error creating course");
  }
}
