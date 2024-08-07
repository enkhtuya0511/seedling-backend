import User from "@/models/user-model";
import bcrypt from "bcryptjs";

export async function signUp(
  parent: any,
  { input }: { input: any },
) {
  try {
    const { fullName, email, phoneNumber, password, profilePic } = input;
    if (!fullName || !password || !phoneNumber || !email) {
      throw new Error("All fields are required except profilePic!");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      profilePic,
    });

    return newUser;
  } catch (error: any) {
    console.error("Error in signUp:", error);
    throw new Error(error.message || "Internal server error");
  }
}
