import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
    },
    comment: {
      type: String,
      required: [true, "Please provide a comment"],
    },
    rating: {
      type: Number,
      required: [true, "Please provide a rating"],
    },
  },
  { timestamps: true }
);

const Review =
  mongoose.models?.review || mongoose.model("Review", reviewSchema);

export default Review;
