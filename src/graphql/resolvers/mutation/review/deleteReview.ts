import Review from "@/models/review-model";

export async function deleteReview(
  parent: any,
  { reviewId }: { reviewId: String }
) {
  try {
    const deletedReview = await Review.findByIdAndDelete(reviewId);
    return deletedReview;
  } catch (error) {
    console.error("Error deleting Review: ", error);
    throw new Error("Error delething review");
  }
}
