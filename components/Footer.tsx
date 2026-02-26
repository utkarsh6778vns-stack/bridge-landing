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
                    <div className="flex items-center mb-6">
                        <img
                            src="/bridge_logo_new.png"
                            alt="Bridge Logo"
                            className="h-10 md:h-14 w-auto object-contain"
                        />
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

                        <div className="w-px h-4 bg-gray-300 hidden md:block"></div>

                        <a
                            href="/privacy"
                            className="text-gray-600 hover:text-blue-500 transition-colors text-sm font-medium"
                        >
                            Privacy Policy
                        </a>

                        <div className="w-px h-4 bg-gray-300 hidden md:block"></div>

                        <a
                            href="/terms"
                            className="text-gray-600 hover:text-blue-500 transition-colors text-sm font-medium"
                        >
                            Terms of Service
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
