"use server";

import prisma from "@/lib/prisma";

export const getAll = async () => {
  const data = await prisma.category.findMany({ include: { posts: true } });
  return data;
};
