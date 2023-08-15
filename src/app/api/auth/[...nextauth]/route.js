import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../../models/User";
import { SignInUser } from "@/Helpers/SignInUser";
import { connectDB, disconnectDB } from "@/utils/mongo";

export const authOptions = {
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        connectDB();
        try {
          const email = credentials.email;
          const password = credentials.password;
          const user = await User.findOne({ email });

          if (user) {
            if (!user.emailVerified) {
              throw new Error(
                "Your email has not been verified, please check your inbox for verification link."
              );
            } else {
              return SignInUser({ password, user }, disconnectDB);
            }
          } else {
            throw new Error("False credentials.");
          }
        } catch (err) {
          return NextResponse.json(
            { message: "Error, connection timed out." },
            {
              status: 500,
            }
          );
        }
      },
    }),
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_AUTH_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_AUTH_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_Google_AUTH_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_Google_AUTH_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_Facebook_AUTH_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_Facebook_AUTH_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),

    // ...add more providers here
  ],
  pages: {
    signIn: "/joinus",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
