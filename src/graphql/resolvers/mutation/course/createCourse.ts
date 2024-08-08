import { CreateCourseInput } from "@/graphql/generated/client";
import Course from "@/models/course-model";
import User from "@/models/user-model";

export async function createCourse(
  parent: any,
  { input, userId }: { input: CreateCourseInput; userId: String }
) {
  try {
    const user = await User.findById(userId);
    console.log("input", input)
    const newCourse = await Course.create(input);

    user.tutorProfile.courseIds.push(newCourse._id);
    await user.save()

    return newCourse;
  } catch (error) {
    console.error("Error creating course: ", error);
    throw new Error("Error creating course");
  }
}
