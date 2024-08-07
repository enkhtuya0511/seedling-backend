import Course from "@/models/course-model";

export async function courses(parent:any) {
    try {
        const courses = await Course.find({})
        return courses
    } catch (error) {
        console.error("Error getting courses: ", error);
        throw new Error("Error getting courses");
    }
}