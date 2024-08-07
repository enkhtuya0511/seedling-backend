import { mergeTypeDefs } from "@graphql-tools/merge";

import { categoryTypeDefs } from "./category.typeDefs";
import { reviewTypeDefs } from "./review.typeDefs";
import { userTypeDefs } from "./user.typeDefs";
import { courseTypeDefs } from "./course.typeDefs";

const mergedTypeDefs = mergeTypeDefs([
    userTypeDefs, courseTypeDefs
])

export default mergedTypeDefs