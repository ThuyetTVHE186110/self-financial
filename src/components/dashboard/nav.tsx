"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
    { label: "Overview", href: "/dashboard" },
    { label: "AI Assistant", href: "/dashboard/assistant" },
    { label: "Learning Path", href: "/dashboard/learning" },
    { label: "Financial Goals", href: "/dashboard/goals" },
]

export function DashboardNav() {
    const pathname = usePathname()

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/dashboard" className="font-bold text-xl">
                            Financial IQ
                        </Link>
                        <div className="hidden md:block ml-10">
                            <div className="flex items-center space-x-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`px-3 py-2 rounded-md text-sm font-medium ${
                                            pathname === item.href
                                                ? "bg-blue-600 text-white"
                                                : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
