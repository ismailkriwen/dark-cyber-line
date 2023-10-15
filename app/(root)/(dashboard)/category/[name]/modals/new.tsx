"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
} from "@nextui-org/react";
import { Send } from "lucide-react";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createPost } from "@/lib/actions/post.action";
import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "next-auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";

const formSchema = z.object({
  content: z.string().nonempty({ message: "Content can't be empty" }),
});

export const NewModal = ({
  session,
  name,
  mutate,
  isOpen,
  onOpenChange,
  onClose,
}: {
  session: Session | null;
  name: string;
  mutate: () => void;
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
}) => {
  const [creatingPost, setCreatingPost] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { content } = values;
    if (!session?.user?.email)
      return toast.error("Not authenticated", { position: "top-center" });
    setCreatingPost(true);
    if (!name)
      return toast.error("Something went wrong.", { position: "bottom-right" });
    const post = await createPost({
      name,
      content,
      email: session.user.email,
    });
    if (!post)
      return toast.error("Something went wrong.", { position: "bottom-right" });
    toast.success("Post created successfully.", { position: "bottom-right" });
    form.resetField("content");
    mutate();
    onClose();
    setCreatingPost(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="dark">
        <ModalContent>
          {(onclose) => (
            <>
              <ModalHeader>Create new post</ModalHeader>
              <Form {...form}>
                <form
                  className="space-y-4"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <ModalBody>
                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel />
                          <FormControl>
                            <Textarea
                              variant="bordered"
                              radius="sm"
                              label="Content"
                              autoFocus
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </ModalBody>
                  <ModalFooter className="flex items-center">
                    <Button type="button" onPress={onclose} variant="light">
                      Close
                    </Button>

                    <Button
                      variant="ghost"
                      color="success"
                      startContent={
                        !creatingPost && <Send className="w-4 h-4" />
                      }
                      type="submit"
                      isLoading={creatingPost}
                    >
                      Create
                    </Button>
                  </ModalFooter>
                </form>
              </Form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
