import type { AuthOptions, User } from 'next-auth'
import GoggleProvider from 'next-auth/providers/google'
import NextAuth from "next-auth"
// import Providers from "next-auth/providers"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
// import Credentials from 'next-auth/providers/credentials'
// import { users } from '@/data/users';


const prisma = new PrismaClient()


export const authConfig: AuthOptions = {
  providers: [
    GoggleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  pages: {
    signIn: '/SignIn'
  }
  // adapter: PrismaAdapter(prisma),
}
