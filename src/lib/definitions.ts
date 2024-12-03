export interface User {
    id: string
    name: string
    email: string
    password: string
    image?: string
    role: string
    createdAt: Date
    updatedAt: Date
}

declare module "next-auth" {
    interface Session {
        user: {
            id: string
            name: string
            email: string
            image?: string
            role: string
        }
    }

    interface JWT {
        id: string
        role: string
    }
}
