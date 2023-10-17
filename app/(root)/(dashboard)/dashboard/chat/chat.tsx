"use client";

import { getAll } from "@/lib/actions/channel.action";
import { Button, Input, Spinner, useDisclosure } from "@nextui-org/react";
import { Role } from "@prisma/client";
import { Plus, Send } from "lucide-react";
import { Session } from "next-auth";
import { useQuery } from "react-query";
import { CreateChannelModal } from "./modals/create";

export const ChatComponent = ({ session }: { session: Session }) => {
  const { user } = session;
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { data: channels, isLoading: channelsLoading } = useQuery({
    queryKey: ["channels"],
    queryFn: async () => await getAll(),
  });

  return (
    <>
      <div className="mt-4">
        <div className="font-bold text-3xl text-center pb-2">Grey Hat Chat</div>
        <div className="grid grid-cols-4 mt-4 h-full">
          <div className="md:col-span-1 col-span-4 bg-neutral-600 px-4 py-2 md:rounded-l rounded-t space-y-1 md:text-base md:mb-0 mb-4 text-small flex flex-col justify-between">
            <div>
              {channelsLoading ? (
                <div className="pt-4 text-center">
                  <Spinner color="default" />
                </div>
              ) : (
                channels?.map((channel) => (
                  <div
                    key={channel.id}
                    className="px-4 py-2 rounded hover:bg-white/10 cursor-pointer transition"
                  >
                    {channel.name}
                  </div>
                ))
              )}
            </div>
            {session?.user?.role === Role.Admin && (
              <div>
                <Button
                  className="w-full"
                  color="success"
                  radius="full"
                  variant="ghost"
                  onPress={onOpen}
                  endContent={<Plus className="w-4 h-4" />}
                >
                  Create
                </Button>
              </div>
            )}
          </div>
          <div className="md:col-span-3 col-span-4 bg-black md:rounded-r rounded-b flex flex-col items-stretch justify-between">
            <div className="bg-neutral-700 px-6 py-4 md:rounded-tr font-semibold text-2xl">
              General
            </div>
            <div className="h-96 pt-4">
              <div className="pl-4 text-green-500 text-center">
                Welcome to chat
              </div>
            </div>
            <div>
              <Input
                type="text"
                placeholder="Chat #General"
                variant="underlined"
                classNames={{ input: "pl-4" }}
                className="text-green-500"
                endContent={
                  <Send className="text-green-500 w-5 h-5 cursor-pointer mr-4" />
                }
              />
            </div>
          </div>
        </div>
      </div>
      <CreateChannelModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </>
  );
};
