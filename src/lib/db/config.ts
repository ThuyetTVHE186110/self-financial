import { sql } from "@vercel/postgres"

export async function query(strings: TemplateStringsArray, ...values: any[]) {
    try {
        const result = await sql(strings, ...values)
        return result
    } catch (error) {
        console.error("Database query error:", error)
        throw error
    }
}

export async function testConnection() {
    try {
        const result = await sql`SELECT NOW();`
        console.log("Database connected:", result.rows[0].now)
        return true
    } catch (error) {
        console.error("Database connection error:", error)
        return false
    }
}
