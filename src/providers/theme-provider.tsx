"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        try {
            const savedTheme = localStorage.getItem("theme")
            if (
                savedTheme &&
                (savedTheme === "dark" || savedTheme === "light")
            ) {
                setTheme(savedTheme)
                document.documentElement.classList.toggle(
                    "dark",
                    savedTheme === "dark"
                )
            } else if (
                window.matchMedia("(prefers-color-scheme: dark)").matches
            ) {
                setTheme("dark")
                document.documentElement.classList.add("dark")
            }
        } catch (error) {
            console.warn("Failed to read theme preference:", error)
        }
    }, [])

    const toggleTheme = () => {
        try {
            const newTheme = theme === "light" ? "dark" : "light"
            setTheme(newTheme)
            localStorage.setItem("theme", newTheme)
            document.documentElement.classList.toggle("dark")
        } catch (error) {
            console.warn("Failed to save theme preference:", error)
        }
    }

    // Prevent hydration mismatch
    if (!mounted) {
        return null
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}
