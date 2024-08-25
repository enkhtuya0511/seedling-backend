import { gql } from "graphql-tag";

export const reviewTypeDefs = gql`
  type Review {
    _id: String!
    studentId: String!
    comment: String!
    rating: Float!
    courseId: String!
  }

  type Review0 {
    _id: String!
    studentId: User!
    comment: String!
    rating: Float!
    courseId: String!
  }

  type Query {
    reviews(courseId: String!): [Review0!]
    review(reviewId: String!): Review!
  }

  input CreateReviewInput {
    studentId: String!
    courseId: String!
    comment: String!
    rating: Float!
  }

  input UpdateReviewInput {
    _id: String!
    courseId: String!
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
