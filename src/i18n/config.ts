export const defaultLocale = "en"
export const locales = ["en", "vi"] as const
export type ValidLocale = (typeof locales)[number]

export type Messages = typeof import("./messages/en").default
export type MessageKey = keyof Messages
