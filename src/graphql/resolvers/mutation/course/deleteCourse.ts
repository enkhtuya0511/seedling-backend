import Course from "@/models/course-model";
import User from "@/models/user-model";

export async function deleteCourse(parent: any, { courseId, userId }: { courseId: String; userId: String }) {
  try {
    const user = await User.findById(userId);
    const filteredCourses = user.tutorProfile.courseIds.filter((item: string) => item.toString() !== courseId);
    user.tutorProfile.courseIds = filteredCourses;
    await user.save();

    const deletedCourse = await Course.findByIdAndDelete(courseId).populate("tutorId");
    return deletedCourse;
  } catch (error) {
    console.error("Error deleting course: ", error);
    throw new Error("Error deleting course");
  }
}
