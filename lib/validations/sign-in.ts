import * as z from "zod";

export const formSchema = z.object({
  email: z.string().email({ message: "Invalid email type" }),
  password: z.string().min(4, { message: "Password is short." }),
});
