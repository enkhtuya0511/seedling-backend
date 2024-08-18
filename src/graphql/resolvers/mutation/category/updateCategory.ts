import { CategoryInput } from "@/graphql/generated";
import Category from "@/models/category-model";

export async function updateCategory(parent: any, { input }: { input: CategoryInput }) {
  try {
    const updateCategory = await Category.findByIdAndUpdate(
      input.categoryId,
      { name: input.name },
      {
        new: true,
      }
    );
    return updateCategory;
  } catch (error) {
    console.error("Error updating Category: ", error);
    throw new Error("Error updating Category");
  }
}
