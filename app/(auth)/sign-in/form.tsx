"use client";

import { formSchema } from "@/lib/validations/sign-in";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Link } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { checkUser } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const FormComponent = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const checkErrors = () => {
    const errors = Object.values(form.formState.errors);
    if (errors.length > 0) {
      errors.map((error) => {
        toast.error(error.message);
      });
    }
  };

  const isLoading = form.formState.isLoading || form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { email, password } = values;
    const response = await checkUser({ email, password });
    // @ts-ignore
    if (response?.error)
      toast.error(response.error, { position: "bottom-right" });
    else {
      toast.success("Signed in successfully!", { position: "bottom-right" });
      signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      router.push("/dashboard");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center sign-in">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="text-white w-[450px] text-transparent bg-neutral-950 rounded-md shadow-lg shadow-white/25 p-8"
        >
          <div className="text-3xl text-center py-6 bg-clip-text bg-gradient-to-b from-white to-cyan-500">
            Login
          </div>
          <Button
            variant="bordered"
            className="text-white w-full my-4"
            onClick={() => signIn("google")}
          >
            Continue with google
          </Button>

          <div className="space-y-3 text-white">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      variant="underlined"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type={isVisible ? "text" : "password"}
                      variant="underlined"
                      placeholder="Password"
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={() => setIsVisible((prev) => !prev)}
                        >
                          {isVisible ? (
                            <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <Eye className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button
            radius="sm"
            disabled={isLoading}
            isLoading={isLoading}
            type="submit"
            onClick={checkErrors}
            variant="bordered"
            className="text-cyan-500 text-base hover:bg-black data-[hover]:bg-black mt-10 mb-4 px-10"
          >
            {isLoading ? "Submitting" : "Submit"}
          </Button>
          <div className="text-right text-white">
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-cyan-500" underline="hover">
              Sign up
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};
