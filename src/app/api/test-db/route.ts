import { testConnection } from "@/lib/db/config"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const connected = await testConnection()
        return NextResponse.json({ connected })
    } catch (error) {
        return NextResponse.json(
            { error: "Database connection failed" },
            { status: 500 }
        )
    }
}
