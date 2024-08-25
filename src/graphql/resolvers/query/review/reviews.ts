import Review from "@/models/review-model";

export async function reviews(parent: any, { courseId }: { courseId: string }) {
  try {
    const reviews = await Review.find({ courseId: courseId }).populate("studentId");
    return reviews;
  } catch (error) {
    console.error("Error getting Reviews: ", error);
    throw new Error("Erro getting Reviews");
  }
}
