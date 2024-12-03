import { Card } from "@/components/ui/card"
import { ProgressBar } from "@/components/ui/progress"

export function FinancialOverview() {
    return (
        <Card>
            <h3 className="text-xl font-semibold mb-4">Financial Overview</h3>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Assets
                        </p>
                        <p className="text-2xl font-bold">$25,000</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Liabilities
                        </p>
                        <p className="text-2xl font-bold">$10,000</p>
                    </div>
                </div>
                <div className="pt-4">
                    <h4 className="text-sm font-medium mb-2">
                        Monthly Cash Flow
                    </h4>
                    <ProgressBar value={75} />
                </div>
            </div>
        </Card>
    )
}
