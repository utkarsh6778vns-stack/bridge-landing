"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface BridgePreloaderProps {
    onComplete?: () => void;
}

export default function BridgePreloader({ onComplete }: BridgePreloaderProps) {
    const accentColor = "#3B82F6";

    useEffect(() => {
        const timer = setTimeout(() => {
            if (onComplete) onComplete();
        }, 3200); // Slightly longer for the premium sequence
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1221] overflow-hidden">
            {/* Ambient Background Glow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.15, 0.05] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]"
            />

            <div className="relative flex flex-col items-center">
                {/* Logo Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.5
                    }}
                    className="relative group"
                >
                    {/* The Logo Image */}
                    <div className="relative">
                        <img
                            src="/logo.png"
                            alt="Bridge"
                            className="w-[280px] md:w-[420px] h-auto object-contain relative z-10"
                        />

                        {/* Shimmer / Scanning Effect */}
                        <motion.div
                            initial={{ left: "-100%" }}
                            animate={{ left: "200%" }}
                            transition={{
                                duration: 1.8,
                                ease: "easeInOut",
                                delay: 1.2,
                                repeat: 0
                            }}
                            className="absolute inset-y-0 w-20 bg-white/20 skew-x-12 blur-xl z-20 pointer-events-none"
                        />
                    </div>

                    {/* Outer Pulse Rings */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1.3] }}
                        transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 border border-blue-500/30 rounded-full blur-sm -z-10"
                    />
                </motion.div>

                {/* Elegant Progress Line below the logo */}
                <div className="mt-8 w-32 md:w-48 h-[1px] bg-white/5 relative overflow-hidden rounded-full">
                    <motion.div
                        initial={{ left: "-100%" }}
                        animate={{ left: "0%" }}
                        transition={{
                            duration: 2.5,
                            ease: [0.4, 0, 0.2, 1],
                            delay: 0.2
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    />
                </div>

                {/* Secondary Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 1.8, duration: 1 }}
                    className="mt-4 text-[10px] tracking-[0.3em] font-medium text-blue-400 uppercase"
                >
                    Nurturing Connections
                </motion.p>
            </div>
        </div>
    );
}
