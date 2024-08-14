import { CreateReviewInput } from "@/graphql/generated/client";
import Review from "@/models/review-model";

export async function createReview(
  parent: any,
  { input }: { input: CreateReviewInput }
) {
  try {
    const NewReview = await Review.create(input);
    return NewReview;
  } catch (error) {
    console.error("Error creathing review: ", error);
    throw new Error("Error creathing review");
  }
}
