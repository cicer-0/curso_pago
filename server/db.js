// db.js

import mongoose from "mongoose";
import { MONGODB_URI_COURSES, MONGODB_URI_PAYMENTS } from "./config.js";

export const connectCoursesDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = mongoose.createConnection(MONGODB_URI_COURSES);
    console.log(`Courses MongoDB Connected: ${conn.connection}`);
    return conn;
  } catch (error) {
    console.error(`Error connecting to Courses DB: ${error.message}`);
    process.exit(1);
  }
};

export const connectPaymentsDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = mongoose.createConnection(MONGODB_URI_PAYMENTS);
    console.log(`Payments MongoDB Connected: ${conn.connection}`);
    return conn;
  } catch (error) {
    console.error(`Error connecting to Payments DB: ${error.message}`);
    process.exit(1);
  }
};
