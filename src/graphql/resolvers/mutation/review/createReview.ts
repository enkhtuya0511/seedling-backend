import { CreateReviewInput } from "@/graphql/generated";
import Course from "@/models/course-model";
import Review from "@/models/review-model";

export async function createReview(parent: any, { input }: { input: CreateReviewInput }) {
  try {
    const NewReview = await Review.create(input);

    await Course.findByIdAndUpdate(input.courseId, {
      $push: { reviewIds: NewReview._id },
    });

    return NewReview;
  } catch (error) {
    console.error("Error creathing review: ", error);
    throw new Error("Error creathing review");
  }
}
