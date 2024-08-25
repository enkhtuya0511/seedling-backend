// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
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
  requestedStudentIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  reviewIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  subject: Scalars['String']['output'];
  tutorId: User;
  videoLesson?: Maybe<Scalars['String']['output']>;
};

export type CreateCourseInput = {
  availableDays?: InputMaybe<Array<Scalars['String']['input']>>;
  availableTimes?: InputMaybe<Array<Scalars['String']['input']>>;
  categoryId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  level?: InputMaybe<Array<Scalars['String']['input']>>;
  price: Scalars['String']['input'];
  subject: Scalars['String']['input'];
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

export type PriceRangeInput = {
  max: Scalars['String']['input'];
  min: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<Array<Category>>;
  category: Category;
  course: Course;
  courses?: Maybe<Array<Course>>;
  coursesByUser?: Maybe<Array<Maybe<Course>>>;
  getTeachers?: Maybe<Array<Maybe<Course>>>;
  review: Review;
  reviews?: Maybe<Array<Review>>;
  subjectsByCategory?: Maybe<Array<Scalars['String']['output']>>;
  user: User;
  users?: Maybe<Array<User>>;
};


export type QueryCategoryArgs = {
  categoryId: Scalars['String']['input'];
};


export type QueryCourseArgs = {
  courseId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCoursesByUserArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetTeachersArgs = {
  input: GetTeachersInput;
};


export type QueryReviewArgs = {
  reviewId: Scalars['String']['input'];
};


export type QuerySubjectsByCategoryArgs = {
  categoryId: Scalars['String']['input'];
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
  requestedStudentIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reviewIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subject?: InputMaybe<Scalars['String']['input']>;
  videoLesson?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReviewInput = {
  _id: Scalars['String']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  studentId: Scalars['String']['input'];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  favorites?: InputMaybe<Scalars['String']['input']>;
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

export type GetTeachersInput = {
  availableDays?: InputMaybe<Array<Scalars['String']['input']>>;
  availableTimes?: InputMaybe<Array<Scalars['String']['input']>>;
  categoryId: Scalars['String']['input'];
  level?: InputMaybe<Array<Scalars['String']['input']>>;
  priceRange: PriceRangeInput;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', _id: string, fullName: string, email: string, phoneNumber: string, password: string, profilePic: string, favorites?: Array<string | null> | null, otpCode?: string | null, otpCodeExpires?: number | null, tutorProfile?: { __typename?: 'TutorProfile', courseIds?: Array<string | null> | null, resume?: { __typename?: 'Resume', education?: string | null, workExperiences?: string | null, certificationUrls?: Array<string | null> | null } | null } | null }> | null };

export type UserQueryVariables = Exact<{
  token?: InputMaybe<Scalars['String']['input']>;
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', _id: string, fullName: string, email: string, phoneNumber: string, password: string, profilePic: string, favorites?: Array<string | null> | null, otpCode?: string | null, otpCodeExpires?: number | null, tutorProfile?: { __typename?: 'TutorProfile', courseIds?: Array<string | null> | null, resume?: { __typename?: 'Resume', education?: string | null, workExperiences?: string | null, certificationUrls?: Array<string | null> | null } | null } | null } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'Token', token?: string | null } | null };

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', _id: string, fullName: string, email: string, phoneNumber: string, password: string, profilePic: string, favorites?: Array<string | null> | null, otpCode?: string | null, otpCodeExpires?: number | null, tutorProfile?: { __typename?: 'TutorProfile', courseIds?: Array<string | null> | null, resume?: { __typename?: 'Resume', education?: string | null, workExperiences?: string | null, certificationUrls?: Array<string | null> | null } | null } | null } };

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'User', _id: string, fullName: string, email: string, phoneNumber: string, password: string, profilePic: string, favorites?: Array<string | null> | null, otpCode?: string | null, otpCodeExpires?: number | null } | null };

export type UpdateUserMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', _id: string, fullName: string, email: string, phoneNumber: string, password: string, profilePic: string, favorites?: Array<string | null> | null, otpCode?: string | null, otpCodeExpires?: number | null, tutorProfile?: { __typename?: 'TutorProfile', courseIds?: Array<string | null> | null, resume?: { __typename?: 'Resume', education?: string | null, workExperiences?: string | null, certificationUrls?: Array<string | null> | null } | null } | null } };

export type CoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type CoursesQuery = { __typename?: 'Query', courses?: Array<{ __typename?: 'Course', _id: string, subject: string, categoryId: string, description: string, videoLesson?: string | null, price: string, level?: Array<string> | null, availableDays?: Array<string> | null, availableTimes?: Array<string> | null, enrolledStudentIds?: Array<string | null> | null, requestedStudentIds?: Array<string | null> | null, reviewIds?: Array<string | null> | null, tutorId: { __typename?: 'User', _id: string, fullName: string, email: string, phoneNumber: string, password: string, profilePic: string, favorites?: Array<string | null> | null, tutorProfile?: { __typename?: 'TutorProfile', courseIds?: Array<string | null> | null, resume?: { __typename?: 'Resume', education?: string | null, workExperiences?: string | null, certificationUrls?: Array<string | null> | null } | null } | null } }> | null };

export type CourseQueryVariables = Exact<{
  courseId?: InputMaybe<Scalars['String']['input']>;
}>;


export type CourseQuery = { __typename?: 'Query', course: { __typename?: 'Course', _id: string, subject: string, categoryId: string, description: string, videoLesson?: string | null, price: string, level?: Array<string> | null, availableDays?: Array<string> | null, availableTimes?: Array<string> | null, enrolledStudentIds?: Array<string | null> | null, requestedStudentIds?: Array<string | null> | null, reviewIds?: Array<string | null> | null, tutorId: { __typename?: 'User', _id: string, fullName: string, email: string, phoneNumber: string, password: string, profilePic: string, favorites?: Array<string | null> | null, tutorProfile?: { __typename?: 'TutorProfile', courseIds?: Array<string | null> | null, resume?: { __typename?: 'Resume', education?: string | null, workExperiences?: string | null, certificationUrls?: Array<string | null> | null } | null } | null } } };

export type CreateCourseMutationVariables = Exact<{
  input: CreateCourseInput;
  userId: Scalars['String']['input'];
}>;


export type CreateCourseMutation = { __typename?: 'Mutation', createCourse: { __typename?: 'Course', _id: string, subject: string, categoryId: string, description: string, videoLesson?: string | null, price: string, level?: Array<string> | null, availableDays?: Array<string> | null, availableTimes?: Array<string> | null, enrolledStudentIds?: Array<string | null> | null, requestedStudentIds?: Array<string | null> | null, reviewIds?: Array<string | null> | null, tutorId: { __typename?: 'User', _id: string, fullName: string, email: string, phoneNumber: string, password: string, profilePic: string, tutorProfile?: { __typename?: 'TutorProfile', courseIds?: Array<string | null> | null, resume?: { __typename?: 'Resume', education?: string | null, workExperiences?: string | null, certificationUrls?: Array<string | null> | null } | null } | null } } };

export type UpdateCourseMutationVariables = Exact<{
  input: UpdateCourseInput;
  courseId: Scalars['String']['input'];
}>;


export type UpdateCourseMutation = { __typename?: 'Mutation', updateCourse: { __typename?: 'Course', _id: string, subject: string, categoryId: string, description: string, videoLesson?: string | null, price: string, level?: Array<string> | null, availableDays?: Array<string> | null, availableTimes?: Array<string> | null, enrolledStudentIds?: Array<string | null> | null, requestedStudentIds?: Array<string | null> | null, reviewIds?: Array<string | null> | null, tutorId: { __typename?: 'User', _id: string, fullName: string, email: string, phoneNumber: string, profilePic: string, tutorProfile?: { __typename?: 'TutorProfile', courseIds?: Array<string | null> | null, resume?: { __typename?: 'Resume', education?: string | null, workExperiences?: string | null, certificationUrls?: Array<string | null> | null } | null } | null } } };

export type DeleteCourseMutationVariables = Exact<{
  courseId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type DeleteCourseMutation = { __typename?: 'Mutation', deleteCourse?: { __typename?: 'Course', _id: string, subject: string, categoryId: string, description: string, videoLesson?: string | null, price: string, level?: Array<string> | null, availableDays?: Array<string> | null, availableTimes?: Array<string> | null, enrolledStudentIds?: Array<string | null> | null, requestedStudentIds?: Array<string | null> | null, reviewIds?: Array<string | null> | null, tutorId: { __typename?: 'User', _id: string, fullName: string, email: string, phoneNumber: string } } | null };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories?: Array<{ __typename?: 'Category', _id: string, name: string }> | null };

export type CategoryQueryVariables = Exact<{
  categoryId: Scalars['String']['input'];
}>;


export type CategoryQuery = { __typename?: 'Query', category: { __typename?: 'Category', _id: string, name: string } };

export type DeleteCategoryMutationVariables = Exact<{
  categoryId: Scalars['String']['input'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory?: { __typename?: 'Category', _id: string, name: string } | null };

export type CreateCategoryMutationVariables = Exact<{
  categoryName: Scalars['String']['input'];
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', createCategory: { __typename?: 'Category', _id: string, name: string } };

export type SubjectsByCategoryQueryVariables = Exact<{
  categoryId: Scalars['String']['input'];
}>;


export type SubjectsByCategoryQuery = { __typename?: 'Query', subjectsByCategory?: Array<string> | null };

export type CoursesByUserQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type CoursesByUserQuery = { __typename?: 'Query', coursesByUser?: Array<{ __typename?: 'Course', _id: string, subject: string, categoryId: string, description: string, videoLesson?: string | null, price: string, level?: Array<string> | null, availableDays?: Array<string> | null, availableTimes?: Array<string> | null, enrolledStudentIds?: Array<string | null> | null, requestedStudentIds?: Array<string | null> | null, reviewIds?: Array<string | null> | null } | null> | null };


export const UsersDocument = gql`
    query Users {
  users {
    _id
    fullName
    email
    phoneNumber
    password
    profilePic
    tutorProfile {
      courseIds
      resume {
        education
        workExperiences
        certificationUrls
      }
    }
    favorites
    otpCode
    otpCodeExpires
  }
}
    `;
export type UsersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UsersQuery, UsersQueryVariables>
    } & TChildProps;
export function withUsers<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UsersQuery,
  UsersQueryVariables,
  UsersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UsersQuery, UsersQueryVariables, UsersProps<TChildProps, TDataName>>(UsersDocument, {
      alias: 'users',
      ...operationOptions
    });
};

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export function useUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersSuspenseQueryHookResult = ReturnType<typeof useUsersSuspenseQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const UserDocument = gql`
    query User($token: String) {
  user(token: $token) {
    _id
    fullName
    email
    phoneNumber
    password
    profilePic
    tutorProfile {
      courseIds
      resume {
        education
        workExperiences
        certificationUrls
      }
    }
    favorites
    otpCode
    otpCodeExpires
  }
}
    `;
export type UserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UserQuery, UserQueryVariables>
    } & TChildProps;
export function withUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserQuery,
  UserQueryVariables,
  UserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UserQuery, UserQueryVariables, UserProps<TChildProps, TDataName>>(UserDocument, {
      alias: 'user',
      ...operationOptions
    });
};

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export function useUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserSuspenseQueryHookResult = ReturnType<typeof useUserSuspenseQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<LoginMutation, LoginMutationVariables>
    } & TChildProps;
export function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($input: SignUpInput!) {
  signUp(input: $input) {
    _id
    fullName
    email
    phoneNumber
    password
    profilePic
    tutorProfile {
      courseIds
      resume {
        education
        workExperiences
        certificationUrls
      }
    }
    favorites
    otpCode
    otpCodeExpires
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;
export type SignUpProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>
    } & TChildProps;
export function withSignUp<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SignUpMutation,
  SignUpMutationVariables,
  SignUpProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, SignUpMutation, SignUpMutationVariables, SignUpProps<TChildProps, TDataName>>(SignUpDocument, {
      alias: 'signUp',
      ...operationOptions
    });
};

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($userId: String!) {
  deleteUser(userId: $userId) {
    _id
    fullName
    email
    phoneNumber
    password
    profilePic
    favorites
    otpCode
    otpCodeExpires
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;
export type DeleteUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>
    } & TChildProps;
export function withDeleteUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteUserMutation,
  DeleteUserMutationVariables,
  DeleteUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteUserMutation, DeleteUserMutationVariables, DeleteUserProps<TChildProps, TDataName>>(DeleteUserDocument, {
      alias: 'deleteUser',
      ...operationOptions
    });
};

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($userId: String!, $input: UpdateUserInput!) {
  updateUser(userId: $userId, input: $input) {
    _id
    fullName
    email
    phoneNumber
    password
    profilePic
    tutorProfile {
      courseIds
      resume {
        education
        workExperiences
        certificationUrls
      }
    }
    favorites
    otpCode
    otpCodeExpires
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
export type UpdateUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>
    } & TChildProps;
export function withUpdateUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UpdateUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateUserMutation, UpdateUserMutationVariables, UpdateUserProps<TChildProps, TDataName>>(UpdateUserDocument, {
      alias: 'updateUser',
      ...operationOptions
    });
};

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const CoursesDocument = gql`
    query Courses {
  courses {
    _id
    tutorId {
      _id
      fullName
      email
      phoneNumber
      password
      profilePic
      tutorProfile {
        courseIds
        resume {
          education
          workExperiences
          certificationUrls
        }
      }
      favorites
    }
    subject
    categoryId
    description
    videoLesson
    price
    level
    availableDays
    availableTimes
    enrolledStudentIds
    requestedStudentIds
    reviewIds
  }
}
    `;
export type CoursesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CoursesQuery, CoursesQueryVariables>
    } & TChildProps;
