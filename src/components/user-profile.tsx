"use client"

import { useSession } from "next-auth/react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"

export function UserProfile() {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return (
            <div className="flex justify-center">
                <Spinner />
            </div>
        )
    }

    if (!session?.user) return null

    return (
        <Card className="p-6">
            <div className="flex items-center space-x-4">
                {session.user.image && (
                    <Image
                        src={session.user.image}
                        alt={session.user.name ?? "User"}
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                )}
                <div>
                    <h2 className="text-xl font-semibold">
                        {session.user.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        {session.user.email}
                    </p>
                </div>
            </div>
        </Card>
    )
}
