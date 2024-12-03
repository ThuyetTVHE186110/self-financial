interface ChatMessageProps {
    role: string
    content: string
}

export function ChatMessage({ role, content }: ChatMessageProps) {
    return (
        <div
            className={`p-4 rounded-lg ${
                role === "assistant"
                    ? "bg-gray-100 dark:bg-gray-700"
                    : "bg-blue-50 dark:bg-blue-900 ml-8"
            }`}
        >
            <p className="text-sm text-gray-900 dark:text-gray-100">
                {content}
            </p>
        </div>
    )
}