export function withCourses<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CoursesQuery,
  CoursesQueryVariables,
  CoursesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CoursesQuery, CoursesQueryVariables, CoursesProps<TChildProps, TDataName>>(CoursesDocument, {
      alias: 'courses',
      ...operationOptions
    });
};

/**
 * __useCoursesQuery__
 *
 * To run a query within a React component, call `useCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCoursesQuery(baseOptions?: Apollo.QueryHookOptions<CoursesQuery, CoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CoursesQuery, CoursesQueryVariables>(CoursesDocument, options);
      }
export function useCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CoursesQuery, CoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CoursesQuery, CoursesQueryVariables>(CoursesDocument, options);
        }
export function useCoursesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CoursesQuery, CoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CoursesQuery, CoursesQueryVariables>(CoursesDocument, options);
        }
export type CoursesQueryHookResult = ReturnType<typeof useCoursesQuery>;
export type CoursesLazyQueryHookResult = ReturnType<typeof useCoursesLazyQuery>;
export type CoursesSuspenseQueryHookResult = ReturnType<typeof useCoursesSuspenseQuery>;
export type CoursesQueryResult = Apollo.QueryResult<CoursesQuery, CoursesQueryVariables>;
export const CourseDocument = gql`
    query Course($courseId: String) {
  course(courseId: $courseId) {
    _id
    tutorId {
      _id
      fullName
      email
      phoneNumber
      password
      profilePic
      tutorProfile {
        courseIds
        resume {
          education
          workExperiences
          certificationUrls
        }
      }
      favorites
    }
    subject
    categoryId
    description
    videoLesson
    price
    level
    availableDays
    availableTimes
    enrolledStudentIds
    requestedStudentIds
    reviewIds
  }
}
    `;
export type CourseProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CourseQuery, CourseQueryVariables>
    } & TChildProps;
export function withCourse<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CourseQuery,
  CourseQueryVariables,
  CourseProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CourseQuery, CourseQueryVariables, CourseProps<TChildProps, TDataName>>(CourseDocument, {
      alias: 'course',
      ...operationOptions
    });
};

/**
 * __useCourseQuery__
 *
 * To run a query within a React component, call `useCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCourseQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *   },
 * });
 */
