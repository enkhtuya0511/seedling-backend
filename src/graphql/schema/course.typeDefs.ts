import gql from "graphql-tag";

export const courseTypeDefs = gql`
  type Course {
    _id: String!
    topic: [String!]
    categoryId: String!
    description: String!
    videoLesson: String
    price: String!
    level: [String!]
    availableDays: [String!]
    availableTimes: [String!]
    enrolledStudentIds: [String]

    reviewIds: [String]
  }

  type Query {
    courses: [Course!]
    course(courseId: String): Course!
  }

  input CreateCourseInput {
    topic: [String!]
    categoryId: String!
    description: String!
    videoLesson: String
    price: String!
    level: [String!]
    availableDays: [String!]
    availableTimes: [String!]
  }

  input UpdateCourseInput {
    _id: String!
    topic: [String]
    categoryId: String
    description: String
    videoLesson: String
    price: String
    level: [String]
    availableDays: [String]
    availableTimes: [String]
    enrolledStudentIds: [String]

    reviewIds: [String]
  }

  type Mutation {
    createCourse(input: CreateCourseInput!): Course!
    updateCourse(input: UpdateCourseInput!): Course!
    deleteCourse(courseId: String!): Course
  }
`;
