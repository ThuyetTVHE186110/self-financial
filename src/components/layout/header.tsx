"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { useLanguage } from "@/providers/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
    const { t } = useLanguage()
    const { data: session } = useSession()

    return (
        <header className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-2xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {t("common.appName")}
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/dashboard"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {t("nav.dashboard")}
                        </Link>
                        <Link
                            href="/dashboard/assistant"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {t("nav.assistant")}
                        </Link>
                        <Link
                            href="/dashboard/learning"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {t("nav.learning")}
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <LanguageSwitcher />
                        <ThemeSwitcher />
                        {session ? (
                            <div className="flex items-center gap-2">
                                {session.user?.image && (
                                    <Image
                                        src={session.user.image}
                                        alt={session.user.name ?? "User"}
                                        width={32}
                                        height={32}
                                        className="rounded-full"
                                    />
                                )}
                                <Button
                                    variant="ghost"
                                    onClick={() => signOut()}
                                >
                                    {t("auth.signOut")}
                                </Button>
                            </div>
                        ) : (
                            <Link
                                href="/auth/signin"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                {t("auth.signIn")}
                            </Link>
                        )}
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    )
}
