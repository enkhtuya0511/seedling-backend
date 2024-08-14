import Review from "@/models/review-model";

export async function review(parent: any, { reviewId }: { reviewId: String }) {
  try {
    const review = await Review.findById(reviewId);
    return review;
  } catch (error) {
    console.error("Error getting review: ", error);
    throw new Error("Error gettint review");
  }
}
