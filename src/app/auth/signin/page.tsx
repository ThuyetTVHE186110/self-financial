"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/providers/language-provider"
import { Card } from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"
import { signIn } from "next-auth/react"
import { Github, Mail } from "lucide-react"

export default function SignInPage() {
    const { t } = useLanguage()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            const formData = new FormData(e.currentTarget)
            const response = await signIn("credentials", {
                email: formData.get("email"),
                password: formData.get("password"),
                redirect: false,
            })

            if (response?.error) {
                setError(t("auth.errors.signIn"))
            }
        } catch (err) {
            setError(t("auth.errors.signIn"))
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card className="p-8">
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold mb-2">{t("auth.signIn")}</h1>
                <p className="text-gray-600 dark:text-gray-300">
                    {t("auth.signInDescription")}
                </p>
            </div>

            <div className="space-y-4">
                <button
                    onClick={() =>
                        signIn("google", { callbackUrl: "/dashboard" })
                    }
                    className="w-full flex items-center justify-center gap-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                    <img src="/google.svg" alt="Google" className="w-5 h-5" />
                    Continue with Google
                </button>

                <button
                    onClick={() =>
                        signIn("github", { callbackUrl: "/dashboard" })
                    }
                    className="w-full flex items-center justify-center gap-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                    <Github className="w-5 h-5" />
                    Continue with GitHub
                </button>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white dark:bg-gray-900 text-gray-500">
                            Or continue with
                        </span>
                    </div>
                </div>

                {error && (
                    <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
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
                            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <Link
                            href="/auth/forgot-password"
                            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            {t("auth.forgotPassword")}
                        </Link>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <Spinner size="sm" className="mx-auto" />
                        ) : (
                            t("auth.signIn")
                        )}
                    </button>

                    <p className="text-center text-sm">
                        {t("auth.noAccount")}{" "}
                        <Link
                            href="/auth/signup"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            {t("auth.signUp")}
                        </Link>
                    </p>
                </form>
            </div>
        </Card>
    )
}
