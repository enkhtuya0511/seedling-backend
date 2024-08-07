import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    topic: Array,
    categoryId: {
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "Category",
      type: String,
      // required: [true, "Please provide a category"],
      required: true
    },
    description: {
      type: String,
      // required: [
        // true,
        // "Please provide a description about your private lesson",
      // ],
      required: true
    },
    videoLesson: String,
    price: {
      type: String,
      // required: [true, "Please provide a price for per 50-min"],
      required: true
    },
    level: {
      type: Array,
      required: true,
    },
    availableDays: {
      type: Array,
      required: [true, "Please provide your available days"],
    },
    availableTimes: {
      type: Array,
      required: [true, "Please provide your available times"],
    },
    enrolledStudentIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],

    reviewIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Course =
  mongoose.models?.Course || mongoose.model("Course", courseSchema);

export default Course;
