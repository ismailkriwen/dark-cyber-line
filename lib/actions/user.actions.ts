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
};

export const getUser = async (email: string) => {
  const data = await prisma.user.findUnique({
    where: { email },
  });

  return data;
};

export const getProfile = async (name: string) => {
  const username = name.replace("-", " ");
  let data = null;
  const try1 = await prisma.user.findFirst({
    where: { name: username },
  });

  if (!try1) {
    const try2 = await prisma.user.findFirst({
      where: { name },
    });
    data = try2;
  }
  if (try1) data = try1;

  return data;
};
