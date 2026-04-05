"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const lines = [
    "No swiping.",
    "No algorithm guessing.",
    "Just your people.",
];

const subtitle = "The people who know you best decide who you should meet.";

export default function NoSwipingSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Photo moves upward (parallax) as section scrolls into view
    // Subtle parallax that keeps image within bounds
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[85dvh] overflow-hidden"
        >
            {/* Full-bleed Parallax Photo */}
            <motion.div
                style={{ y: imageY }}
                className="absolute inset-0 w-full h-[140%] -top-[20%]"
            >
                <img
                    src="/crowd_photo.jpg"
                    alt="Bridge community event"
                    className="w-full h-full object-cover object-center"
                />
                {/* Strong dark overlay so text is readable */}
                {/* Much brighter overlay as requested */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            </motion.div>

            {/* Text at top, withRice badge for consistency */}
            <div className="relative z-10 flex flex-col justify-start h-full px-8 md:px-20 pb-20 pt-16 md:pt-24">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#34D399]/20 to-[#059669]/20 border border-[#34D399]/40 shadow-[0_0_20px_rgba(52,211,153,0.3)] ring-1 ring-white/10 rounded-full px-4 py-1.5 mb-10 backdrop-blur-md w-fit"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse"></span>
                        <span className="text-[#34D399] text-xs font-semibold tracking-wide uppercase">Community</span>
                    </motion.div>
                    {lines.map((line, i) => (
                        <div key={line} className="overflow-hidden">
                            <motion.h2
                                initial={{ y: "110%", opacity: 0 }}
                                whileInView={{ y: "0%", opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    duration: 0.85,
                                    delay: i * 0.12,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
                                style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)" }}
                            >
                                {line}
                            </motion.h2>
                        </div>
                    ))}

                    <div className="overflow-hidden mt-6">
                        <motion.p
                            initial={{ y: "110%", opacity: 0 }}
                            whileInView={{ y: "0%", opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.85,
                                delay: lines.length * 0.12 + 0.05,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-lg md:text-2xl text-white/70 max-w-xl leading-relaxed"
                        >
                            {subtitle}
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}
