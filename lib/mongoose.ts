import mongoose from "mongoose";

const MONGODB_URI: string | undefined = process.env.MONGODB_URI;
let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!MONGODB_URI) {
    return console.error("missing MONGODB_URI");
  }

  try {
    await mongoose.connect(MONGODB_URI, { dbName: "aurora" });
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Mongodb connection error", error);
  }
};
