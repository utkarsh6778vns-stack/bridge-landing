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
        }, 4000); // 4 seconds total for the sequence
        return () => clearTimeout(timer);
    }, [onComplete]);

    // Animation Variants
    const partVariants: any = {
        initial: { opacity: 0, scale: 0.8 },
        animate: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.5,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1221] overflow-hidden px-6">
            {/* Background Glow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3B82F6,transparent_70%)]"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative flex flex-col items-center"
            >
                <div className="relative w-[300px] md:w-[600px] aspect-[5/1]">

                    {/* Part 1: Heart (Center of Icon) */}
                    <motion.div
                        custom={0}
                        variants={partVariants}
                        initial="initial"
                        animate="animate"
                        className="absolute inset-0 z-50"
                        style={{ clipPath: "inset(28% 45.3% 28% 45.3%)" }}
                    >
                        <img src="/logo.png" alt="Logo Part" className="w-full h-full object-contain" />
                    </motion.div>

                    {/* Part 2: Circle (Center Ring) */}
                    <motion.div
                        custom={1}
                        variants={partVariants}
                        initial="initial"
                        animate="animate"
                        className="absolute inset-0 z-40"
                        style={{ clipPath: "inset(12% 41.5% 12% 41.5%)" }}
                    >
                        <img src="/logo.png" alt="Logo Part" className="w-full h-full object-contain" />
                    </motion.div>

                    {/* Part 3a: Left Node */}
                    <motion.div
                        custom={2}
                        variants={partVariants}
                        initial="initial"
                        animate="animate"
                        className="absolute inset-0 z-30"
                        style={{ clipPath: "inset(0% 58% 0% 32.5%)" }}
                    >
                        <img src="/logo.png" alt="Logo Part" className="w-full h-full object-contain" />
                    </motion.div>

                    {/* Part 3b: Right Node */}
                    <motion.div
                        custom={2.1}
                        variants={partVariants}
                        initial="initial"
                        animate="animate"
                        className="absolute inset-0 z-30"
                        style={{ clipPath: "inset(0% 33% 0% 59.4%)" }}
                    >
                        <img src="/logo.png" alt="Logo Part" className="w-full h-full object-contain" />
                    </motion.div>

                    {/* Part 4: Bridge (The Word) */}
                    <motion.div
                        custom={3}
                        variants={partVariants}
                        initial="initial"
                        animate="animate"
                        className="absolute inset-0 z-10"
                        style={{ clipPath: "inset(0% 0% 0% 68.3%)" }}
                    >
                        <img src="/logo.png" alt="Logo Part" className="w-full h-full object-contain" />
                    </motion.div>

                    {/* Final Shimmer Effect */}
                    <motion.div
                        animate={{ opacity: [0, 0.15, 0], scale: [1, 1.02, 1] }}
                        transition={{ delay: 2.8, duration: 1.2 }}
                        className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"
                    />
                </div>
            </motion.div>
        </div>
    );
}
