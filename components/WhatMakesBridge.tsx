"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, Users } from "lucide-react";

export default function WhatMakesBridge() {
    const words = ["intentional", "effortless", "different", "for you"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        const typeSpeed = 100; // ms per char
        const deleteSpeed = 50; // ms per char
        const pauseTime = 1500; // time to wait before deleting

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing
                if (displayedText.length < currentWord.length) {
                    setDisplayedText(currentWord.slice(0, displayedText.length + 1));
                } else {
                    // Finished typing, wait then delete
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                // Deleting
                if (displayedText.length > 0) {
                    setDisplayedText(displayedText.slice(0, -1));
                } else {
                    // Finished deleting, move to next word
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        };

        const timer = setTimeout(
            handleTyping,
            isDeleting ? deleteSpeed : typeSpeed
        );

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentWordIndex, words]);

    return (
        <section className="min-h-screen bg-white text-black px-8 py-20 md:px-20 md:py-32 flex items-center">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Column: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-12 order-2 lg:order-1"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">What makes</h2>
                        <div className="inline-block bg-[#1E90FF] rounded-full px-6 py-2">
                            <span className="text-white text-3xl md:text-4xl font-bold font-mono tracking-wide">
                                {displayedText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </div>
                        <p className="mt-6 text-gray-500 text-sm font-medium">
                            Beta launching at <span className="text-blue-500 font-bold">Rice</span> February 28th.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Feature 1 */}
                        <div className="bg-white hover:shadow-lg transition-shadow p-6 rounded-2xl border border-gray-100/50">
                            <div className="flex items-start space-x-4">
                                <div className="bg-[#1E90FF] p-3 rounded-full shrink-0">
                                    <Star className="w-6 h-6 text-white" fill="white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Curated, Not Crowded</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Every fit is chosen with care, powered by AI and refined through real human insight.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white hover:shadow-lg transition-shadow p-6 rounded-2xl border border-gray-100/50">
                            <div className="flex items-start space-x-4">
                                <div className="bg-[#1E90FF] p-3 rounded-full shrink-0">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">Five Minutes A Day</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Because meaningful connection shouldn't feel like another job.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white hover:shadow-lg transition-shadow p-6 rounded-2xl border border-gray-100/50">
                            <div className="flex items-start space-x-4">
                                <div className="bg-[#1E90FF] p-3 rounded-full shrink-0">
                                    <Users className="w-6 h-6 text-white" fill="white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">We Fit Better Together</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        A connected community where friends and users help each other find the fit.
                                    </p>
                                    <div className="mt-4 inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                                        <Users className="w-4 h-4 text-blue-500" />
                                        <span className="text-xs font-semibold text-blue-600">Community fits made daily</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>

                {/* Right Column: Phone Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center order-1 lg:order-2"
                >
                    {/* Main Card Container - Image only with shadow */}
                    <div className="relative w-full max-w-[340px] z-20 mx-auto transform-gpu overflow-hidden">
                        <img
                            src="/profile_card_new.png"
                            alt="Chloe Profile Card"
                            className="w-full h-auto object-contain drop-shadow-2xl"
                        />
                        {/* Hide "Light Blue Bridge" text baked into the new image */}
                        <div className="absolute top-[8.5%] left-1/2 -translate-x-1/2 w-[55%] h-[8%] bg-white z-30" />
                    </div>

                    {/* Background blurred decoration */}
                    <div className="absolute top-1/4 translate-x-12 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10 animate-blob"></div>
                    <div className="absolute bottom-1/4 -translate-x-12 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10 animate-blob animation-delay-2000"></div>
                    {/* Mockup shadow layer for depth */}
                    <div className="absolute -bottom-8 w-[90%] h-12 bg-black/10 blur-xl rounded-full -z-20"></div>

                </motion.div>

            </div>
        </section>
    );
}
