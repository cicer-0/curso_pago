// config.js

import { config } from "dotenv";

config();

export const MONGODB_URI_COURSES =
  process.env.MONGODB_URI_COURSES || "mongodb://localhost:27017/coursesdb";

export const MONGODB_URI_PAYMENTS =
  process.env.MONGODB_URI_PAYMENTS || "mongodb://localhost:27017/paymentsdb";
