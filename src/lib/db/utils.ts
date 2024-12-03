import { sql } from "@vercel/postgres"
import { DBUser, UserSchema } from "./schema"

export async function getUserByEmail(email: string): Promise<DBUser | null> {
    try {
        const result = await sql<DBUser>`
            SELECT * FROM users WHERE email = ${email}
        `
        const user = result.rows[0]
        return user ? UserSchema.parse(user) : null
    } catch (error) {
        console.error("Error fetching user:", error)
        return null
    }
}

export async function createUser({
    name,
    email,
    password,
    role = "user",
}: {
    name: string
    email: string
    password: string
    role?: string
}) {
    try {
        const result = await sql`
            INSERT INTO users (name, email, password, role)
            VALUES (${name}, ${email}, ${password}, ${role})
            RETURNING *
        `
        return UserSchema.parse(result.rows[0])
    } catch (error) {
        console.error("Error creating user:", error)
        throw error
    }
}
