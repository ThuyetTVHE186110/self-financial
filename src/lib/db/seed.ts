import { sql } from "@vercel/postgres"
import bcrypt from "bcrypt"

async function seedUsers() {
    try {
        const hashedPassword = await bcrypt.hash("password123", 10)

        await sql`
            INSERT INTO users (name, email, password, role)
            VALUES 
            ('Test User', 'test@example.com', ${hashedPassword}, 'user'),
            ('Admin User', 'admin@example.com', ${hashedPassword}, 'admin')
            ON CONFLICT (email) DO NOTHING;
        `

        console.log("Seed data inserted successfully")
    } catch (error) {
        console.error("Error seeding data:", error)
        throw error
    }
}

async function main() {
    try {
        await seedUsers()
        console.log("Database seeded successfully")
    } catch (error) {
        console.error("Error seeding database:", error)
        process.exit(1)
    }
}

main()
