"use client";

import { NextUIProvider } from "@nextui-org/react";

export const NextUiProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider className="min-h-screen dark pb-10">
      {children}
    </NextUIProvider>
  );
};
