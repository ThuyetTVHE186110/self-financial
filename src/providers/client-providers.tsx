"use client"

import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "@/providers/theme-provider"
import { LanguageProvider } from "@/providers/language-provider"
import { ErrorBoundary } from "@/components/error-boundary"

export function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <ErrorBoundary>
            <SessionProvider>
                <ThemeProvider>
                    <LanguageProvider>{children}</LanguageProvider>
                </ThemeProvider>
            </SessionProvider>
        </ErrorBoundary>
    )
}
