"use client"
import { useSession } from "next-auth/react" 
import { redirect } from "next/navigation"

export function checkSes() {
    const session = useSession();
    if (!session || session.status === "unauthenticated") redirect("login")
}