export function useCourseQuery(baseOptions?: Apollo.QueryHookOptions<CourseQuery, CourseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CourseQuery, CourseQueryVariables>(CourseDocument, options);
      }
export function useCourseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CourseQuery, CourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CourseQuery, CourseQueryVariables>(CourseDocument, options);
        }
export function useCourseSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CourseQuery, CourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CourseQuery, CourseQueryVariables>(CourseDocument, options);
        }
export type CourseQueryHookResult = ReturnType<typeof useCourseQuery>;
export type CourseLazyQueryHookResult = ReturnType<typeof useCourseLazyQuery>;
export type CourseSuspenseQueryHookResult = ReturnType<typeof useCourseSuspenseQuery>;
export type CourseQueryResult = Apollo.QueryResult<CourseQuery, CourseQueryVariables>;
export const CreateCourseDocument = gql`
    mutation CreateCourse($input: CreateCourseInput!, $userId: String!) {
  createCourse(input: $input, userId: $userId) {
    _id
    tutorId {
      _id
      fullName
      email
      phoneNumber
      password
      profilePic
      tutorProfile {
        courseIds
        resume {
          education
          workExperiences
          certificationUrls
        }
      }
    }
    subject
    categoryId
    description
    videoLesson
    price
    level
    availableDays
    availableTimes
    enrolledStudentIds
    requestedStudentIds
    reviewIds
  }
}
    `;
