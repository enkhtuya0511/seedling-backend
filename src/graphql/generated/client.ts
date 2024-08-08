export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CategoryInput = {
  categoryId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Course = {
  __typename?: 'Course';
  _id: Scalars['String']['output'];
  availableDays?: Maybe<Array<Scalars['String']['output']>>;
  availableTimes?: Maybe<Array<Scalars['String']['output']>>;
  categoryId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  enrolledStudentIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  level?: Maybe<Array<Scalars['String']['output']>>;
  price: Scalars['String']['output'];
  reviewIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  topic?: Maybe<Array<Scalars['String']['output']>>;
  videoLesson?: Maybe<Scalars['String']['output']>;
};

export type CreateCourseInput = {
  availableDays?: InputMaybe<Array<Scalars['String']['input']>>;
  availableTimes?: InputMaybe<Array<Scalars['String']['input']>>;
  categoryId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  level?: InputMaybe<Array<Scalars['String']['input']>>;
  price: Scalars['String']['input'];
  topic?: InputMaybe<Array<Scalars['String']['input']>>;
  videoLesson?: InputMaybe<Scalars['String']['input']>;
};

export type CreateReviewInput = {
  comment: Scalars['String']['input'];
  rating: Scalars['Float']['input'];
  studentId: Scalars['String']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createCourse: Course;
  createReview: Review;
  deleteCategory?: Maybe<Category>;
  deleteCourse?: Maybe<Course>;
  deleteReview?: Maybe<Review>;
  deleteUser?: Maybe<User>;
  login?: Maybe<Token>;
  signUp: User;
  updateCategory: Category;
  updateCourse: Course;
  updateReview: Review;
  updateUser: User;
};


export type MutationCreateCategoryArgs = {
  categoryName: Scalars['String']['input'];
};


export type MutationCreateCourseArgs = {
  input: CreateCourseInput;
  userId: Scalars['String']['input'];
};


export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
};


export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['String']['input'];
};


export type MutationDeleteCourseArgs = {
  courseId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationDeleteReviewArgs = {
  reviewId: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationUpdateCategoryArgs = {
  input: CategoryInput;
};


export type MutationUpdateCourseArgs = {
  courseId: Scalars['String']['input'];
  input: UpdateCourseInput;
};


export type MutationUpdateReviewArgs = {
  input: UpdateReviewInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
  userId: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<Array<Category>>;
  category: Category;
  course: Course;
  courses?: Maybe<Array<Course>>;
  review: Review;
  reviews?: Maybe<Array<Review>>;
  user: User;
  users?: Maybe<Array<User>>;
};


export type QueryCategoryArgs = {
  categoryId: Scalars['String']['input'];
};


export type QueryCourseArgs = {
  courseId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReviewArgs = {
  reviewId: Scalars['String']['input'];
};


export type QueryUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Resume = {
  __typename?: 'Resume';
  certificationUrls?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  education?: Maybe<Scalars['String']['output']>;
  workExperiences?: Maybe<Scalars['String']['output']>;
};

export type ResumeInput = {
  certificationUrls?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  education?: InputMaybe<Scalars['String']['input']>;
  workExperiences?: InputMaybe<Scalars['String']['input']>;
};

export type Review = {
  __typename?: 'Review';
  _id: Scalars['String']['output'];
  comment: Scalars['String']['output'];
  rating: Scalars['Float']['output'];
  studentId: Scalars['String']['output'];
};

export type SignUpInput = {
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  profilePic?: InputMaybe<Scalars['String']['input']>;
};

export type Token = {
  __typename?: 'Token';
  token?: Maybe<Scalars['String']['output']>;
};

export type TutorProfile = {
  __typename?: 'TutorProfile';
  courseIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  resume?: Maybe<Resume>;
};

export type TutorProfileInput = {
  courseIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  resume?: InputMaybe<ResumeInput>;
};

export type UpdateCourseInput = {
  availableDays?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  availableTimes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  enrolledStudentIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  level?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<Scalars['String']['input']>;
  reviewIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topic?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoLesson?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  studentId: Scalars['String']['input'];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  favorites?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  profilePic?: InputMaybe<Scalars['String']['input']>;
  tutorProfile?: InputMaybe<TutorProfileInput>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String']['output'];
  email: Scalars['String']['output'];
  favorites?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fullName: Scalars['String']['output'];
  otpCode?: Maybe<Scalars['String']['output']>;
  otpCodeExpires?: Maybe<Scalars['Float']['output']>;
  password: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  profilePic: Scalars['String']['output'];
  tutorProfile?: Maybe<TutorProfile>;
};


