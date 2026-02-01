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
        }, 4800);
        return () => clearTimeout(timer);
    }, [onComplete]);

    // Enhanced smooth easing
    const smoothTransition: any = { duration: 1, ease: [0.65, 0, 0.35, 1] };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1221] overflow-hidden px-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full max-w-xl md:max-w-2xl aspect-[942/248]"
            >
                <svg
                    viewBox="0 0 942 248"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    <defs>
                        <mask id="preloader-mask">
                            {/* Part 1: Heart */}
                            <motion.rect
                                x="105" y="85" width="40" height="40" fill="white"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ ...smoothTransition, delay: 0.5 }}
                            />
                            {/* Part 2: Circle */}
                            <motion.rect
                                x="75" y="55" width="100" height="100" fill="white"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ ...smoothTransition, delay: 1.3 }}
                            />
                            {/* Part 3: Nodes/Arms */}
                            <motion.rect
                                x="10" y="20" width="230" height="180" fill="white"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ ...smoothTransition, delay: 2.1 }}
                            />
                            {/* Part 4: Bridge Text */}
                            <motion.rect
                                x="250" y="0" width="700" height="248" fill="white"
                                initial={{ width: 0 }}
                                animate={{ width: 700 }}
                                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1], delay: 2.9 }}
                            />
                        </mask>
                    </defs>

                    <image
                        href="/logo.png"
                        x="0" y="0" width="942" height="248"
                        mask="url(#preloader-mask)"
                    />
                </svg>
            </motion.div>
        </div>
    );
}
