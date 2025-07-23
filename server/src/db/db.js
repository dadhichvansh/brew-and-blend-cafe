import mongoose from "mongoose";
import { db } from "../validations/db-uri.validation.js";

const connectionString = `${db.MONGODB_URI}/${db.DB_NAME}`;

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(connectionString);
    console.log("MongoDB connected:", connectionInstance.connection.host);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};
