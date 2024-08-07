import User from "@/models/user-model";

export async function users(parent: any) {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    console.error("Error getting users: ", error);
    throw new Error("Error getting users");
  }
}
