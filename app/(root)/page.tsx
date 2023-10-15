import { About } from "@/app/(root)/About";
import { getAuthSession } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await getAuthSession();
  if (session?.user) redirect("/dashboard");

  return <About />;
};

export default Home;