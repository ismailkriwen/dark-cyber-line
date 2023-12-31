import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await getAuthSession();
  if (!session?.user) redirect("/sign-in");

  return <></>;
};

export default DashboardPage;
