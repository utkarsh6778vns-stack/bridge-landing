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
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative"
            >
                <img
                    src="/logo.png"
                    alt="Bridge Logo"
                    className="w-[280px] md:w-[480px] h-auto object-contain"
                />
            </motion.div>
        </div>
    );
}
