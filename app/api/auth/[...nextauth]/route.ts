import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

require("dotenv").config()

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!
    })
  ]
});

export { handler as GET, handler as POST };
