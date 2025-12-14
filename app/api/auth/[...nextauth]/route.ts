import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

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
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.email = profile.email;

          const email = profile.email as string;
          const name = profile.name as string | null;
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

      return token;
    },
  },
});

export { handler as GET, handler as POST };
