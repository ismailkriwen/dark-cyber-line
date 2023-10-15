"use client";

import { Sidebar } from "@/components/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, Button, Input } from "@nextui-org/react";
import { Menu, Search } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="shadow-md bg-slate-700/50 text-white">
      <div className="flex container items-center justify-between py-4">
        <Sheet>
          <SheetTrigger>
            <Menu className="h-8 w-8 cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="left" className="w-72 bg-slate-700/80">
            <Sidebar />
          </SheetContent>
        </Sheet>
        <div>
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
        </div>
        <div>
          {session?.user ? (
            <Avatar src={session?.user?.image!} />
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
