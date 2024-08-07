import User from "@/models/user-model";

export async function updateUser(parent: any, {input, userId}: {input: any, userId: string}) {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, input, { new: true });
        return updatedUser;
    } catch (error) {
        console.error("Error updating user: ", error);
        throw new Error("Error updating user");
    }
}