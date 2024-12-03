interface ProgressBarProps {
    value: number
    color?: string
}

export function ProgressBar({
    value,
    color = "bg-blue-600",
}: ProgressBarProps) {
    return (
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
                className={`h-full ${color} transition-all duration-300 ease-in-out`}
                style={{ width: `${value}%` }}
            />
        </div>
    )
}
