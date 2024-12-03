"use client"

import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/providers/theme-provider"
import { useLanguage } from "@/providers/language-provider"

export function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme()
    const { t } = useLanguage()

    return (
        <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label={t(
                theme === "dark" ? "common.lightMode" : "common.darkMode"
            )}
        >
            {theme === "dark" ? (
                <Sun className="w-5 h-5" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
            <span className="sr-only">
                {t(theme === "dark" ? "common.lightMode" : "common.darkMode")}
            </span>
        </button>
    )
}
