import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, { message: "Username must be at least 3 characters." })
    .max(20, { message: "Username must be no more than 20 characters." }),
  email: z.email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." })
    .max(16, { message: "Password must be no more than 16 characters." }),
});

export const registrationSchema = loginSchema.extend({
  username: z
    .string()
    .trim()
    .min(3, { message: "Username must be at least 3 characters." })
    .max(20, { message: "Username must be no more than 20 characters." }),
  fullName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(50, { message: "Name must be no more than 50 characters." }),
});

export const emailVerificationSchema = z.object({
  token: z.string().trim().length(8),
  email: z.email(),
});
