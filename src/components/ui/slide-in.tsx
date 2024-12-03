"use client"

import { motion } from "framer-motion"

interface SlideInProps {
    children: React.ReactNode
    direction?: "left" | "right" | "up" | "down"
    delay?: number
    duration?: number
    className?: string
}

const directionVariants = {
    left: { x: -50 },
    right: { x: 50 },
    up: { y: -50 },
    down: { y: 50 },
}

export function SlideIn({
    children,
    direction = "left",
    delay = 0,
    duration = 0.5,
    className,
}: SlideInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, ...directionVariants[direction] }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
