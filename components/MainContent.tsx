"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface MainContentProps {
    showContent?: boolean;
}

export default function MainContent({ showContent = false }: MainContentProps) {
    const { scrollY } = useScroll();

    // Animate hero based on scroll purely vertically downwards (no fading)
    // Moving only a little down (slower parallax)
    const heroY = useTransform(scrollY, [0, 1000], [0, 150]);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
            {/* Background Image Container */}
            <motion.div
                initial={{ scale: 1.05 }}
                animate={{
                    scale: [1.05, 1.08, 1.05],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform-gpu"
                style={{
                    backgroundImage: `url('/hero_bridge.png')`,
                }}
            >
                {/* Overlay for quality and readability */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Dynamic Moving Glow */}
                <motion.div
                    animate={{
                        background: [
                            "radial-gradient(800px circle at 0% 0%, rgba(59, 130, 246, 0.08), transparent)",
                            "radial-gradient(800px circle at 100% 100%, rgba(59, 130, 246, 0.08), transparent)",
                            "radial-gradient(800px circle at 0% 100%, rgba(59, 130, 246, 0.08), transparent)",
                            "radial-gradient(800px circle at 100% 0%, rgba(59, 130, 246, 0.08), transparent)",
                            "radial-gradient(800px circle at 0% 0%, rgba(59, 130, 246, 0.08), transparent)",
                        ]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 z-0 opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            </motion.div>

            {/* Hero Content - Full Viewport Height */}
            <motion.main
                style={{ y: heroY }}
                className="relative z-10 flex-1 flex flex-col items-center justify-center text-center h-[85dvh] px-6 pb-16" id="home"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#34D399]/20 to-[#059669]/20 border border-[#34D399]/40 shadow-[0_0_20px_rgba(52,211,153,0.3)] ring-1 ring-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse"></span>
                    <span className="text-[#34D399] text-xs font-semibold tracking-wide">Live at Rice University</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-10"
                    style={{ letterSpacing: "-2px", textShadow: "0 2px 20px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)" }}
                >
                    Your people help you<br />find your person.
                </motion.h1>

                <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    href="#waitlist"
                    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] hover:bg-[position:right_center] text-white px-8 py-4 rounded-[16px] font-bold text-lg md:text-xl transition-all duration-500 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] animate-fade-in-up animation-delay-900 mx-auto w-fit block"
                >
                    Get Bridge
                </motion.a>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-6 text-white/30 text-sm"
                >
                    Only @rice.edu. Free forever.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center pb-10"
                >
                    <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
                        <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce"></div>
                    </div>
                </motion.div>
            </motion.main>
        </div>
    );
}
