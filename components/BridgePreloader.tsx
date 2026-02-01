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
                        {/* Left Connector */}
                        <motion.path
                            d="M 75 60 L 30 60"
                            stroke={accentColor}
                            strokeWidth="5"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={lineControls}
                        />
                        <motion.circle
                            cx="30"
                            cy="60"
                            r="8"
                            stroke={accentColor}
                            strokeWidth="5"
                            fill="none"
                            initial={{ opacity: 0 }}
                            animate={lineControls}
                        />

                        {/* Center Circle */}
                        <motion.circle
                            cx="120"
                            cy="60"
                            r="45"
                            stroke={accentColor}
                            strokeWidth="5"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={circleControls}
                        />

                        {/* Heart Icon - Upright and Rounded */}
                        <motion.path
                            d="M 120 84 C 110 84 100 75 100 62 C 100 49 110 42 120 54 C 130 42 140 49 140 62 C 140 75 130 84 120 84 Z"
                            stroke={accentColor}
                            strokeWidth="5"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0, scale: 0.8 }}
                            animate={heartControls}
                            style={{ originX: "50%", originY: "50%" }}
                        />

                        {/* Right Connector */}
                        <motion.path
                            d="M 165 60 L 210 60"
                            stroke={accentColor}
                            strokeWidth="5"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={lineControls}
                        />
                        <motion.circle
                            cx="210"
                            cy="60"
                            r="8"
                            stroke={accentColor}
                            strokeWidth="5"
                            fill="none"
                            initial={{ opacity: 0 }}
                            animate={lineControls}
                        />
                    </svg>
                </div>

                {/* Text "Bridge" */}
                <motion.div
                    className="md:ml-4"
                    initial={{ opacity: 0, y: 10, x: -20 }}
                    animate={textControls}
                >
                    <h1 className="text-6xl md:text-8xl font-[900] text-[#3B82F6] tracking-tighter">Bridge</h1>
                </motion.div>
            </div>
        </div>
    );
}
