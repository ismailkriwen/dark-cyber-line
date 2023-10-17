"use server";

import prisma from "@/lib/prisma";

export const getAll = async () => {
  const data = await prisma.channel.findMany();

  return data;
};

export const create = async ({
  name,
  admins = false,
}: {
  name: string;
  admins: boolean;
}) => {
  await prisma.channel.create({
    data: {
      name,
      admins,
    },
  });
};

/* export const deleteChannel = async ({name}: {name: string}) => {
    await prisma.channel.delete({
        where: {name}
    })
} */
