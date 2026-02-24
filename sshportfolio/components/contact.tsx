"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, MessageCircle, Instagram, FileText, Send, User, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { FloatingDock } from "@/components/ui/floating-dock"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 4000)
    }, 1500)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const dockItems = [
    { title: "WhatsApp", icon: <MessageCircle className="h-full w-full text-green-400" />, href: "https://#" },
    { title: "Email", icon: <Mail className="h-full w-full text-red-400" />, href: "mailto:#" },
    { title: "LinkedIn", icon: <Linkedin className="h-full w-full text-blue-500" />, href: "https://#" },
    { title: "GitHub", icon: <Github className="h-full w-full text-white" />, href: "https://#" },
    { title: "Instagram", icon: <Instagram className="h-full w-full text-pink-500" />, href: "https://#" },
    { title: "Twitter", icon: <Twitter className="h-full w-full text-sky-400" />, href: "https://#" },
    // { title: "Resume", icon: <FileText className="h-full w-full text-yellow-400" />, href: "/Saad_Resume.pdf" },
  ]

  return (
    <section id="contact" className="w-full py-24 md:py-32 bg-[#0A0F1A] relative overflow-hidden">
      {/* Background ambient orbs to match the overarching ultra-premium theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [30, -30, 30], y: [30, -30, 30], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[-5%] w-[40rem] h-[40rem] rounded-full blur-[130px] bg-blue-600/10"
        />
        <motion.div
          animate={{ x: [-30, 30, -30], y: [-30, 30, -30], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-5%] w-[45rem] h-[45rem] rounded-full blur-[140px] bg-purple-600/10"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-[1300px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center"
        >
          {/* Left Side: Contact Info & Socials */}
          <div className="space-y-8 flex flex-col justify-center">
            <motion.div variants={item} className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/3 px-4 py-1.5 text-sm font-medium text-white border border-white/10 backdrop-blur-md shadow-2xl">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Get in Touch
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-tight">
                Let's Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Something Great</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                Have a project in mind, looking for a collaboration, or just want to chat? Drop a message below or connect with me instantly via social media.
              </p>
            </motion.div>

            <motion.div variants={item} className="pt-6 space-y-6">
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest pl-2">Social Network</p>
              <div className="w-full">
                <FloatingDock items={dockItems} />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Modern Premium Contact Form */}
          <motion.div variants={item} className="w-full relative px-2 md:px-0 lg:pl-4">
            <div className="relative p-[1px] rounded-[2rem] overflow-hidden group">
              {/* Animated form border glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-border/50 to-purple-500/20" />

              <div className="relative bg-[#0d1326]/90 backdrop-blur-2xl rounded-[2rem] p-8 md:p-10 flex flex-col h-full border border-white/5">
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-zinc-400 ml-1">Your Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                        <input
                          type="text"
                          id="name"
                          required
                          placeholder="John Doe"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all duration-300"
                        />
                      </div>
                    </div>
                    {/* Email Input */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-zinc-400 ml-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="john@example.com"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-400 ml-1">Your Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-zinc-500" />
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Tell me about your project..."
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className={`w-full relative overflow-hidden rounded-2xl h-14 font-medium text-lg transition-all duration-300 ${isSubmitted ? "bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30" : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] border border-white/10"
                        }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : isSubmitted ? (
                          "Message Sent Successfully"
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </span>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Beams with lower opacity to preserve modern dark theme */}
      <div className="opacity-30 pointer-events-none absolute inset-0 z-0">
        <BackgroundBeams />
      </div>
    </section>
  )
}
