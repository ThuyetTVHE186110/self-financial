import { auth } from "@/auth"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    try {
        return await auth(request)
    } catch (error) {
        console.error("Auth GET Error:", error)
        return new NextResponse(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500 }
        )
    }
}

export async function POST(request: Request) {
    try {
        return await auth(request)
    } catch (error) {
        console.error("Auth POST Error:", error)
        return new NextResponse(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500 }
        )
    }
}
