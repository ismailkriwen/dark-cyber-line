import { DashboardComponent } from "@/app/(root)/(dashboard)/dashboard/dashboard";
import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await getAuthSession();
  if (!session?.user) redirect("/sign-in");

  return <DashboardComponent />;
};

export default DashboardPage;
