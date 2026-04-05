"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const subtitle = "The people who know you best decide who you should meet.";

export default function NoSwipingSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Smooth scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Background image parallax
    const imageY = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);

    // Content animation: fades in quickly and out later
    const contentOpacity = useTransform(smoothProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
    const contentScale = useTransform(smoothProgress, [0.1, 0.3, 0.7, 0.9], [0.92, 1, 1, 0.92]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-[70vh] flex items-center justify-center px-6 overflow-hidden bg-black"
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
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/60" />
            </motion.div>

            {/* Centered Content */}
            <motion.div
                style={{
                    opacity: contentOpacity,
                    scale: contentScale
                }}
                className="relative z-10 max-w-lg mx-auto text-center"
            >
                <h2
                    className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6"
                    style={{ letterSpacing: "-1.5px" }}
                >
                    No swiping.<br />
                    No algorithm guessing.<br />
                    Just your people.
                </h2>
                <p className="text-white/50 text-base leading-relaxed max-w-sm mx-auto">
                    {subtitle}
                </p>
            </motion.div>
        </section>
    );
}
