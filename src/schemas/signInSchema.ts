import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Must provide a valid email."),
  password: z.string().min(1, "Please input your password."),
});
