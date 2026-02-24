"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const Preloader: React.FC = () => {
    const [progress, setProgress] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Prevent scrolling while preloader is active
        document.body.style.overflow = 'hidden'

        const duration = 2000 // 2 seconds optimal cinematic loading time
        const intervalTime = 20
        const steps = duration / intervalTime

        let currentStep = 0

        const interval = setInterval(() => {
            currentStep++
            // Calculate realistic ease-out loading progress
            const progressValue = Math.min(
                100,
                Math.floor(100 * (1 - Math.pow(1 - currentStep / steps, 3))) // Cubic ease out
            )

            setProgress(progressValue)

            if (currentStep >= steps) {
                clearInterval(interval)
                setTimeout(() => {
                    setIsLoading(false)
                    // Re-enable scrolling when done
                    document.body.style.overflow = 'unset'
                }, 400) // Brief pause at 100% just for dramatic effect
            }
        }, intervalTime)

        return () => clearInterval(interval)
    }, [])

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#08080C] text-white"
                >
                    {/* Subtle background glow for premium feel */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                        <div className="w-[30vw] h-[30vw] rounded-full bg-blue-600/20 blur-[100px]" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Cinematic text reveal */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="overflow-hidden"
                        >
                            <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
                                KSONSTech
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-[1px] bg-white/20 mt-6 w-full relative overflow-hidden"
                        >
                            <div
                                className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-300 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </motion.div>

                        {/* Percentage Counter */}
                        <div className="mt-4 text-xs font-medium tracking-widest text-zinc-500 flex items-center justify-between w-full">
                            <span>LOADING EXPERIENCE</span>
                            <span className="font-mono text-zinc-300">{progress}%</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
