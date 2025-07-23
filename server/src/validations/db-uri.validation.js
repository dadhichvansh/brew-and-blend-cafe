import z from "zod";

const dbUriSchema = z.object({
  MONGODB_URI: z
    .string()
    .regex(/^mongodb(\+srv)?:\/\/[^\s]+$/, "Invalid MongoDB URI format"),
  DB_NAME: z.string().min(3, "DB_NAME cannot be empty"),
});

export const db = dbUriSchema.parse(process.env);
