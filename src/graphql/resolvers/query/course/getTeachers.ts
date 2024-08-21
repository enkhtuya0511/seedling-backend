import Course from "@/models/course-model";
import { GetTeachersInput } from "@/graphql/generated";

export async function getTeachers(parent: any, { input }: { input: GetTeachersInput }) {
  try {
    const { categoryId, subject, availableDays, availableTimes, priceRange, level } = input;
    let teachers = await Course.find({}).populate("tutorId");

    if (categoryId) {
      teachers = teachers.filter((teacher) => teacher.categoryId.toString() === categoryId.toString());
    }

    if (subject) {
      teachers = teachers.filter((teacher) => teacher.subject.includes(subject));
    }

    if (level && level.length > 0) {
      teachers = teachers.filter((teacher) => level.some((item) => teacher.level.includes(item)));
    }

    if (priceRange) {
      const { min, max } = priceRange;
      teachers = teachers.filter((teacher) => {
        const price = parseFloat(teacher.price);
        return price >= parseFloat(min) && price <= parseFloat(max);
      });
    }

    if (availableTimes && availableTimes.length > 0) {
      teachers = teachers.filter((teacher) => availableTimes.some((time) => teacher.availableTimes.includes(time)));
    }

    if (availableDays && availableDays.length > 0) {
      teachers = teachers.filter((teacher) => availableDays.some((day) => teacher.availableDays.includes(day)));
    }

    return teachers;
  } catch (error) {
    console.error("Error getting teachers: ", error);
    throw new Error("Error getting teachers");
  }
}
