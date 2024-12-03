import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ClientProviders } from "@/providers/client-providers"
import { ClientLayout } from "@/components/layout/client-layout"

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
})

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
})

export const metadata: Metadata = {
    title: "Financial Intelligence Assistant",
    description:
        "AI-powered financial education and wealth building assistant based on Rich Dad Poor Dad principles",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900`}
            >
                <ClientProviders>
                    <ClientLayout>{children}</ClientLayout>
                </ClientProviders>
            </body>
        </html>
    )
}
