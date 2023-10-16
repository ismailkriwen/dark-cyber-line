"use client";

import { Drama, Home, ShieldPlus } from "lucide-react";
import Link from "next/link";

const links = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Dark Web",
    href: "/darkweb",
    icon: Drama,
  },
  {
    label: "Cyber Security",
    href: "/cyber",
    icon: ShieldPlus,
  },
];

export const Sidebar = () => {
  return (
    <div className="text-xl flex justify-between flex-col h-full py-4">
      <div className="space-y-4">
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
    </div>
  );
};
