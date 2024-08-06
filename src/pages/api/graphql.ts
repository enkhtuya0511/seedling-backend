// import { startServerAndCreateNextHandler } from "@as-integrations/next";
// import { ApolloServer } from "@apollo/server";
// import { NextRequest } from "next/server";
// import { connectDB } from "@/utils/db-connect";
// import { resolvers } from "@/graphql/resolvers";
// import mergedTypeDefs from "@/graphql/schema";
// import allowCors from "@/utils/allowCors";

// connectDB();

// const server = new ApolloServer({
//   typeDefs: mergedTypeDefs,
//   resolvers,
//   introspection: true,
// });

// const handler = startServerAndCreateNextHandler<NextRequest>(server, {
//   context: async (req) => ({ req }),
// });

// export const config = {
//   bodyParser: false,
//   externalResolver: true,
// };

// export default allowCors(handler);