import Review from "@/models/review-model";

export async function reviews(parent: any) {
  try {
    const reviews = await Review.find({});
    return reviews;
  } catch (error) {
    console.error("Error getting Reviews: ", error);
    throw new Error("Erro getting Reviews");
  }
}
