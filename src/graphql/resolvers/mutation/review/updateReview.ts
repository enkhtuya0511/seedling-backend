import { UpdateReviewInput } from "@/graphql/generated";
import Review from "@/models/review-model";

export async function updateReview(parent: any, { input }: { input: UpdateReviewInput }) {
  try {
    const { _id, ...updateFields } = input;

    const updatedReview = await Review.findByIdAndUpdate(_id, updateFields, {
      new: true,
    });

    if (!updatedReview) {
      throw new Error(`Review with id ${_id} not found`);
    }

    return updatedReview;
  } catch (error: any) {
    console.error("Error updating review: ", error.message);
    throw new Error("Failed to update review");
  }
}
