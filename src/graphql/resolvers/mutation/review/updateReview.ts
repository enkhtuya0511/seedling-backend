import { UpdateReviewInput } from "@/graphql/generated/client";
import Review from "@/models/review-model";

export async function updateReview(
  parent: any,
  { input, reviewId }: { input: UpdateReviewInput; reviewId: String }
) {
  try {
    const updateReview = await Review.findByIdAndUpdate(input, { new: true });
    return updateReview;
  } catch (error) {
    console.error("Error updating Review: ", error);
    throw new Error("Error updating review");
  }
}
