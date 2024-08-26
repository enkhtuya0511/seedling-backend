import { UpdateUserInput } from "@/graphql/generated";
import User from "@/models/user-model";

export async function updateUser(parent: any, { input, userId }: { input: UpdateUserInput; userId: string }) {
  try {
    const user = await User.findById(userId);

    console.log("input", input);

    let newFavorites = user.favorites;
    if (input.favorites) {
      if (user.favorites.includes(input.favorites)) {
        newFavorites = user.favorites.filter((fav: string) => fav.toString() !== input.favorites);
      } else {
        newFavorites = [...user.favorites, input.favorites];
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { ...input, favorites: newFavorites },
      {
        new: true,
      }
    );

    // await User.findByIdAndUpdate(userId, { ...input, favorites: newFavorites }, { new: true });

    // const updatedUser = await User.findById(userId).populate({
    //   path: "favorites",
    //   populate: {
    //     path: "tutorId",
    //     model: "User",
    //   },
    // });

    return updatedUser;
  } catch (error) {
    console.error("Error updating user: ", error);
    throw new Error("Error updating user");
  }
}
