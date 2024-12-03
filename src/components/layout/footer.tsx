"use client"

import Link from "next/link"
import { useLanguage } from "@/providers/language-provider"

export function Footer() {
    const { t } = useLanguage()

    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            {t("common.appName")}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {t("footer.description")}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold mb-4 uppercase">
                            {t("footer.features")}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/features/education"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    {t(
                                        "home.features.financialEducation.title"
                                    )}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/features/assistant"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    {t("home.features.aiAssistant.title")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold mb-4 uppercase">
                            {t("footer.resources")}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    {t("footer.blog")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/support"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    {t("footer.support")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold mb-4 uppercase">
                            {t("footer.legal")}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    {t("footer.privacy")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    {t("footer.terms")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-center text-gray-600 dark:text-gray-300">
                        © {new Date().getFullYear()} {t("common.appName")}.{" "}
                        {t("footer.rights")}
                    </p>
                </div>
            </div>
        </footer>
    )
}
