"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/providers/language-provider"

interface Step {
    title: string
    description: string
}

interface Testimonial {
    quote: string
    author: string
    role: string
}

export default function Home() {
    const { t } = useLanguage()

    const features = [
        {
            icon: "📚",
            title: t("home.features.financialEducation.title"),
            description: t("home.features.financialEducation.description"),
        },
        {
            icon: "🤖",
            title: t("home.features.aiAssistant.title"),
            description: t("home.features.aiAssistant.description"),
        },
        {
            icon: "📊",
            title: t("home.features.assetManagement.title"),
            description: t("home.features.assetManagement.description"),
        },
        {
            icon: "🎯",
            title: t("home.features.goalSetting.title"),
            description: t("home.features.goalSetting.description"),
        },
    ]

    const testimonials: Testimonial[] = [
        {
            quote: t("home.testimonials.stories.0.quote"),
            author: t("home.testimonials.stories.0.author"),
            role: t("home.testimonials.stories.0.role"),
        },
        {
            quote: t("home.testimonials.stories.1.quote"),
            author: t("home.testimonials.stories.1.author"),
            role: t("home.testimonials.stories.1.role"),
        },
    ]

    // Get steps with proper typing
    const steps = t<Step[]>("home.howItWorks.steps", { returnObjects: true })

    return (
        <main className="flex flex-col min-h-screen pt-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                            {t("home.hero.title")}
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
                            {t("home.hero.subtitle")}
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link
                                href="/auth/signup"
                                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
                            >
                                {t("home.hero.startTrial")}
                            </Link>
                            <Link
                                href="/dashboard/demo"
                                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition transform hover:scale-105"
                            >
                                {t("home.hero.viewDemo")}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        {t("home.features.title")}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature) => (
                            <Card
                                key={feature.title}
                                className="transform hover:scale-105 transition"
                            >
                                <div className="text-4xl mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="bg-gray-50 dark:bg-gray-800 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        {t("home.howItWorks.title")}
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-8">
                            {Array.isArray(steps) &&
                                steps.map((step, index) => (
                                    <Step
                                        key={index}
                                        number={index + 1}
                                        title={step.title}
                                        description={step.description}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        {t("home.testimonials.title")}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {testimonials.map((testimonial) => (
                            <Card
                                key={testimonial.author}
                                className="text-center"
                            >
                                <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
                                    "{testimonial.quote}"
                                </p>
                                <p className="font-semibold">
                                    {testimonial.author}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {testimonial.role}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        {t("home.cta.title")}
                    </h2>
                    <p className="text-xl mb-8">{t("home.cta.subtitle")}</p>
                    <Link
                        href="/auth/signup"
                        className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition transform hover:scale-105"
                    >
                        {t("home.cta.button")}
                    </Link>
                </div>
            </section>
        </main>
    )
}

function Step({
    number,
    title,
    description,
}: {
    number: number
    title: string
    description: string
}) {
    return (
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                {number}
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                    {description}
                </p>
            </div>
        </div>
    )
}
