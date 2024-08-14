import Category from "@/models/category-model";

export async function deleteCategory(
  parent: any,
  { categoryId }: { categoryId: string }
) {
  try {
    const deletedCategory = await Category.findByIdAndDelete(categoryId);
    return deletedCategory;
  } catch (error) {
    console.error("Error deleting Category");
    throw new Error("Error deleting Category");
  }
}
