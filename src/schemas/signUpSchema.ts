import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email("Must provide a valid email."),
    fullname: z.string().min(3, "Must provide valid fullname."),
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
        const hasNonAlphas = /[W_]/.test(value); // We add _ as underscore seemed to be not included in non-alphanumerics in regex.

        console.log("value: ", value);
        console.log("hasUpperCase: ", hasUpperCase);
        console.log("hasLowerCase: ", hasLowerCase);
        console.log("hasNumbers: ", hasNumbers);
        console.log("hasNonAlphas: ", hasNonAlphas);

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
