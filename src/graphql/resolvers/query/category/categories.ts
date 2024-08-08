import Category from "@/models/category-model";

export async function categories(parent: any) {
  try {
    const categories = await Category.find({});
    return categories;
  } catch (error) {
    console.error("Error getting Categories: ", error);
    throw new Error("Error getting Categpries");
  }
}
