"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface BridgePreloaderProps {
    onComplete?: () => void;
}

export default function BridgePreloader({ onComplete }: BridgePreloaderProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (onComplete) onComplete();
        }, 5000); // Sequence needs time to breathe
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1221] overflow-hidden px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative w-full max-w-4xl aspect-[942/248]"
            >
                <svg
                    viewBox="0 0 942 248"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    <defs>
                        <mask id="preloader-mask">
                            {/* Part 1: Heart (approx center) */}
                            <motion.rect
                                x="105" y="85" width="40" height="40" fill="white"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            />
                            {/* Part 2: Circle */}
                            <motion.rect
                                x="75" y="55" width="100" height="100" fill="white"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.2, duration: 0.6 }}
                            />
                            {/* Part 3: Nodes/Arms */}
                            <motion.rect
                                x="10" y="20" width="230" height="180" fill="white"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.9, duration: 0.6 }}
                            />
                            {/* Part 4: Bridge Text */}
                            <motion.rect
                                x="250" y="0" width="700" height="248" fill="white"
                                initial={{ width: 0 }}
                                animate={{ width: 700 }}
                                transition={{ delay: 2.6, duration: 0.8, ease: "easeOut" }}
                            />
                        </mask>
                    </defs>

                    {/* The actual image revealed by the mask */}
                    <image
                        href="/logo.png"
                        x="0" y="0" width="942" height="248"
                        mask="url(#preloader-mask)"
                    />
                </svg>

                {/* Shimmer Effect */}
                <motion.div
                    initial={{ left: "-100%" }}
                    animate={{ left: "200%" }}
                    transition={{ delay: 3.5, duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-x-0 inset-y-0 w-32 bg-white/10 skew-x-12 blur-2xl pointer-events-none"
                />
            </motion.div>
        </div>
    );
}
