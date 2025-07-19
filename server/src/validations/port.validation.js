import { z } from "zod";

const portSchema = z
  .string()
  .transform((val) => Number(val))
  .refine((val) => Number.isInteger(val) && val > 0 && val <= 65535, {
    message: "PORT must be an integer between 1 and 65535",
  });

export const PORT = portSchema.parse(process.env.PORT ?? 8000);
