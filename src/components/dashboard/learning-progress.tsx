import { Card } from "@/components/ui/card"
import { ProgressBar } from "@/components/ui/progress"

const learningModules = [
    { name: "Financial Basics", progress: 75 },
    { name: "Investment Fundamentals", progress: 40 },
    { name: "Real Estate", progress: 20 },
]

export function LearningProgress() {
    return (
        <Card>
            <h3 className="text-xl font-semibold mb-4">Learning Progress</h3>
            <div className="space-y-4">
                {learningModules.map((module) => (
                    <div key={module.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>{module.name}</span>
                            <span>{module.progress}%</span>
                        </div>
                        <ProgressBar
                            value={module.progress}
                            color="bg-green-500"
                        />
                    </div>
                ))}
            </div>
        </Card>
    )
}
