import { FadeIn } from "@/components/ui/fade-in"
import Image from "next/image"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex">
            {/* Left side - Auth Form */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <FadeIn>{children}</FadeIn>
                </div>
            </div>

            {/* Right side - Image and Info */}
            <div className="hidden lg:flex flex-1 relative bg-blue-600">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800">
                    <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="relative w-full h-full p-12 flex flex-col justify-between text-white">
                    <div>
                        <h2 className="text-3xl font-bold">
                            Master Your Financial Intelligence
                        </h2>
                        <p className="mt-4 text-lg text-blue-100">
                            Join thousands of others on their journey to
                            financial freedom with AI-powered guidance.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                <span className="text-2xl">🎯</span>
                            </div>
                            <div>
                                <h3 className="font-semibold">Smart Goals</h3>
                                <p className="text-blue-100">
                                    Set and track your financial goals with AI
                                    assistance
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                <span className="text-2xl">📚</span>
                            </div>
                            <div>
                                <h3 className="font-semibold">
                                    Personalized Learning
                                </h3>
                                <p className="text-blue-100">
                                    Learn at your own pace with customized
                                    content
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
