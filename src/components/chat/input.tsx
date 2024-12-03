"use client"

import { useState } from "react"
import { useLanguage } from "@/providers/language-provider"

interface ChatInputProps {
    onSendMessage: (message: string) => void
    disabled?: boolean
    placeholder?: string
}

export function ChatInput({
    onSendMessage,
    disabled = false,
    placeholder,
}: ChatInputProps) {
    const { t } = useLanguage()
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (message.trim() && !disabled) {
            onSendMessage(message)
            setMessage("")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={placeholder || t("assistant.inputPlaceholder")}
                className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 p-2 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={disabled}
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={disabled || !message.trim()}
            >
                {disabled ? t("assistant.sending") : "Send"}
            </button>
        </form>
    )
}
