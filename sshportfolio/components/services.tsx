"use client"

import { motion } from "framer-motion"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { ArrowUpRight, Palette, Code, Megaphone } from "lucide-react"

const servicesData = [
    {
        category: "Visual",
        icon: (
            <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl overflow-hidden group/icon border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/40 opacity-80 group-hover/icon:opacity-100 transition-opacity duration-500" />
                {/* Animated Gradient Glow */}
                <div className="absolute inset-0 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.5)_0%,transparent_70%)] animate-pulse" />

                {/* Custom SVG Icon */}
                <svg className="w-8 h-8 relative z-10 text-blue-400 group-hover/icon:text-blue-300 transition-colors drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                </svg>
            </div>
        ),
        items: [
            "Logo Design",
            "Visual Identity Development",
            "Advertising & PR Collateral",
            "Packaging Design",
            "Event + Retail Design",
        ],
    },
    {
        category: "Digital",
        icon: (
            <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl overflow-hidden group/icon border border-white/10 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-indigo-900/40 opacity-80 group-hover/icon:opacity-100 transition-opacity duration-500" />
                {/* Animated Gradient Glow */}
                <div className="absolute inset-0 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.5)_0%,transparent_70%)] animate-pulse" />

                {/* Custom SVG Icon */}
                <svg className="w-8 h-8 relative z-10 text-indigo-400 group-hover/icon:text-indigo-300 transition-colors drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            </div>
        ),
        items: [
            "Website Design + Development",
            "UI/UX Design",
            "Full Stack Development",
            "Shopify Setup & Development",
        ],
    },
    {
        category: "Campaign",
        icon: (
            <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl overflow-hidden group/icon border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-900/40 opacity-80 group-hover/icon:opacity-100 transition-opacity duration-500" />
                {/* Animated Gradient Glow */}
                <div className="absolute inset-0 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.5)_0%,transparent_70%)] animate-pulse" />

                {/* Custom SVG Icon */}
                <svg className="w-8 h-8 relative z-10 text-purple-400 group-hover/icon:text-purple-300 transition-colors drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 11 18-5v12L3 14v-3z" />
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
            </div>
        ),
        items: [
            "360° Campaigns",
            "Creative Video Campaigns",
        ],
    },
]

export default function Services() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const },
        },
    }

    return (
        <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-[#0A0F1A]">
            {/* Ultra-Premium Tech Agency Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Deep Ambient Glows */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[150px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-600/20 blur-[150px]"
                />

                {/* Floating Data Particles */}
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute rounded-full bg-white"
                        style={{
                            width: Math.random() * 3 + 1 + 'px',
                            height: Math.random() * 3 + 1 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            opacity: Math.random() * 0.5 + 0.1
                        }}
                        animate={{
                            y: [0, -100, -200],
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: Math.random() * 15 + 15,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 20,
                        }}
                    />
                ))}

                {/* Subtle Grid Overlay for Tech Vibe */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center text-center space-y-4 mb-20 md:mb-28"
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-white border border-white/10 backdrop-blur-md shadow-2xl">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        Digital Excellence
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mt-6">
                        Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Business</span>
                    </h2>
                    <p className="max-w-[750px] text-zinc-400 text-lg md:text-xl mt-6 leading-relaxed">
                        We don't just build websites; we engineer high-converting digital realities that establish your brand as an industry leader.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                >
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative h-full rounded-[2rem] p-[1px] flex flex-col group"
                        >
                            {/* The Glowing Border Effect From About Section */}
                            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />

                            <div className="relative z-10 flex flex-col h-full rounded-[2rem] p-8 md:p-10 bg-card/30 border border-border/50 backdrop-blur-xl transition-all duration-500 overflow-hidden shadow-2xl group-hover:border-primary/20">
                                {/* Hover Gradient Background */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10 bg-gradient-to-br ${index === 0 ? 'from-blue-900/40 via-blue-800/10' : index === 1 ? 'from-indigo-900/40 via-purple-800/10' : 'from-purple-900/40 via-pink-800/10'} to-transparent`} />

                                {/* Moving Bubbles Background inside Card */}
                                <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                                    {[...Array(3)].map((_, i) => (
                                        <motion.div
                                            key={`bubble-${index}-${i}`}
                                            className="absolute rounded-full blur-[30px]"
                                            style={{
                                                background: index === 0 ? 'rgba(59, 130, 246, 0.2)' : index === 1 ? 'rgba(99, 102, 241, 0.2)' : 'rgba(168, 85, 247, 0.2)',
                                                width: `${80 + i * 20}px`,
                                                height: `${80 + i * 20}px`,
                                                left: `${i * 30}%`,
                                                top: `${10 + i * 25}%`,
                                            }}
                                            animate={{
                                                x: [0, (i === 1 ? -40 : 40), 0],
                                                y: [0, (i === 2 ? -40 : 40), 0],
                                                scale: [1, 1.2, 1],
                                            }}
                                            transition={{
                                                duration: 6 + i * 2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Glass shine effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

                                <div className="flex items-center justify-between mb-8 relative z-20">
                                    <motion.div
                                        className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white shadow-lg"
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        animate={{
                                            y: [0, -6, 0],
                                            boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 20px rgba(0,0,0,0.2)", "0px 0px 0px rgba(0,0,0,0)"]
                                        }}
                                        transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        {service.icon}
                                    </motion.div>
                                    <ArrowUpRight className="w-8 h-8 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 text-blue-400" />
                                </div>

                                <h3 className="text-3xl font-bold mb-6 text-white tracking-tight relative z-20">
                                    {service.category}
                                </h3>

                                <ul className="space-y-4 flex-1 relative z-20">
                                    {service.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3 pl-2 group/item">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-2 shrink-0 group-hover/item:bg-blue-400 group-hover/item:scale-150 transition-all" />
                                            <span className="text-lg text-zinc-400 group-hover/item:text-zinc-200 transition-colors font-light tracking-wide">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
