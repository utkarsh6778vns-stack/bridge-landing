"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const accentColor = "#3B82F6";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight * 0.8);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
            className="flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-6 py-4 md:px-20 md:py-6 transition-colors duration-500"
            style={{
                backgroundColor: isScrolled || isMobileMenuOpen ? "rgba(255, 255, 255, 0.95)" : "transparent",
                backdropFilter: isScrolled || isMobileMenuOpen ? "blur(10px)" : "none",
            }}
        >
            <a href="#home" className="flex items-center gap-2 md:gap-4 hover:opacity-90 transition-opacity">
                {/* Mini Logo */}
                <div className="relative scale-75 md:scale-100 origin-left">
                    <svg width="72" height="54" viewBox="0 0 100 60" fill="none" className="overflow-visible">
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
                </div>
                <span className="text-3xl md:text-4xl font-black text-blue-500 tracking-tighter -ml-2 md:ml-1">Bridge</span>
            </a>

            <nav className="hidden md:flex items-center gap-10 text-sm font-semibold">
                {navLinks.map((item, i) => (
                    <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.3 + i * 0.1, ease: "easeOut" }}
                        className="relative group transition-colors duration-500"
                        style={{ color: isScrolled ? "#000" : "rgba(255, 255, 255, 0.9)" }}
                    >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                    </motion.a>
                ))}
                <motion.a
                    href="#waitlist"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                    className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-white/95 transition-all shadow-xl inline-block"
                >
                    Join Waitlist
                </motion.a>
            </nav>

            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2 z-50"
                aria-label="Menu"
            >
                <motion.span
                    animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className={`w-6 h-0.5 ${isScrolled || isMobileMenuOpen ? 'bg-black' : 'bg-white'} transition-colors duration-300`}
                ></motion.span>
                <motion.span
                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className={`w-6 h-0.5 ${isScrolled || isMobileMenuOpen ? 'bg-black' : 'bg-white'} transition-colors duration-300`}
                ></motion.span>
                <motion.span
                    animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className={`w-6 h-0.5 ${isScrolled || isMobileMenuOpen ? 'bg-black' : 'bg-white'} transition-colors duration-300`}
                ></motion.span>
            </motion.button>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((item, i) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl font-bold text-black hover:text-blue-500 transition-colors"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#waitlist"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="bg-blue-500 text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl"
                        >
                            Join Waitlist
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
