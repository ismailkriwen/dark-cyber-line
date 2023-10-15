"use client";

import { MiniProfile } from "@/components/mini-profile";
import { getAllByCat } from "@/lib/actions/post.action";
import { format_date } from "@/lib/utils";
import { Button, Divider, Pagination, useDisclosure } from "@nextui-org/react";
import { ChevronLeft, ChevronRight, Reply } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { NewModal } from "./modals/new";
import { Session } from "next-auth";
import { Post, User } from "@prisma/client";

const POSTS_PER_PAGE = 10;

type TPost = {
  user: User;
} & Post;

export const CategoryPosts = ({
  session,
  name,
  searchParams,
}: {
  session: Session | null;
  name: string;
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const router = useRouter();
  const [switchingPages, setSwitchingPages] = useState(false);
  const page = Number(searchParams.page);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => await getAllByCat(name),
  });

  const { mutate } = useMutation({
    mutationFn: async () => await getAllByCat(name),
  });

  const pages = Math.ceil((data?.length || 0) / POSTS_PER_PAGE);

  const items = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;

    return data?.slice(start, end);
  }, [page, data]);

  return (
    <>
      <div className="my-4">
        <div className="dark:bg-neutral-900 flex items-center justify-between px-8 py-2 mt-2">
          <div>{name}</div>
          <Button
            startContent={<Reply className="w-4 h-4" />}
            variant="ghost"
            size="sm"
            onPress={onOpen}
          >
            Reply
          </Button>
        </div>
        {/* @ts-ignore */}
        {items?.length > 0 && (
          <div className="dark:bg-neutral-900 flex items-center gap-2 px-8 py-2 mt-2">
            <Button
              isDisabled={Number(searchParams.page) === 1 || switchingPages}
              isIconOnly
              size="sm"
              radius="sm"
              variant="ghost"
              onClick={() => {
                if (Number(searchParams.page) === 1) return;
                setSwitchingPages(true);
                router.push(`?page=${Number(searchParams.page) - 1}`);
                setSwitchingPages(false);
              }}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {!isLoading && (
              <Pagination
                radius="full"
                size="sm"
                isCompact
                showShadow
                isDisabled={switchingPages}
                initialPage={Number(searchParams.page)}
                page={Number(searchParams.page)}
                total={pages}
                onChange={(e) => {
                  setSwitchingPages(true);
                  router.push(`?page=${e}`);
                  setSwitchingPages(false);
                }}
              />
            )}
            <Button
              isDisabled={Number(searchParams.page) === pages || switchingPages}
              isIconOnly
              size="sm"
              radius="sm"
              variant="ghost"
              onClick={() => {
                if (Number(searchParams.page) === pages || switchingPages)
                  return;
                setSwitchingPages(true);
                router.push(`?page=${Number(searchParams.page) + 1}`);
                setSwitchingPages(false);
              }}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
      <div className="z-0 overflow-y-auto">
        {/* @ts-ignore */}
        {items?.length > 0 ? (
          items?.map((post: TPost, index: number) => (
            <div className={`flex items-strech gap-2 mt-2`} key={post.id}>
              {index % 2 === 0 && <MiniProfile email={post.user.email!} />}
              <div
                className="dark:bg-neutral-950 px-6 py-2 w-full flex flex-col"
                key={post.id}
              >
                <div className="px-6 py-2 flex items-center justify-between text-small">
                  <div className={`md:hidden`}>{post.user.name}</div>
                  <div className="italic max-md:hidden">{`${
                    format_date(post?.createdAt!).date
                  } at ${format_date(post?.createdAt!).time}`}</div>
                  <div></div>
                </div>
                <Divider />
                <div className="py-2 px-6">
                  <pre className="break-words pt-2">{post.content}</pre>
                </div>
              </div>
              {index % 2 !== 0 && <MiniProfile email={post.user.email!} />}
            </div>
          ))
        ) : (
          <div className="dark:bg-neutral-950 px-6 py-4 w-full text-center">
            No posts found.
          </div>
        )}
      </div>
      <NewModal
        session={session}
        name={name}
        mutate={mutate}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </>
  );
};
