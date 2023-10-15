import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const CategoryPage = async () => {
  const session = await getAuthSession();
  if (!session?.user) redirect("/sign-in");
  else redirect("/dashboard");
};

export default CategoryPage;
