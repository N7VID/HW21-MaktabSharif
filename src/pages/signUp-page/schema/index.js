import { z } from "zod";

export const schema = z.object({
  phoneNumber: z
    .string()
    .min(1, "Phone Number is required.")
    .regex(
      /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g,
      "Invalid phone number format."
    ),

  password: z
    .string()
    .min(1, "Password is required.")
    .regex(/^(?=.*[A-Za-z])(?=.*\d).+$/, "At least one letter and one number."),
});
