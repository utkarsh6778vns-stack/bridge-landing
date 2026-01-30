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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-blue-50 p-6 rounded-2xl"
                        >
                            <h3 className="font-bold text-lg mb-3">We Bridge the Gap.</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                We remove the noise of superficial swipes to create a direct path to the person you are meant to meet.
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-blue-50 p-6 rounded-2xl"
                        >
                            <h3 className="font-bold text-lg mb-3">Matching Souls, Not Profiles.</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Love isn't a digital catalog search. At Bridge, we believe in resonance over algorithms.
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-blue-50 p-6 rounded-2xl"
                        >
                            <h3 className="font-bold text-lg mb-3">Intentional Connections.</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Nurturing relationships through shared values and genuine, soulful intent.
                            </p>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-blue-50 p-6 rounded-2xl"
                        >
                            <h3 className="font-bold text-lg mb-3">100% Community Driven.</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Every match is shaped by the people who know the community best, not just data points on a screen.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column - Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-blue-50 p-8 md:p-12 rounded-2xl flex flex-col justify-center"
                    >
                        <p className="text-base md:text-lg leading-relaxed mb-6">
                            At Bridge, we believe love is the ultimate connection, not a digital catalog search. Our mission is simple: we bridge the gap between you and the person you are meant to meet.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed mb-6">
                            In an era of superficial swipes, we stand for something deeper. We are a community where the community finds the match nurturing connections through shared values and genuine intent.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed font-semibold">
                            We aren't matching profiles; we're matching souls.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
