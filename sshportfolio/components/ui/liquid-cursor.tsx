"use client"

import React, { useEffect, useRef } from "react"

interface Ripple {
    x: number
    y: number
    radius: number
    alpha: number
    color: string
}

export const LiquidCursor: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    // Store ripples
    const ripplesRef = useRef<Ripple[]>([])

    // Track last mouse position to spawn ripples based on distance
    const lastMousePos = useRef<{ x: number, y: number } | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener("resize", resizeCanvas)
        resizeCanvas()

        // Add new ripple
        const createRipple = (x: number, y: number) => {
            // Blue, water-like colors mixed with the #1E40AD theme
            const colors = [
                "rgba(30, 64, 173, ",    // #1E40AD theme
                "rgba(59, 130, 246, ",    // blue-500
                "rgba(147, 197, 253, "    // blue-300 (light shimmer)
            ]
            const color = colors[Math.floor(Math.random() * colors.length)]

            ripplesRef.current.push({
                x,
                y,
                radius: Math.random() * 5 + 5, // Initial small size
                alpha: 0.6, // Initial opacity
                color
            })
        }

        const handleMouseMove = (e: MouseEvent) => {
            const currentPos = { x: e.clientX, y: e.clientY }

            // If no last pos, just create one
            if (!lastMousePos.current) {
                createRipple(currentPos.x, currentPos.y)
                lastMousePos.current = currentPos
                return
            }

            // Calculate distance from last drop to avoid spawning too many drops
            const dx = currentPos.x - lastMousePos.current.x
            const dy = currentPos.y - lastMousePos.current.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            // Drop a ripple every ~15 pixels of movement
            if (distance > 15) {
                createRipple(currentPos.x, currentPos.y)
                lastMousePos.current = currentPos
            }
        }

        window.addEventListener("mousemove", handleMouseMove)

        // Animation Loop
        const render = () => {
            // Clear canvas with slight transparency for a trailing effect (optional, here we clear fully)
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const ripples = ripplesRef.current

            for (let i = 0; i < ripples.length; i++) {
                const p = ripples[i]

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false)

                // Liquid/water styling: Stroke spreading outwards
                ctx.strokeStyle = `${p.color}${p.alpha})`
                ctx.lineWidth = 1.5 + (p.alpha * 2)
                ctx.stroke()

                // Fill for internal depth
                ctx.fillStyle = `${p.color}${p.alpha * 0.2})`
                ctx.fill()

                // Update properties (Expand like water ripples)
                p.radius += 1.2   // Speed of expansion
                p.alpha -= 0.015  // Fade out speed
            }

            // Remove dead ripples
            ripplesRef.current = ripples.filter((p) => p.alpha > 0)

            animationFrameId = requestAnimationFrame(render)
        }

        render()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
            window.removeEventListener("mousemove", handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[100]"
            style={{
                mixBlendMode: "screen", // Makes it glow nicely against dark backgrounds
            }}
        />
    )
}
