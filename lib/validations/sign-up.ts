import * as z from "zod";

export const formSchema = z.object({
  username: z.string().min(1, {
    message: "Username can't be empty",
  }),
  email: z.string().email({ message: "Invalid email type" }),
  password: z.string().min(4, { message: "Password is short." }),
});
