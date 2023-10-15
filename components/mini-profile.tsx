import { textColors } from "@/constants";
import { getUser } from "@/lib/actions/user.actions";
import { Avatar, Link, Spinner, cn } from "@nextui-org/react";
import { Post, User } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";

type TUser = {
  posts: Post[];
} & User;

export const MiniProfile = ({ email }: { email: string }) => {
  const [user, setUser] = useState<TUser>();
  const [loading, setLoading] = useState(false);
  const fetcher = useCallback(
    async (email: string) => {
      try {
        setLoading(true);
        const res = await getUser(email);
        res && setUser(res as TUser);
      } catch (err) {
        return false;
      } finally {
        setLoading(false);
      }
    },
    [email]
  );

  useEffect(() => {
    fetcher(email);
  }, [fetcher, email]);

  return (
    <>
      {loading ? (
        <>
          <div className="max-md:hidden flex items-center justify-center px-4 py-2 min-w-[200px] dark:bg-neutral-950">
            <Spinner color="default" />
          </div>
        </>
      ) : (
        <div className="max-md:hidden text-center flex items-center justify-between gap-2 flex-col px-4 py-2 min-w-[200px] dark:bg-neutral-950">
          {/* @ts-ignore */}
          <div className={cn(textColors[user?.role])}>
            <Link href={`/profile/${user?.name?.replace(" ", "-")}`}>
              {user?.name}
            </Link>
            <div className="text-small text-default-400">{user?.role}</div>
          </div>
          <Avatar
            src={user?.image!}
            showFallback
            className="w-20 h-20 text-large my-2 dark"
          />
          <div className="flex flex-col">
            <div>Posts: {user?.posts?.length}</div>
          </div>
        </div>
      )}
    </>
  );
};
