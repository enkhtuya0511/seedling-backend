import { UpdateCourseInput } from "@/graphql/generated";
import Course from "@/models/course-model";

export async function updateCourse(parent: any, { input, courseId }: { input: UpdateCourseInput; courseId: String }) {
  try {
    const course = await Course.findById(courseId);

    let newStudent = course.enrolledStudentIds;
    if (input.enrolledStudentIds) {
      if (course.enrolledStudentIds.includes(input.enrolledStudentIds)) {
        newStudent = course.enrolledStudentIds.filter((student: string) => student.toString() !== input.enrolledStudentIds);
      } else {
        newStudent = [...course.enrolledStudentIds, input.enrolledStudentIds];
      }
    }

    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      { ...input, enrolledStudentIds: newStudent },
      {
        new: true,
      }
    ).populate("tutorId");

    return updatedCourse;
  } catch (error) {
    console.error("Error updating course: ", error);
    throw new Error("Error updating course");
  }
}
