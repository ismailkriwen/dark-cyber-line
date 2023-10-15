"use client";

import { Button } from "@nextui-org/react";
import { Home, LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const links = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
];

export const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="text-xl space-y-2 flex justify-between flex-col h-full py-4">
      <div>
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="text-white font-semibold flex gap-3 items-center hover:bg-white/10 transition rounded-md px-4 py-2"
          >
            <link.icon className="w-7 h-7" />
            {link.label}
          </Link>
        ))}
      </div>
      {session?.user && (
        <div className="w-full bg-gray-200/50 rounded-md px-4 py-2 flex items-center justify-between">
          <div className="font-semibold">{session?.user?.name}</div>
          <Button
            isIconOnly
            variant="ghost"
            radius="sm"
            onPress={() => {
              signOut({
                redirect: true,
                callbackUrl: "/sign-in",
              });
            }}
            className="text-white hover:text-black"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};
