import User from "@/models/user-model";

export async function deleteUser(parent: any, {userId}: {userId: string}) {
    try {
        const deletedTransaction = await User.findByIdAndDelete(userId);
        return deletedTransaction;
    } catch (error) {
        console.error("Error deleting user");
        throw new Error("Error deleting user");
    }
}