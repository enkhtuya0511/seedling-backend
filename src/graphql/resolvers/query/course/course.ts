import Course from "@/models/course-model";

export async function course(parent:any, {courseId}: {courseId: string}) {
    try {
        const course = await Course.findById(courseId)
        return course
    } catch (error) {
        console.error("Error getting course: ", error);
        throw new Error("Error getting course");
    }
}