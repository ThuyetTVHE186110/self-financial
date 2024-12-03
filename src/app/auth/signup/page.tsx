"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/providers/language-provider"
import { Card } from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"

export default function SignUpPage() {
    const { t } = useLanguage()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            // TODO: Implement sign up logic
            await new Promise((resolve) => setTimeout(resolve, 1000))
        } catch (err) {
            setError(t("auth.errors.signUp"))
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card className="p-8">
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold mb-2">{t("auth.signUp")}</h1>
                <p className="text-gray-600 dark:text-gray-300">
                    {t("auth.signUpDescription")}
                </p>
            </div>

            {error && (
                <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                    >
                        {t("auth.name")}
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                    >
                        {t("auth.email")}
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium mb-1"
                    >
                        {t("auth.password")}
                    </label>
                    <input
                        type="password"
                        id="password"
                        required
                        minLength={8}
                        className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="text-sm text-gray-600 dark:text-gray-300">
                    <p className="mb-2">{t("auth.passwordRequirements")}</p>
                    <p>{t("auth.termsAgree")}</p>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <Spinner size="sm" className="mx-auto" />
                    ) : (
                        t("auth.signUp")
                    )}
                </button>

                <p className="text-center text-sm">
                    {t("auth.hasAccount")}{" "}
                    <Link
                        href="/auth/signin"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        {t("auth.signIn")}
                    </Link>
                </p>
            </form>
        </Card>
    )
}
