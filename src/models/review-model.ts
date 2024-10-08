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
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  { timestamps: true }
);

const Review = mongoose.models?.Review || mongoose.model("Review", reviewSchema);

export default Review;
