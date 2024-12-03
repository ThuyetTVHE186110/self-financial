import type { Session, User } from "next-auth"
import type { JWT } from "next-auth/jwt"

declare module "next-auth" {
    interface User {
        id: string
        role: string
    }
}

interface AuthCallbacks {
    jwt: (params: { token: JWT; user?: User }) => Promise<JWT>
    session: (params: { session: Session; token: JWT }) => Promise<Session>
}

const callbacks: AuthCallbacks = {
    async jwt({ token, user }) {
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
}

export default {
    pages: {
        signIn: "/auth/signin",
    },
    session: {
        strategy: "jwt",
    },
    callbacks,
    providers: [], // Configure providers in auth.ts
}
