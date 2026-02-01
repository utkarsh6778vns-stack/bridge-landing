"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface BridgePreloaderProps {
    onComplete?: () => void;
}

export default function BridgePreloader({ onComplete }: BridgePreloaderProps) {
    const heartControls = useAnimation();
    const circleControls = useAnimation();
    const textControls = useAnimation();
    const lineControls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            // 1. Heart appears (draws path)
            await heartControls.start({
                pathLength: 1,
                opacity: 1,
                transition: { duration: 1.2, ease: "easeInOut" },
            });

            // 2. Circle forms around it
            await circleControls.start({
                pathLength: 1,
                opacity: 1,
                transition: { duration: 1.2, ease: "easeInOut" },
            });

            // Start text and lines concurrently
            await Promise.all([
                // 3. Text "Bridge" appears
                textControls.start({
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                }),
                // 4. Lines extend
                lineControls.start({
                    pathLength: 1,
                    opacity: 1,
                    transition: { duration: 0.8, ease: "easeOut" },
                }),
            ]);

            // Wait a moment then signal completion
            setTimeout(() => {
                if (onComplete) onComplete();
            }, 1500);
        };

        sequence();
    }, [heartControls, circleControls, textControls, lineControls, onComplete]);

    // Colors based on the request (Dark Blue bg, Light Blue accent)
    const accentColor = "#3B82F6";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1221] px-6">
            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-2">
                {/* Container for the logo graphic */}
                <div className="relative flex items-center justify-center scale-75 md:scale-100">
                    <svg
                        width="240"
                        height="120"
                        viewBox="0 0 240 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="overflow-visible"
                    >
                        {/* Left Arm */}
                        <motion.path
                            d="M 90 60 L 50 60"
                            stroke={accentColor}
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={lineControls}
                        />
                        <motion.circle
                            cx="50"
                            cy="60"
                            r="4.5"
                            fill={accentColor}
                            initial={{ opacity: 0 }}
                            animate={lineControls}
                        />

                        {/* Circle around Heart */}
                        <motion.circle
                            cx="120"
                            cy="60"
                            r="30"
                            stroke={accentColor}
                            strokeWidth="3.5"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={circleControls}
                        />

                        {/* Heart Icon */}
                        <motion.path
                            d="M 120 70.35 C 117.2 73.2 112.4 73.8 109.2 70.6 C 106 67.4 106 62.2 109.2 59 L 120 48.2 L 130.8 59 C 134 62.2 134 67.4 130.8 70.6 C 127.6 73.8 122.8 73.2 120 70.35 Z"
                            stroke={accentColor}
                            strokeWidth="3.5"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0, scale: 0.8, rotate: 180 }}
                            animate={heartControls}
                            style={{ originX: "50%", originY: "50%" }}
                        />

                        {/* Right Arm */}
                        <motion.path
                            d="M 150 60 L 190 60"
                            stroke={accentColor}
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={lineControls}
                        />
                        <motion.circle
                            cx="190"
                            cy="60"
                            r="4.5"
                            fill={accentColor}
                            initial={{ opacity: 0 }}
                            animate={lineControls}
                        />

                    </svg>
                </div>

                {/* Text "Bridge" */}
                <motion.div
                    className="md:ml-2"
                    initial={{ opacity: 0, y: 10, x: -20 }}
                    animate={textControls}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[#3B82F6] tracking-tighter">Bridge</h1>
                </motion.div>
            </div>
        </div>
    );
}
