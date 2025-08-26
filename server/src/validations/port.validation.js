import { z } from "zod";

const portSchema = z.object({
  PORT: z.coerce
    .number()
    .int()
    .min(1, { message: "PORT must be >= 1" })
    .max(65535, { message: "PORT must be <= 65535" })
    .default(8000),
});

const result = portSchema.safeParse({
  PORT: process.env.PORT,
});

if (!result.success) {
  throw new Error(result.error.issues.map((i) => i.message).join(", "));
}

export const PORT = result.data.PORT;
