import Course from "@/models/course-model";

export async function coursesByUser(parent: any, { userId }: { userId: string }) {
  try {
    const courses = await Course.find({ tutorId: userId });
    return courses;
  } catch (error) {
    console.error("Error getting courses: ", error);
    throw new Error("Error getting courses");
  }
}
