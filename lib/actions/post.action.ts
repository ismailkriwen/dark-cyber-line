"use server";

import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export const getAllByCat = async (name: string) => {
  const data = await prisma.post.findMany({
    where: { category: { name } },
    include: { user: true },
  });
  return data;
};

export const createPost = async ({
  name,
  content,
  email,
}: {
  name: string;
  content: string;
  email: string;
}) => {
  const session = await getAuthSession();
  if (!session?.user) return false;

  const data = await prisma.category.update({
    where: { name },
    data: {
      posts: {
        create: {
          content,
          user: { connect: { email } },
        },
      },
    },
  });

  return data;
};
