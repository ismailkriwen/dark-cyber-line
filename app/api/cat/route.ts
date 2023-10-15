import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async () => {
  await prisma.category.create({
    data: {
      name: "Category 2",
      description: "Category Description",
    },
  });

  return NextResponse.json({});
};
