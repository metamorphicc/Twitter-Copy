"use server"
import { getServerSession } from "next-auth";
import { handler } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function checkSes() {
    const cookieStore = await cookies();
  const allCookies = cookieStore.getAll();
  
  console.log("ALL COOKIES:", allCookies.map(c => ({ 
    name: c.name, 
    value: c.value.substring(0, 20) + "..." 
  })));
  
  const session = await getServerSession(handler);
  console.log("SESSION:", session);
  
  if (!session) {
    redirect("/login");
  }
    

}