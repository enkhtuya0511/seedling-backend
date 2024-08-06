import { connect } from "mongoose";

const createConnection = async () => {
  try {
    const connection = await connect(process.env.MONGODB_URI as string);
    console.log("database successfully connected 💥");
    return connection;
  } catch (error) {
    console.log("error creating connection: ", error);
    throw new Error("Failed to connect to database");
  }
};

let dbConnection: any;

export const connectDB = async () => {
  try {
    if (dbConnection) {
      console.log("using existing database connection.");
      return dbConnection;
    } else {
      console.log("Creating new database connection");
      dbConnection = await createConnection();
      return dbConnection;
    }
  } catch (error) {
    console.log("db error: ", error);
  }
};
