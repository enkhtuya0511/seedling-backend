import { UpdateCourseInput } from "@/graphql/generated";
import Course from "@/models/course-model";

export async function updateCourse(parent: any, { input, courseId }: { input: UpdateCourseInput; courseId: String }) {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(courseId, input, { new: true }).populate("tutorId");
    return updatedCourse;
  } catch (error) {
    console.error("Error updating course: ", error);
    throw new Error("Error updating course");
  }
}
