import gql from "graphql-tag";

export const categoryTypeDefs = gql`
  type Category {
    _id: String!
    name: String!
  }

  type Query {
    categories: [Category!]
    category(categoryId: String!): Category!
  }

  input CategoryInput {
    categoryId: String!
    name: String!
  }

  type Mutation {
    createCategory(categoryName: String!): Category!
    updateCategory(input: CategoryInput!): Category!
    deleteCategory(categoryId: String!): Category
  }
`;
