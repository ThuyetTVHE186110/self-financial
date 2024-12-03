"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/providers/language-provider"

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useLanguage()

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <Menu className="w-6 h-6" />
                )}
            </button>

            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <nav className="container mx-auto px-4 py-4">
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="/dashboard"
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                onClick={() => setIsOpen(false)}
                            >
                                {t("nav.dashboard")}
                            </Link>
                            <Link
                                href="/dashboard/assistant"
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                onClick={() => setIsOpen(false)}
                            >
                                {t("nav.assistant")}
                            </Link>
                            <Link
                                href="/dashboard/learning"
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                onClick={() => setIsOpen(false)}
                            >
                                {t("nav.learning")}
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    )
}
