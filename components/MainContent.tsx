"use client";

import React from "react";
import { motion } from "framer-motion";

interface MainContentProps {
    showContent?: boolean;
}

export default function MainContent({ showContent = false }: MainContentProps) {
    const accentColor = "#3B82F6";

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
                <div className="absolute inset-0 bg-black/30" />

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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
            </motion.div>

            {/* Hero Content - Full Viewport Height */}
            <main className="relative z-10 flex flex-col justify-end h-screen px-8 pb-8 md:px-20 md:pb-16" id="home">
                <div className="max-w-5xl">
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-2"
                    >
                        {["Community finds the match", "We bridge the gap"].map((line, i) => (
                            <motion.div
                                key={i}
                                className="py-1"
                                initial="hidden"
                                animate={showContent ? "visible" : "hidden"}
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.08,
                                            delayChildren: i * 2.5,
                                        }
                                    }
                                }}
                            >
                                {line.split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0 },
                                            visible: { opacity: 1 }
                                        }}
                                        className="inline-block"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.div>
                        ))}
                    </motion.h1>
                </div>
            </main>
        </div>
    );
}
