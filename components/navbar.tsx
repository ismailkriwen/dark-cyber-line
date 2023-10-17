"use client";

import { Sidebar } from "@/components/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { LogOut, Menu } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="shadow-md bg-slate-700/50 text-white sticky inset-x-0 top-0">
      <div className="flex container items-center justify-between py-4">
        <Sheet>
          <SheetTrigger>
            <Menu className="h-8 w-8 cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="left" className="w-72 bg-slate-700/80">
            <Sidebar session={session} />
          </SheetContent>
        </Sheet>
        {/* <div>
          <Input
            placeholder="Search.."
            variant="underlined"
            isClearable
            classNames={{
              input: "!bg-transparent",
              innerWrapper: "!bg-transparent",
            }}
            radius="sm"
            startContent={<Search className="w-4 h-4" />}
          />
        </div> */}
        <div>
          {session?.user ? (
            <Dropdown placement="bottom-end" radius="sm">
              <DropdownTrigger className="cursor-pointer">
                <Avatar src={session?.user?.image!} showFallback />
              </DropdownTrigger>
              <DropdownMenu className="text-black" aria-label="user">
                <DropdownItem
                  onClick={() =>
                    router.push(
                      `/profile/${session?.user?.name?.replace(" ", "-")}`
                    )
                  }
                  textValue="username"
                >
                  {session?.user?.name}
                </DropdownItem>
                <DropdownItem showDivider textValue="rank">
                  Rank: {session?.user?.role}
                </DropdownItem>
                <DropdownItem
                  startContent={<LogOut className="w-4 h-4" />}
                  onClick={() => signOut({ redirect: false, callbackUrl: "/" })}
                >
                  Sign out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Link href="/sign-in">
              <Button radius="sm" variant="ghost" color="primary">
                Sign in
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
