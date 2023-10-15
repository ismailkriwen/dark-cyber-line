import prisma from "@/lib/prisma";
import { Role } from "@prisma/client";
import { compare } from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { getServerSession, type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: { email: { type: "email" }, password: { type: "password" } },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });
        if (!user) return null;

        if (!user.password) return null;
        const validPassword = await compare(
          credentials?.password,
          user.password
        );

        if (!validPassword) return null;

        return { ...user };
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (!token.email) return session;
      const user = await prisma.user.findUnique({
        where: { email: token.email },
        select: { email: true, image: true, name: true, role: true },
      });
      session.user.email = user?.email;
      session.user.image = user?.image;
      session.user.name = user?.name;
      session.user.role = user?.role as Role;

      return session;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          ...token,
          user: { ...user },
        };
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export const getAuthSession = async () => await getServerSession(authOptions);
export { handler as GET, handler as POST };
