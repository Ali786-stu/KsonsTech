"use client"

import React, { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface DirectionalHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
    fillColorClass?: string
}

export function DirectionalHoverButton({
    children,
    className,
    fillColorClass = "bg-[#1E40AD]",
    ...props
}: DirectionalHoverButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [hoverState, setHoverState] = useState<{ active: boolean; direction: string }>({
        active: false,
        direction: "bottom", // default fallback
    })

    // Magic math to get the closest edge to the mouse coordinates
    const getDirection = (ev: React.MouseEvent<HTMLButtonElement>, obj: HTMLElement) => {
        const { width: w, height: h, left, top } = obj.getBoundingClientRect()
        const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1)
        const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1)
        return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return
        const directionCode = getDirection(e, buttonRef.current)
        const dirString = ["top", "right", "bottom", "left"][directionCode]
        setHoverState({ active: true, direction: dirString })
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return
        const directionCode = getDirection(e, buttonRef.current)
        const dirString = ["top", "right", "bottom", "left"][directionCode]
        setHoverState({ active: false, direction: dirString })
    }

    // Determine the start and end positions based on direction
    const getVariants = () => {
        switch (hoverState.direction) {
            case "top":
                return { initial: { top: "-100%", left: "0%" }, animate: { top: "0%", left: "0%" } }
            case "right":
                return { initial: { top: "0%", left: "100%" }, animate: { top: "0%", left: "0%" } }
            case "bottom":
                return { initial: { top: "100%", left: "0%" }, animate: { top: "0%", left: "0%" } }
            case "left":
                return { initial: { top: "0%", left: "-100%" }, animate: { top: "0%", left: "0%" } }
            default:
                return { initial: { top: "100%", left: "0%" }, animate: { top: "0%", left: "0%" } }
        }
    }

    const variants = getVariants()

    return (
        <button
            ref={buttonRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative overflow-hidden transition-all duration-300 group shadow-md hover:shadow-xl",
                className
            )}
            {...props}
        >
            <AnimatePresence>
                {hoverState.active && (
                    <motion.div
                        initial={variants.initial}
                        animate={variants.animate}
                        exit={variants.initial}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} // Ultra smooth bezier curve
                        className={cn("absolute inset-0 z-0 w-full h-full", fillColorClass)}
                    />
                )}
            </AnimatePresence>
            <span className="relative z-10 flex items-center justify-center w-full h-full group-hover:text-white transition-colors duration-300">
                {children}
            </span>
        </button>
    )
}
