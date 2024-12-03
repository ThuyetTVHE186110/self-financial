import { FinancialOverview } from "@/components/dashboard/financial-overview"
import { LearningProgress } from "@/components/dashboard/learning-progress"
import { QuickActions } from "@/components/dashboard/quick-actions"

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FinancialOverview />
                <LearningProgress />
                <QuickActions />
            </div>
        </div>
    )
}
