import { gql } from "graphql-tag";

export const reviewTypeDefs = gql`
  type Review {
    _id: String!
    studentId: String!
    comment: String!
    rating: Float!
  }

  type Query {
    reviews: [Review!]
    review(reviewId: String!): Review!
  }

  input CreateReviewInput {
    studentId: String!
    comment: String!
    rating: Float!
  }

  input UpdateReviewInput {
    _id: String!
    studentId: String!
    comment: String
    rating: Float
  }

  type Mutation {
    createReview(input: CreateReviewInput!): Review!
    updateReview(input: UpdateReviewInput!): Review!
    deleteReview(reviewId: String!): Review
  }
`;
