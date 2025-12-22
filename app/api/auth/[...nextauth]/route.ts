import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import CredentialsProvider from "next-auth/providers/credentials";
dotenv.config();

export const model = mysql.createPool({
  host: "127.0.0.1",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

export const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "username", requiered: true },
        email: { label: "email", type: "email", requiered: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.username) return null;
      
        const email = credentials.email;
        const username = credentials.username;
      
        const res = await fetch("http://localhost:8089/api/regProfile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email }),
        });
      
        if (!res.ok) return null;
      
        const data = await res.json();
      
        if (!data.ok) return null;
      
        return {
          id: data.id,
          email: data.email,
          name: data.username ?? username,
        };
      }
    }),
  ],

  callbacks: {
    async jwt({ token, account, user, profile }) {
      if (account) {
        if (account.provider == "google" && profile) {
          token.email = profile.email;

          const email = profile?.email as string;
          const name = profile?.name as string | null;
          const picture = (profile as any).picture as string | null;
          const googleId = (profile as any).sub as string;

          const [rows] = await model.query(
            "SELECT * FROM profiles WHERE emails = ?",
            [email]
          );
          let userId;
          if ((rows as any[]).length > 0) {
            userId = (rows as any)[0].id;
            await model.query(
              "UPDATE profiles SET username = ?, path_to_pfp = ?, googleid = ? WHERE id = ?",
              [name, picture, googleId, userId]
            );
          } else {
            const [result] = await model.query(
              "INSERT INTO profiles (tag, profile_description, emails, username, path_to_pfp, googleid) VALUES (?, ?, ?, ?, ?, ?)",
              ["@morph", "text", email, name, picture, googleId]
            );
            userId = (result as any).insertId;
          }

          token.userId = userId;
        }
        if (account.provider == "credentials" && user) {
          token.userId = user.id;
          token.email = user.email;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = (token as any).userId;
        session.user.email = token.email as string | undefined;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
