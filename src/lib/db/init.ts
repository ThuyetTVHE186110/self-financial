import { createUsersTable } from "./schema"

async function init() {
    try {
        await createUsersTable()
        console.log("Database initialized successfully")
    } catch (error) {
        console.error("Failed to initialize database:", error)
        process.exit(1)
    }
}

init()
