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
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-screen overflow-hidden"
        >
            {/* Full-bleed Parallax Photo */}
            <motion.div
                style={{ y: imageY }}
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
                <img
                    src="/crowd_photo.jpg"
                    alt="Bridge community event"
                    className="w-full h-full object-cover object-center"
                />
                {/* Strong dark overlay so text is readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
            </motion.div>

            {/* Text pinned to bottom-left, animates in on scroll */}
            <div className="relative z-10 flex flex-col justify-end min-h-screen px-8 md:px-20 pb-20 md:pb-28 pt-32">
                <div className="max-w-4xl">
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
