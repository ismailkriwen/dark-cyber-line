"use server";

import prisma from "@/lib/prisma";
import { compare, hash } from "bcrypt";

export const createUser = async ({
  username: name,
  email,
  password: pass,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  const emailExists = await prisma.user.findUnique({ where: { email } });
  const nameExists = await prisma.user.findFirst({ where: { name } });
  if (emailExists) return { error: "Email already exists." };
  if (nameExists) return { error: "Username already exists." };
  const password = await hash(pass, 12);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  if (!user) return { error: "Something went wrong" };
  return user;
};

export const checkUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return { error: "User is not found" };
  const validPass = await compare(password, user.password!);
  if (!validPass) return { error: "Password is incorrect" };

  return true;
};

export const getUser = async (email: string) => {
  const data = await prisma.user.findUnique({
    where: { email },
    include: { posts: true },
  });

  return data;
};
