import jwt from "jsonwebtoken";
import User from "@/models/user-model";

type JwtPayload = {
  email: string;
  userId: string;
};

export async function user(parent: any, { token }: { token: string }) {
  try {
    const decoded = jwt.verify(
      token as string,
      process.env.PRIVATEKEY as string
    ) as JwtPayload;

    const user = await User.findById(decoded.userId);
    return user;
  } catch (error) {
    console.error("Error getting user: ", error);
    throw new Error("Error getting user");
  }
}
