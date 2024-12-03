"use client"

import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { Globe } from "lucide-react"
import { useLanguage } from "@/providers/language-provider"
import { ValidLocale } from "@/i18n/config"

const languages: Record<ValidLocale, string> = {
    en: "English",
    vi: "Tiếng Việt",
}

interface MenuItemProps {
    active: boolean
}

export function LanguageSwitcher() {
    const { locale, setLocale, t } = useLanguage()

    return (
        <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <Globe className="w-5 h-5" />
                <span className="hidden md:inline">{languages[locale]}</span>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {Object.entries(languages).map(([code, name]) => (
                            <Menu.Item key={code}>
                                {({ active }: MenuItemProps) => (
                                    <button
                                        onClick={() =>
                                            setLocale(code as ValidLocale)
                                        }
                                        className={`${
                                            active
                                                ? "bg-gray-100 dark:bg-gray-700"
                                                : ""
                                        } ${
                                            locale === code
                                                ? "text-blue-600 dark:text-blue-400"
                                                : ""
                                        } group flex w-full items-center px-4 py-2 text-sm`}
                                    >
                                        {name}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
