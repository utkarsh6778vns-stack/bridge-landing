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

    // Image scrolls upward as section scrolls into view (parallax)
    const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-15%"]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-white dark:bg-[#0F0E0C] overflow-hidden transition-colors duration-500"
        >
            {/* Parallax Photo */}
            <div className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden">
                <motion.div
                    style={{ y: imageY }}
                    className="absolute inset-0 w-full h-[120%] -top-[10%]"
                >
                    <img
                        src="/crowd_photo.jpg"
                        alt="Bridge community event"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Dark overlay gradient at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
                </motion.div>
            </div>

            {/* Text block */}
            <div className="relative z-10 bg-white dark:bg-[#0F0E0C] px-8 md:px-20 py-20 md:py-28 transition-colors duration-500">
                <div className="max-w-4xl mx-auto">
                    {lines.map((line, i) => (
                        <motion.h2
                            key={line}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-tight tracking-tight mb-2"
                        >
                            {line}
                        </motion.h2>
                    ))}

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: lines.length * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-8 text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
