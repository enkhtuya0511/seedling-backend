import { UpdateCourseInput } from "@/graphql/generated";
import Course from "@/models/course-model";

export async function updateCourse(parent: any, { input, courseId }: { input: UpdateCourseInput; courseId: String }) {
  try {
    const course = await Course.findById(courseId);

    let updatedStudents = course.enrolledStudentIds;

    if (input.enrolledStudentIds?.[0]) {
      if (course.enrolledStudentIds.includes(input.enrolledStudentIds?.[0])) {
        updatedStudents = course.enrolledStudentIds.filter((student: string) => student.toString() !== input.enrolledStudentIds?.[0]);
      } else {
        updatedStudents = [...course.enrolledStudentIds, input.enrolledStudentIds?.[0]];
      }
    }
    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      { ...input, enrolledStudentIds: updatedStudents },
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
