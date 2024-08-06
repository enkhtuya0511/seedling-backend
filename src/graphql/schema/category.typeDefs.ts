import gql from "graphql-tag";

export const categoryTypeDefs = gql`
  type Category {
    _id: String!
    name: String!
  }

  type Query {
    getAllCategories: [Category!]
    getCategory(categoryId: String!): Category!
  }

  input CategoryInput {
    categoryId: String!
    name: String!
  }

  type Mutation {
    createNewCategory(categoryName: String!): Category!
    updateCategory(input: CategoryInput!): Category!
    deleteCategory(categoryId: String!): Category
  }
`;