import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { z } from "zod"
import bcrypt from "bcrypt"
import { sql } from "@vercel/postgres"
import type { User } from "@/lib/definitions"
import type { AuthOptions, SessionStrategy } from "next-auth"
import { DBUser, UserSchema } from "@/lib/db/schema"

if (!process.env.AUTH_SECRET) {
    throw new Error("AUTH_SECRET must be set")
}

if (!process.env.NEXTAUTH_URL) {
    throw new Error("NEXTAUTH_URL must be set")
}

async function getUser(email: string): Promise<DBUser | null> {
    try {
        const result = await sql<DBUser>`
            SELECT * FROM users WHERE email = ${email}
        `
        const user = result.rows[0]
        return user ? UserSchema.parse(user) : null
    } catch (error) {
        console.error("Failed to fetch user:", error)
        return null
    }
}

const providers = [
    GithubProvider({
        clientId: process.env.GITHUB_ID ?? "",
        clientSecret: process.env.GITHUB_SECRET ?? "",
        async profile(profile) {
            return {
                id: profile.id.toString(),
                name: profile.name || profile.login,
                email: profile.email,
                image: profile.avatar_url,
                role: "user",
            }
        },
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_ID ?? "",
        clientSecret: process.env.GOOGLE_SECRET ?? "",
        async profile(profile) {
            return {
                id: profile.sub,
                name: profile.name,
                email: profile.email,
                image: profile.picture,
                role: "user",
            }
        },
    }),
    CredentialsProvider({
        credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
            try {
                if (!credentials?.email || !credentials?.password) return null

                const parsedCredentials = z
                    .object({
                        email: z.string().email(),
                        password: z.string().min(6),
                    })
                    .safeParse(credentials)

                if (!parsedCredentials.success) return null

                const { email, password } = parsedCredentials.data
                const user = await getUser(email)
                if (!user) return null

                const passwordsMatch = await bcrypt.compare(
                    password,
                    user.password
                )

                if (passwordsMatch) return user
                return null
            } catch (error) {
                console.error("Auth error:", error)
                return null
            }
        },
    }),
]

const authOptions: AuthOptions = {
    providers,
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
        error: "/auth/error",
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                token.id = user.id
                token.role = user.role
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string
                session.user.role = token.role as string
            }
            return session
        },
    },
    session: {
        strategy: "jwt" as SessionStrategy,
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
    },
    secret: process.env.AUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
}

export const { auth, signIn, signOut } = NextAuth(authOptions)
