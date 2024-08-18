import Course from "@/models/course-model";
import { GetTeachersInput } from "@/graphql/generated";

export async function getTeachers(parent: any, { input }: { input: GetTeachersInput }) {
  try {
    const { categoryId, subject, availableDays, availableTimes, priceRange } = input;
    let teachers = await Course.find({});

    //fix type later
    if (categoryId) {
      teachers = teachers.filter((teacher) => teacher.categoryId.toString() === categoryId);
      //   console.log("first", categoryId, teachers[0]?.categoryId);
      //   console.log("first", categoryId === teachers[0]?.categoryId.toString());
      console.log("teachers: /categoryId ", teachers);
    }

    if (subject) {
      teachers = teachers.filter((teacher) => teacher.subject.includes(subject));
      console.log("teachers: /subject ", teachers);
    }

    if (priceRange) {
      const { min, max } = priceRange;
      teachers = teachers.filter((teacher) => {
        const price = parseFloat(teacher.price);
        return price >= parseFloat(min) && price <= parseFloat(max);
      });
      console.log("teachers: /priceRange", teachers);
    }

    if (availableTimes && availableTimes.length > 0) {
      teachers = teachers.filter((teacher) => availableTimes.some((time) => teacher.availableTimes.includes(time)));
      console.log("teachers: /availableTimes", teachers);
    }

    if (availableDays && availableDays.length > 0) {
      teachers = teachers.filter((teacher) => availableDays.some((day) => teacher.availableDays.includes(day)));
      console.log("teachers: /availableDays", teachers);
    }

    return teachers;
  } catch (error) {
    console.error("Error getting teachers: ", error);
    throw new Error("Error getting teachers");
  }
}