export type CreateCourseMutationFn = Apollo.MutationFunction<CreateCourseMutation, CreateCourseMutationVariables>;
export type CreateCourseProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateCourseMutation, CreateCourseMutationVariables>
    } & TChildProps;
export function withCreateCourse<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateCourseMutation,
  CreateCourseMutationVariables,
  CreateCourseProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateCourseMutation, CreateCourseMutationVariables, CreateCourseProps<TChildProps, TDataName>>(CreateCourseDocument, {
      alias: 'createCourse',
      ...operationOptions
    });
};

/**
 * __useCreateCourseMutation__
 *
 * To run a mutation, you first call `useCreateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCourseMutation, { data, loading, error }] = useCreateCourseMutation({
 *   variables: {
 *      input: // value for 'input'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreateCourseMutation(baseOptions?: Apollo.MutationHookOptions<CreateCourseMutation, CreateCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCourseMutation, CreateCourseMutationVariables>(CreateCourseDocument, options);
      }
export type CreateCourseMutationHookResult = ReturnType<typeof useCreateCourseMutation>;
export type CreateCourseMutationResult = Apollo.MutationResult<CreateCourseMutation>;
export type CreateCourseMutationOptions = Apollo.BaseMutationOptions<CreateCourseMutation, CreateCourseMutationVariables>;
export const UpdateCourseDocument = gql`
    mutation UpdateCourse($input: UpdateCourseInput!, $courseId: String!) {
  updateCourse(input: $input, courseId: $courseId) {
    _id
    tutorId {
      _id
      fullName
      email
      phoneNumber
      profilePic
      tutorProfile {
        courseIds
        resume {
          education
          workExperiences
          certificationUrls
        }
      }
    }
    subject
    categoryId
    description
    videoLesson
    price
    level
    availableDays
    availableTimes
    enrolledStudentIds
    requestedStudentIds
    reviewIds
  }
}
    `;
export type UpdateCourseMutationFn = Apollo.MutationFunction<UpdateCourseMutation, UpdateCourseMutationVariables>;
export type UpdateCourseProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateCourseMutation, UpdateCourseMutationVariables>
    } & TChildProps;
export function withUpdateCourse<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateCourseMutation,
  UpdateCourseMutationVariables,
  UpdateCourseProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateCourseMutation, UpdateCourseMutationVariables, UpdateCourseProps<TChildProps, TDataName>>(UpdateCourseDocument, {
      alias: 'updateCourse',
      ...operationOptions
    });
};

/**
 * __useUpdateCourseMutation__
 *
 * To run a mutation, you first call `useUpdateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCourseMutation, { data, loading, error }] = useUpdateCourseMutation({
 *   variables: {
 *      input: // value for 'input'
 *      courseId: // value for 'courseId'
 *   },
 * });
 */
