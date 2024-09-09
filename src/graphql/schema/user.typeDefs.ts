import gql from "graphql-tag";

export const userTypeDefs = gql`
  type Resume {
    education: String
    workExperiences: String
    certificationUrls: [String]
  }

  type TutorProfile {
    courseIds: [String]
    resume: Resume
  }

  type User {
    _id: String!
    fullName: String!
    email: String!
    phoneNumber: String!
    password: String!
    profilePic: String!

    tutorProfile: TutorProfile

    favorites: [String]
    otpCode: String
    otpCodeExpires: Float
  }

  type Course {
    _id: String!
    tutorId: User!
    subject: String!
    categoryId: String!
    description: String!
    videoLesson: String
    price: String!
    level: [String!]
    availableDays: [String!]
    availableTimes: [String!]
    enrolledStudentIds: [String]
    requestedStudentIds: [String]
    reviewIds: [String]
  }

  type Query {
    users: [User!]
    user(token: String): User!
  }

  input SignUpInput {
    fullName: String!
    email: String!
    phoneNumber: String!
    password: String!
    profilePic: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input ResumeInput {
    education: String
    workExperiences: String
    certificationUrls: [String]
  }

  input TutorProfileInput {
    courseIds: [String]
    resume: ResumeInput
  }

  input UpdateUserInput {
    fullName: String
    email: String
    phoneNumber: String
    password: String
    profilePic: String

    tutorProfile: TutorProfileInput
    favorites: String
  }

  type Token {
    token: String
  }

  type Mutation {
    signUp(input: SignUpInput!): User!
    login(input: LoginInput!): Token
    updateUser(userId: String!, input: UpdateUserInput!): User!
    deleteUser(userId: String!): User
  }
`;
