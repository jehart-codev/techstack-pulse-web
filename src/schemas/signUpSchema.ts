import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email("Must provide a valid email."),
    firstname: z.string().min(3, "Must provide valid firstname."),
    lastname: z.string().min(3, "Must provide valid lastname."),
    password: z
      .string()
      .min(8, "Must provide password of at least 8 characters.")
      .refine((value) => {
        /**
         * We check for password complexity here.
         */
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumbers = /\d/.test(value);
        const hasNonAlphas = /[^a-zA-Z0-9]/.test(value);

        return hasUpperCase && hasLowerCase && hasNumbers && hasNonAlphas;
      }, "Password provided must at least have one upper case letter, lower case letter, number and non alphanumeric character."),
    passwordConfirm: z.string(),
  })
  .superRefine(({ password, passwordConfirm }, ctx) => {
    if (password !== passwordConfirm) {
      ctx.addIssue({
        code: "custom",
        message: "Password fields does not match.",
        path: ["passwordConfirm"],
      });
    }
  });
