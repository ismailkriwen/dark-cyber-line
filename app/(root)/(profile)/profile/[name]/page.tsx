import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";
import { Overview } from "./overview";

const ProfileIdServer = async ({ params }: { params: { name: string } }) => {
  const session = await getAuthSession();
  const { name } = params;
  return <Overview name={name} session={session} />;
};

export default ProfileIdServer;
