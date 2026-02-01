"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function Footer() {
    const accentColor = "#3B82F6";

    return (
        <footer id="contact" className="bg-gray-50 text-gray-700 px-8 py-16 md:px-20 md:py-20">
            <div className="max-w-7xl mx-auto">

                {/* Top Section: Logo and Copyright */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-12"
                >
                    {/* Bridge Logo */}
                    <div className="flex items-center gap-4 mb-6">
                        <svg width="70" height="52" viewBox="0 0 100 60" fill="none">
                            <circle cx="50" cy="30" r="15" stroke={accentColor} strokeWidth="3.5" fill="none" />
                            <path
                                d="M 50 36 C 48.6 37.4 46.2 37.7 44.6 36.1 C 43 34.5 43 31.9 44.6 30.3 L 50 24.9 L 55.4 30.3 C 57 31.9 57 34.5 55.4 36.1 C 53.8 37.7 51.4 37.4 50 36 Z"
                                stroke={accentColor} strokeWidth="3.5" fill="none" transform="rotate(180 50 30)"
                            />
                            <path d="M 35 30 L 15 30" stroke={accentColor} strokeWidth="3.5" strokeLinecap="round" />
                            <circle cx="15" cy="30" r="3" fill={accentColor} />
                            <path d="M 65 30 L 85 30" stroke={accentColor} strokeWidth="3.5" strokeLinecap="round" />
                            <circle cx="85" cy="30" r="3" fill={accentColor} />
                        </svg>
                        <span className="text-4xl font-black text-blue-500 tracking-tighter">Bridge</span>
                    </div>

                    <p className="text-gray-600 text-sm font-medium mb-8">
                        © 2025 Bridge. The first community-driven dating experience.
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                        <a
                            href="mailto:bridge.date.app@gmail.com"
                            className="text-gray-600 hover:text-blue-500 transition-colors text-sm font-medium"
                        >
                            bridge.date.app@gmail.com
                        </a>

                        <div className="w-px h-4 bg-gray-300 hidden md:block"></div>

                        <a
                            href="https://www.instagram.com/bridge.date/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors group"
                        >
                            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-medium">@bridge.date</span>
                        </a>
                    </div>
                </motion.div>

                {/* SMS Disclaimer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-200 pt-8"
                >
                    <p className="text-xs text-gray-500 text-center leading-relaxed max-w-4xl mx-auto">
                        When you download the Bridge mobile app and create an account, you agree to receive SMS text messages for one-time verification codes to authenticate your account. No promotional or marketing messages will be sent. Message and data rates may apply. Reply STOP to opt out or HELP for support.
                    </p>
                </motion.div>

            </div>
        </footer>
    );
}
