"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
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
                backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
                backdropFilter: isScrolled ? "blur(10px)" : "none",
            }}
        >
            <a href="#home" className="flex items-center hover:opacity-90 transition-opacity">
                <img
                    src="/bridge_logo_new.png"
                    alt="Bridge Logo"
                    className="h-8 md:h-12 w-auto object-contain"
                />
            </a>

            {/* Desktop Navigation */}
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

            {/* Mobile Navigation - Only "Join Waitlist" Button */}
            <motion.a
                href="#waitlist"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                className="bg-blue-500 text-white px-5 py-2 rounded-full font-bold shadow-xl md:hidden text-sm"
            >
                Join Waitlist
            </motion.a>
        </motion.header>
    );
}
