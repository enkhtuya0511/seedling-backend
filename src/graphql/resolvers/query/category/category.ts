import Category from "@/models/category-model";

export async function category(
  parent: any,
  { categoryId }: { categoryId: string }
) {
  try {
    const category = await Category.findById(categoryId);
    return category;
  } catch (error) {
    console.error("Error getting category: ", error);
    throw new Error("Error getting category");
  }
}
