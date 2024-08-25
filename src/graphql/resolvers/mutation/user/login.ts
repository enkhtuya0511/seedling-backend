import User from "@/models/user-model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function login(parent: any, { input }: { input: any }) {
  try {
    const { email, password } = input;
    if (!email || !password) {
      throw new Error("All fields are required");
    }

    const existingUser = await User.findOne({ email });
    const validPassword = await bcrypt.compare(password, existingUser?.password || "");
    if (!existingUser || !validPassword) {
      throw new Error("Invalid email or password");
    }

    const data = jwt.sign(
      {
        userId: existingUser._id,
        email: existingUser.email,
      },
      process.env.PRIVATEKEY as string,
      { expiresIn: "11d" }
    );

    const token = { token: data };
    return token;
  } catch (error: any) {
    console.error("Error in login:", error);
    throw new Error(error.message || "Internal server error");
  }
}
