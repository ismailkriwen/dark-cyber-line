"use client";

import { getProfile } from "@/lib/actions/user.actions";
import { Button, Spinner, cn, useDisclosure } from "@nextui-org/react";
import { Session } from "next-auth";
import { useQuery } from "react-query";
import { NewMessage } from "./modal/message";

export const Overview = ({
  name,
  session,
}: {
  name: string;
  session: Session | null;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["profile_info"],
    queryFn: async () => await getProfile(name),
  });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex items-center justify-center mt-40 h-full">
        <div className="bg-slate-900 h-[400px] w-[500px] flex items-center justify-center flex-col px-6 relative">
          {isLoading ? (
            <Spinner color="default" />
          ) : (
            <div className="w-full">
              <img
                src={data?.image ? data?.image : "/assets/backup.jpg"}
                alt="Profile image"
                className="w-64 aspect-square absolute left-1/2 -translate-x-1/2 rounded-full -top-1/4"
              />
              <div className="mt-14 w-full flex items-center justify-between flex-col">
                <div className="text-cyan-500 text-lg font-semibold text-center pt-4">
                  {name === session?.user?.name ? data?.name : "Anonymous"}
                  <div className="text-small font-semibold pt-1 text-default-600 italic">
                    We are dangerous
                  </div>
                </div>
                <div className="space-y-1 italic font-semibold text-small w-full text-left mt-4">
                  <div>Rank: {data?.role}</div>
                  <div>IP Adress: 192.299.222.0</div>
                </div>
                {session?.user.email != data?.email && (
                  <Button
                    onPress={onOpen}
                    className="w-full"
                    color="primary"
                    radius="sm"
                  >
                    Message
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <NewMessage
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        receiver={data?.email!}
        sender={session?.user?.email!}
      />
    </>
  );
};
