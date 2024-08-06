import mongoose from "mongoose";

const Resume = new mongoose.Schema({
  education: String,
  workExperiences: String,
  certificationUrls: Array,
});

const TutorProfile = new mongoose.Schema({
  courseIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      default: []
    },
  ],
  resume: Resume,
});

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Please provide a phoneNumber"],
    },
    password: {
      type: String,
      minlength: 7,
    },
    profilePic: {
      type: String,
      default: "",
    },
    tutorProfile: TutorProfile,

    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        default: []
      },
    ],
    otpCode: {
      type: String,
      default: ""
    },
    otpCodeExpires: Date,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
