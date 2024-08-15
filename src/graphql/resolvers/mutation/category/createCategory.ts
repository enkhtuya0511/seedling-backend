import Category from "@/models/category-model";

export async function createCategory(parent: any, { categoryName }: { categoryName: String }) {
  try {
    const newCategory = await Category.create({ name: categoryName });
    return newCategory;
  } catch (error) {
    console.error("Error creating category ", error);
    throw new Error("Error creating category");
  }
}
