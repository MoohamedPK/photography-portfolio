import { config } from "dotenv";

config({path:".env"})

export const {
  PORT,
  DB_URI,
  CLOUDINARY_KEY_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = process.env;