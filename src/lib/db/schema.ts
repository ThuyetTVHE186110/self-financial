import { sql } from "@vercel/postgres"
import { z } from "zod"

export const UserSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    image: z.string().optional(),
    role: z.enum(["user", "admin"]).default("user"),
    createdAt: z.date(),
    updatedAt: z.date(),
})

export type DBUser = z.infer<typeof UserSchema>

export async function createTables() {
    try {
        await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

        await sql`
            CREATE TABLE IF NOT EXISTS users (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                image VARCHAR(255),
                role VARCHAR(50) DEFAULT 'user',
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        `

        console.log("Tables created successfully")
    } catch (error) {
        console.error("Error creating tables:", error)
        throw error
    }
}
