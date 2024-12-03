declare namespace NodeJS {
    interface ProcessEnv {
        AUTH_SECRET: string
        NEXTAUTH_URL: string
        GITHUB_ID: string
        GITHUB_SECRET: string
        GOOGLE_ID: string
        GOOGLE_SECRET: string
        DATABASE_URL?: string
    }
}
