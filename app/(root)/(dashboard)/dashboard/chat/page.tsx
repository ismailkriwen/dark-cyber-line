import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { ChatComponent } from "./chat";

const ChatPage = async () => {
  const session = await getAuthSession();
  if (!session?.user) redirect("/sign-in");

  return <ChatComponent session={session} />;
};

export default ChatPage;
