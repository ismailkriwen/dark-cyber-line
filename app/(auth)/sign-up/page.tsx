import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { FormComponent } from "./form";

const SignUpPage = async () => {
  const session = await getAuthSession();
  if (session?.user) redirect("/dashboard");

  return (
    <>
      <FormComponent />
    </>
  );
};

export default SignUpPage;
