import Link from "next/link"
import { Card } from "@/components/ui/card"

const actions = [
    {
        label: "Ask AI Assistant",
        href: "/dashboard/assistant",
        description: "Get personalized financial advice",
    },
    {
        label: "Set New Goal",
        href: "/dashboard/goals/new",
        description: "Create a new financial goal",
    },
    {
        label: "Continue Learning",
        href: "/dashboard/learning",
        description: "Resume your financial education",
    },
]

export function QuickActions() {
    return (
        <Card>
            <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
                {actions.map((action) => (
                    <Link
                        key={action.href}
                        href={action.href}
                        className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition group"
                    >
                        <div className="font-medium group-hover:text-blue-600">
                            {action.label}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {action.description}
                        </p>
                    </Link>
                ))}
            </div>
        </Card>
    )
}
