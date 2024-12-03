"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChatMessage } from "@/components/chat/message"
import { ChatInput } from "@/components/chat/input"
import { useLanguage } from "@/providers/language-provider"
import { Loader2 } from "lucide-react"

interface Message {
    role: "assistant" | "user"
    content: string
}

export default function AssistantPage() {
    const { t } = useLanguage()
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: t("assistant.welcome"),
        },
    ])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSendMessage = async (message: string) => {
        setIsLoading(true)
        setError(null)
        // Add user message
        setMessages((prev) => [...prev, { role: "user", content: message }])

        try {
            // TODO: Implement AI response logic
            // Placeholder response
            await new Promise((resolve) => setTimeout(resolve, 1000))
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: t("assistant.placeholder"),
                },
            ])
        } catch (error) {
            console.error("Error getting AI response:", error)
            setError(t("assistant.error"))
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">{t("assistant.title")}</h1>
            <Card className="p-6">
                <div className="space-y-4 mb-6 max-h-[600px] overflow-y-auto">
                    {messages.map((message, index) => (
                        <ChatMessage key={index} {...message} />
                    ))}
                    {isLoading && (
                        <div className="flex items-center justify-center p-4">
                            <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
                        </div>
                    )}
                    {error && (
                        <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
                            {error}
                        </div>
                    )}
                </div>
                <ChatInput
                    onSendMessage={handleSendMessage}
                    disabled={isLoading}
                    placeholder={t("assistant.inputPlaceholder")}
                />
            </Card>
        </div>
    )
}
