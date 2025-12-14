"use client"
import { SessionProvider } from "next-auth/react"

export default function ProviderSes({children}: {children: any}) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>

    )
} 