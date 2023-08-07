import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_AUTH_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_AUTH_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_Google_AUTH_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_Google_AUTH_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_Facebook_AUTH_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_Facebook_AUTH_SECRET,
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