export function useUpdateCourseMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCourseMutation, UpdateCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCourseMutation, UpdateCourseMutationVariables>(UpdateCourseDocument, options);
      }
export type UpdateCourseMutationHookResult = ReturnType<typeof useUpdateCourseMutation>;
export type UpdateCourseMutationResult = Apollo.MutationResult<UpdateCourseMutation>;
export type UpdateCourseMutationOptions = Apollo.BaseMutationOptions<UpdateCourseMutation, UpdateCourseMutationVariables>;
export const DeleteCourseDocument = gql`
    mutation DeleteCourse($courseId: String!, $userId: String!) {
  deleteCourse(courseId: $courseId, userId: $userId) {
    _id
    tutorId {
      _id
      fullName
      email
      phoneNumber
    }
    subject
    categoryId
    description
    videoLesson
    price
    level
    availableDays
    availableTimes
    enrolledStudentIds
    requestedStudentIds
    reviewIds
  }
}
    `;
export type DeleteCourseMutationFn = Apollo.MutationFunction<DeleteCourseMutation, DeleteCourseMutationVariables>;
export type DeleteCourseProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteCourseMutation, DeleteCourseMutationVariables>
    } & TChildProps;
export function withDeleteCourse<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteCourseMutation,
  DeleteCourseMutationVariables,
  DeleteCourseProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteCourseMutation, DeleteCourseMutationVariables, DeleteCourseProps<TChildProps, TDataName>>(DeleteCourseDocument, {
      alias: 'deleteCourse',
      ...operationOptions
    });
};

