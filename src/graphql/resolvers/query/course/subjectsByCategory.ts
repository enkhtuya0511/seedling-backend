import Course from "@/models/course-model";

export async function subjectsByCategory(parent: any, { categoryId }: { categoryId: string }) {
  try {
    const teachers = await Course.find({ categoryId });
    const subjects = [...new Set(teachers.map((teacher) => teacher.subject))];
    return subjects;
  } catch (error) {
    console.error("Error getting course: ", error);
    throw new Error("Error getting course");
  }
}
