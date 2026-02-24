"use client"

import { motion } from "framer-motion"

const approachData = [
    {
        title: "Launch",
        description: "We help brands launch bold solutions into the market, engineering connections with the right audience.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-blue-400 group-hover:text-blue-300 transition-colors duration-500">
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
                />
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    d="m12 15-3-3a22 22 0 0 1 3.81-11.56L13 0l.82.49A22 22 0 0 1 23 12c-4 0-11.23-2.03-11.23-9.56"
                />
            </svg>
        )
    },
    {
        title: "Grow",
        description: "We blend data-driven narratives and visual storytelling to help businesses scale—just like a perfectly executed campaign.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-500">
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    d="M21 7 12 16l-4-4L2 18"
                />
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    viewport={{ once: true }}
                    d="M21 7v6M21 7h-6"
                />
            </svg>
        )
    },
    {
        title: "Transform",
        description: "We create strategic brand and digital makeovers to keep businesses fresh—refining every single user touchpoint.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-purple-400 group-hover:text-purple-300 transition-colors duration-500">
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    d="m15 5 4 4"
                />
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"
                />
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    viewport={{ once: true }}
                    d="m22 22-8.3-8.3"
                />
            </svg>
        )
    },
    {
        title: "Re-Blend",
        description: "We reimagine chaotic brand identities into harmonious digital ecosystems, ensuring every element works in perfect synergy.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-500">
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    d="M12 2A10 10 0 1 0 22 12 10 10 0 0 0 12 2Z"
                />
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                    viewport={{ once: true }}
                    d="M12 6v6l4 2"
                />
            </svg>
        )
    }
]

export default function Approach() {
    return (
        <section className="py-24 lg:py-32 bg-[#0A0F1A] relative overflow-hidden">
            {/* Ultra-Premium Intensive Ambient Background Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Intense Floating Orbs (Strong Glows) */}
                <motion.div
                    animate={{ x: [-40, 50, -40], y: [-40, 50, -40], scale: [1, 1.25, 1], opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-5%] left-[-15%] w-[45rem] h-[45rem] rounded-full blur-[120px] bg-blue-600/30"
                />
                <motion.div
                    animate={{ x: [40, -50, 40], y: [30, -50, 30], scale: [1.1, 1.3, 1.1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50rem] h-[50rem] rounded-full blur-[130px] bg-indigo-600/30"
                />
                <motion.div
                    animate={{ x: [-30, 30, -30], y: [20, -20, 20], scale: [1, 1.4, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                    className="absolute top-[30%] left-[30%] w-[35rem] h-[35rem] rounded-full blur-[140px] bg-purple-600/25"
                />

                {/* Abundant glowing light particles */}
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={`mote-${i}`}
                        className="absolute rounded-full bg-white shadow-[0_0_15px_3px_rgba(255,255,255,0.8)] blur-[0.5px]"
                        style={{
                            width: Math.random() * 3 + 1.5 + 'px',
                            height: Math.random() * 3 + 1.5 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                        }}
                        animate={{
                            y: [0, -250],
                            x: [0, Math.random() * 100 - 50],
                            opacity: [0, Math.random() * 0.8 + 0.3, 0]
                        }}
                        transition={{
                            duration: Math.random() * 12 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10
                        }}
                    />
                ))}

                {/* Light streak effect */}
                <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: "200%", opacity: [0, 0.15, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 3 }}
                    className="absolute top-[20%] w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-[2px] rotate-12"
                />

                {/* Elegant vignette overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,15,26,0.4)_100%)] pointer-events-none z-0" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center mb-24 md:mb-32 space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
                        How our <span className="font-serif italic text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">expertise</span> can help
                    </h2>
                    <p className="text-zinc-500 tracking-[0.25em] lowercase text-sm font-medium mt-6">
                        your business
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {approachData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                            className="flex flex-col items-center text-center group px-2"
                        >
                            {/* Floating Animated Icon Wrapper with increased Glow */}
                            <div className="mb-10 w-24 h-24 flex items-center justify-center p-4 rounded-3xl bg-white/[0.02] border border-white/[0.05] shadow-[0_0_20px_rgba(255,255,255,0.02)] group-hover:bg-white/[0.06] group-hover:shadow-[0_0_35px_rgba(59,130,246,0.15)] transition-all duration-700 hover:scale-105 hover:-translate-y-2">
                                {item.icon}
                            </div>

                            <h3 className="text-3xl md:text-4xl font-serif italic text-white mb-6 tracking-wide group-hover:text-blue-200 group-hover:drop-shadow-[0_0_10px_rgba(191,219,254,0.4)] transition-all duration-500">
                                {item.title}
                            </h3>

                            <p className="text-zinc-400 leading-relaxed font-light text-[15px] md:text-base opacity-80 group-hover:opacity-100 transition-opacity duration-500 max-w-[280px] md:max-w-none">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
