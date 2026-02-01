"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="min-h-screen bg-white text-black px-8 py-20 md:px-20 md:py-32">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-blue-500 font-semibold text-sm mb-6 tracking-wide"
                >
                    About Us
                </motion.p>

                {/* Main Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-7xl font-bold mb-20 md:mb-40 leading-tight relative"
                >
                    Go on your{" "}
                    <span className="relative inline-block">
                        last
                        <svg
                            className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)]"
                            viewBox="0 0 120 80"
                            fill="none"
                        >
                            <ellipse
                                cx="60"
                                cy="40"
                                rx="55"
                                ry="35"
                                stroke="#3B82F6"
                                strokeWidth="2.5"
                                fill="none"
                            />
                        </svg>
                    </span>
                    <br />
                    first date.

                    {/* Arrow pointing to description */}
                    <motion.svg
                        initial={{ opacity: 0, pathLength: 0 }}
                        whileInView={{ opacity: 1, pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute bottom-[-6rem] md:bottom-[-10rem] left-1/2 md:left-[45%] w-24 h-24 md:w-40 md:h-40 text-blue-500"
                        fill="none"
                    >
                        <motion.path
                            d="M 20 20 Q 50 40, 70 70"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                        />
                        <motion.path
                            d="M 70 70 L 65 60 M 70 70 L 60 68"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </motion.svg>
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pl-0 md:pl-12 lg:pl-24">
                    {/* Left Column - Feature Cards (2x2 Grid with Spacers) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Placeholder for removed left-most card */}
                        <div className="hidden sm:block"></div>

                        {/* Card: Curated individual matches */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-blue-50 p-6 rounded-2xl"
                        >
                            <h3 className="font-bold text-xl md:text-2xl mb-3">Curated individual matches</h3>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Where you only engage with one person at a time
                            </p>
                        </motion.div>

                        {/* Placeholder for removed left-most card */}
                        <div className="hidden sm:block"></div>

                        {/* Card: 5 minutes a day */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-blue-50 p-6 rounded-2xl"
                        >
                            <h3 className="font-bold text-xl md:text-2xl mb-3">5 minutes a day</h3>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Because meaningful connection shouldn't feel like another job.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column - Large Bento Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-blue-50 p-8 md:p-12 rounded-2xl flex flex-col justify-center"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">Intentional Algorithmic Dating</h3>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            The algorithm, powered by real human insights, suggests the single best match for you. Then your friends decide if the fit is right or not.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
