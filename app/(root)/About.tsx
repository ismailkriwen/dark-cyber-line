"use client";

import { Divider, Link } from "@nextui-org/react";
import { AlertCircle } from "lucide-react";

export const About = () => {
  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col gap-2 mt-10 h-full">
        <div className="text-3xl font-bold">About us</div>
        <div className="text-center">
          Hackers are individuals or groups of people who gain unauthorized
          access to computer systems, networks, or data with the intent to
          compromise security, steal information, or engage in malicious
          activities. There are various types of hackers, and their motivations
          and techniques can vary widely. Here's an overview of the different
          categories of hackers
        </div>
        <Divider className="my-2" />
        <div className="text-3xl font-bold">Who we are?</div>
        <div className="text-center">
          <span className="font-bold text-lg">Grey Hat Hackers</span>: Grey hat
          hackers fall somewhere between black hat and white hat hackers. They
          may discover and exploit vulnerabilities without authorization, but
          they usually do so with the intent of informing the system owner and
          helping them fix the issue. However, their actions can still be
          considered illegal.
        </div>
      </div>
      <Link
        href="#"
        underline="hover"
        className="fixed bottom-4 left-1/2 -translate-x-1/2"
      >
        Help
        <AlertCircle className="w-4 h-4 ml-2" />
      </Link>
    </>
  );
};