/**
 * __useDeleteCourseMutation__
 *
 * To run a mutation, you first call `useDeleteCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCourseMutation, { data, loading, error }] = useDeleteCourseMutation({
 *   variables: {
 *      courseId: // value for 'courseId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteCourseMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCourseMutation, DeleteCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCourseMutation, DeleteCourseMutationVariables>(DeleteCourseDocument, options);
      }
export type DeleteCourseMutationHookResult = ReturnType<typeof useDeleteCourseMutation>;
export type DeleteCourseMutationResult = Apollo.MutationResult<DeleteCourseMutation>;
export type DeleteCourseMutationOptions = Apollo.BaseMutationOptions<DeleteCourseMutation, DeleteCourseMutationVariables>;
export const CategoriesDocument = gql`
    query Categories {
  categories {
    _id
    name
  }
}
    `;
export type CategoriesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CategoriesQuery, CategoriesQueryVariables>
    } & TChildProps;
export function withCategories<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CategoriesQuery,
  CategoriesQueryVariables,
  CategoriesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CategoriesQuery, CategoriesQueryVariables, CategoriesProps<TChildProps, TDataName>>(CategoriesDocument, {
      alias: 'categories',
      ...operationOptions
    });
};

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export function useCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesSuspenseQueryHookResult = ReturnType<typeof useCategoriesSuspenseQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryDocument = gql`
    query Category($categoryId: String!) {
  category(categoryId: $categoryId) {
    _id
    name
  }
}
    `;
export type CategoryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CategoryQuery, CategoryQueryVariables>
    } & TChildProps;
export function withCategory<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CategoryQuery,
  CategoryQueryVariables,
  CategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CategoryQuery, CategoryQueryVariables, CategoryProps<TChildProps, TDataName>>(CategoryDocument, {
      alias: 'category',
      ...operationOptions
    });
};

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables> & ({ variables: CategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export function useCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategorySuspenseQueryHookResult = ReturnType<typeof useCategorySuspenseQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($categoryId: String!) {
  deleteCategory(categoryId: $categoryId) {
    _id
    name
  }
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export type DeleteCategoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>
    } & TChildProps;
export function withDeleteCategory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteCategoryMutation,
  DeleteCategoryMutationVariables,
  DeleteCategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteCategoryMutation, DeleteCategoryMutationVariables, DeleteCategoryProps<TChildProps, TDataName>>(DeleteCategoryDocument, {
      alias: 'deleteCategory',
      ...operationOptions
    });
};

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const CreateCategoryDocument = gql`
    mutation CreateCategory($categoryName: String!) {
  createCategory(categoryName: $categoryName) {
    _id
    name
  }
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;
export type CreateCategoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>
    } & TChildProps;
export function withCreateCategory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateCategoryMutation,
  CreateCategoryMutationVariables,
  CreateCategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateCategoryMutation, CreateCategoryMutationVariables, CreateCategoryProps<TChildProps, TDataName>>(CreateCategoryDocument, {
      alias: 'createCategory',
      ...operationOptions
    });
};

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      categoryName: // value for 'categoryName'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const SubjectsByCategoryDocument = gql`
    query SubjectsByCategory($categoryId: String!) {
  subjectsByCategory(categoryId: $categoryId)
}
    `;
export type SubjectsByCategoryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SubjectsByCategoryQuery, SubjectsByCategoryQueryVariables>
    } & TChildProps;
export function withSubjectsByCategory<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SubjectsByCategoryQuery,
  SubjectsByCategoryQueryVariables,
  SubjectsByCategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SubjectsByCategoryQuery, SubjectsByCategoryQueryVariables, SubjectsByCategoryProps<TChildProps, TDataName>>(SubjectsByCategoryDocument, {
      alias: 'subjectsByCategory',
      ...operationOptions
    });
};

/**
 * __useSubjectsByCategoryQuery__
 *
 * To run a query within a React component, call `useSubjectsByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubjectsByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubjectsByCategoryQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useSubjectsByCategoryQuery(baseOptions: Apollo.QueryHookOptions<SubjectsByCategoryQuery, SubjectsByCategoryQueryVariables> & ({ variables: SubjectsByCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SubjectsByCategoryQuery, SubjectsByCategoryQueryVariables>(SubjectsByCategoryDocument, options);
      }
export function useSubjectsByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SubjectsByCategoryQuery, SubjectsByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SubjectsByCategoryQuery, SubjectsByCategoryQueryVariables>(SubjectsByCategoryDocument, options);
        }
export function useSubjectsByCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SubjectsByCategoryQuery, SubjectsByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SubjectsByCategoryQuery, SubjectsByCategoryQueryVariables>(SubjectsByCategoryDocument, options);
        }
export type SubjectsByCategoryQueryHookResult = ReturnType<typeof useSubjectsByCategoryQuery>;
export type SubjectsByCategoryLazyQueryHookResult = ReturnType<typeof useSubjectsByCategoryLazyQuery>;
export type SubjectsByCategorySuspenseQueryHookResult = ReturnType<typeof useSubjectsByCategorySuspenseQuery>;
export type SubjectsByCategoryQueryResult = Apollo.QueryResult<SubjectsByCategoryQuery, SubjectsByCategoryQueryVariables>;
export const CoursesByUserDocument = gql`
    query CoursesByUser($userId: String!) {
  coursesByUser(userId: $userId) {
    _id
    subject
    categoryId
    description
    videoLesson
    price
    level
    availableDays
    availableTimes
    enrolledStudentIds
    requestedStudentIds
    reviewIds
  }
}
    `;
export type CoursesByUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CoursesByUserQuery, CoursesByUserQueryVariables>
    } & TChildProps;
export function withCoursesByUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CoursesByUserQuery,
  CoursesByUserQueryVariables,
  CoursesByUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CoursesByUserQuery, CoursesByUserQueryVariables, CoursesByUserProps<TChildProps, TDataName>>(CoursesByUserDocument, {
      alias: 'coursesByUser',
      ...operationOptions
    });
};

/**
 * __useCoursesByUserQuery__
 *
 * To run a query within a React component, call `useCoursesByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCoursesByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCoursesByUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCoursesByUserQuery(baseOptions: Apollo.QueryHookOptions<CoursesByUserQuery, CoursesByUserQueryVariables> & ({ variables: CoursesByUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CoursesByUserQuery, CoursesByUserQueryVariables>(CoursesByUserDocument, options);
      }
export function useCoursesByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CoursesByUserQuery, CoursesByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CoursesByUserQuery, CoursesByUserQueryVariables>(CoursesByUserDocument, options);
        }
export function useCoursesByUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CoursesByUserQuery, CoursesByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CoursesByUserQuery, CoursesByUserQueryVariables>(CoursesByUserDocument, options);
        }
export type CoursesByUserQueryHookResult = ReturnType<typeof useCoursesByUserQuery>;
export type CoursesByUserLazyQueryHookResult = ReturnType<typeof useCoursesByUserLazyQuery>;
export type CoursesByUserSuspenseQueryHookResult = ReturnType<typeof useCoursesByUserSuspenseQuery>;
export type CoursesByUserQueryResult = Apollo.QueryResult<CoursesByUserQuery, CoursesByUserQueryVariables>;