import gql from "graphql-tag";

export const courseTypeDefs = gql`
  type Course {
    _id: String!
    subject: String!
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

  input PriceRangeInput {
    min: String!
    max: String!
  }

  input getTeachersInput {
    categoryId: String!
    subject: String
    priceRange: PriceRangeInput!
    availableDays: [String!]
    availableTimes: [String!]
  }

  type Query {
    courses: [Course!]
    course(courseId: String): Course!
    getTeachers(input: getTeachersInput!): [Course]
    subjectsByCategory(categoryId: String!): [String!]
  }

  input CreateCourseInput {
    subject: String!
    categoryId: String!
    description: String!
    videoLesson: String
    price: String!
    level: [String!]
    availableDays: [String!]
    availableTimes: [String!]
  }

  input UpdateCourseInput {
    subject: String
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
    createCourse(input: CreateCourseInput!, userId: String!): Course!
    updateCourse(input: UpdateCourseInput!, courseId: String!): Course!
    deleteCourse(courseId: String!, userId: String!): Course
  }
`;
