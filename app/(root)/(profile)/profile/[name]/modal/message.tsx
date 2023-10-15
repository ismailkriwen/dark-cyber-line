"use client";
// import { createMessage } from "@/lib/actions/conversation.actions";
import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
} from "@nextui-org/react";
import { Send, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const NewMessage = ({
  isOpen,
  onOpenChange,
  receiver,
  sender,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  receiver: string;
  sender: string;
}) => {
  const router = useRouter();
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const createMessage = async ({
    title,
    content,
    creator,
    receiver,
  }: {
    title: string;
    content: string;
    creator: string;
    receiver: string;
  }) => {
    return true;
  };
  const send = async (close: () => void) => {
    setIsLoading(true);
    const res = await createMessage({
      title: subject,
      content,
      creator: sender!,
      receiver: receiver!,
    });
    if (res) {
      router.push(`/conversation/${res}`);
      close();
    } else setError("Something went wrong");
    setIsLoading(false);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="dark">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
              Message to <span className="pl-2 text-default-400"></span>
            </ModalHeader>
            <Divider className="mb-2" />
            <ModalBody>
              <Input
                radius="sm"
                label="Subject"
                variant="bordered"
                value={subject}
                onValueChange={setSubject}
              />
              <Textarea
                variant="bordered"
                label="Content"
                placeholder="Message content..."
                radius="sm"
                value={content}
                onValueChange={setContent}
              />
              {error && (
                <div className="py-2">
                  <div className="rounded px-4 py-2 border border-danger text-danger flex items-center gap-3">
                    <XCircle className="w-4 h-4" />
                    <div>{error}</div>
                  </div>
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button
                variant="ghost"
                color="success"
                onPress={() => send(onClose)}
                startContent={!isLoading && <Send className="w-4 h-4" />}
                isLoading={isLoading}
              >
                Send
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
