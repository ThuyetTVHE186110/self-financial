"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { ValidLocale, defaultLocale, locales } from "@/i18n/config"
import type { Messages } from "@/i18n/config"
import enMessages from "@/i18n/messages/en"

interface LanguageContextType {
    locale: ValidLocale
    setLocale: (locale: ValidLocale) => void
    t: <T = string>(key: string, options?: { returnObjects?: boolean }) => T
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState<ValidLocale>(defaultLocale)
    const [messages, setMessages] = useState<Messages>(enMessages)

    useEffect(() => {
        try {
            const savedLocale = localStorage.getItem("locale")
            if (savedLocale && locales.includes(savedLocale as ValidLocale)) {
                setLocale(savedLocale as ValidLocale)
            }
        } catch (error) {
            console.warn("Failed to read locale from localStorage:", error)
        }
    }, [])

    useEffect(() => {
        const loadMessages = async () => {
            try {
                if (locale === "en") {
                    setMessages(enMessages)
                    return
                }

                const newMessages = await import(
                    `@/i18n/messages/${locale}`
                ).then((module) => module.default)
                setMessages(newMessages)

                try {
                    localStorage.setItem("locale", locale)
                } catch (error) {
                    console.warn("Failed to save locale preference:", error)
                }
            } catch (error) {
                console.error(
                    `Failed to load messages for locale ${locale}:`,
                    error
                )
                setMessages(enMessages)
            }
        }
        loadMessages()
    }, [locale])

    const t = <T = string,>(
        key: string,
        options?: { returnObjects?: boolean }
    ): T => {
        try {
            const value = key.split(".").reduce((obj, k) => {
                if (typeof obj === "object" && obj !== null) {
                    return obj[k as keyof typeof obj]
                }
                return key
            }, messages as any)

            if (options?.returnObjects) {
                return value as T
            }

            return (value || key) as T
        } catch (error) {
            console.warn(`Translation key not found: ${key}`)
            return key as T
        }
    }

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
