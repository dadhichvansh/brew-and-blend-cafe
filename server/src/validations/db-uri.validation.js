import { z } from "zod";

const dbUriSchema = z.object({
  MONGODB_URI: z
    .string()
    .min(1, "MONGODB_URI is required")
    .refine((val) => /^mongodb(\+srv)?:\/\/[^\s]+$/.test(val), {
      message: "MONGODB_URI must start with 'mongodb://' or 'mongodb+srv://'",
    }),

  DB_NAME: z.string().min(1, "DB_NAME cannot be empty"),
});

// validate environment variables
const result = dbUriSchema.safeParse({
  MONGODB_URI: process.env.MONGODB_URI,
  DB_NAME: process.env.DB_NAME,
});

if (!result.success) {
  throw new Error(
    "Invalid environment variables: " +
      result.error.issues.map((i) => i.message).join(", ")
  );
}

export const { MONGODB_URI, DB_NAME } = result.data;
