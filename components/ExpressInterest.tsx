"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function ExpressInterest() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        smsConsent: false,
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit');
            }

            const result = await response.json();
            console.log('Submitted successfully:', result);
            setSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setSubmitted(false);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    location: "",
                    smsConsent: false,
                });
            }, 3000);
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to submit. Please try again.');
        }
    };

    return (
        <section id="waitlist" className="min-h-screen bg-white text-black px-8 py-20 md:px-20 md:py-32 flex items-center">
            <div className="max-w-7xl mx-auto w-full">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Express Your <span className="text-[#1E90FF]">Interest</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Join the Bridge waitlist now
                    </p>

                    {/* Badge */}
                    <div className="mt-6 inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full">
                        <Users className="w-5 h-5 text-[#1E90FF]" />
                        <span className="text-sm font-semibold text-[#1E90FF]">1,000+ others interested in Bridge</span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">

                            {/* Name & Email Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Name*
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email*
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent outline-none transition-all"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">Use your student email (.edu) if you have one.</p>
                                </div>
                            </div>

                            {/* Phone & Location Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone*
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="(555) 555-5555"
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Location*
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="City, State"
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* SMS Consent Checkbox */}
                            <div className="mb-6">
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="smsConsent"
                                        checked={formData.smsConsent}
                                        onChange={handleChange}
                                        className="mt-1 w-4 h-4 text-[#1E90FF] border-gray-300 rounded focus:ring-[#1E90FF]"
                                    />
                                    <span className="text-xs text-gray-600 leading-relaxed">
                                        I agree to receive SMS/text messages from Bridge for one-time verification codes if I download the app. Messages will never include marketing or promotions.
                                    </span>
                                </label>
                            </div>


                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={submitted}
                                className="w-full bg-[#1E90FF] hover:bg-[#1873CC] text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30"
                            >
                                {submitted ? "✓ Joined!" : "Join the waitlist"}
                            </button>

                            {/* Disclaimer */}
                            <p className="text-xs text-gray-500 text-center mt-4">
                                No spam. We never sell your data.
                            </p>
                        </form>
                    </motion.div>

                    {/* Right Column: Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="hidden lg:flex justify-center items-center"
                    >
                        <div className="relative">
                            {/* Animated illustration */}
                            <div className="w-full max-w-md">
                                <svg viewBox="0 0 400 400" className="w-full h-auto">
                                    {/* Bench */}
                                    <rect x="100" y="280" width="200" height="8" fill="#5CA4FF" rx="4" />
                                    <rect x="110" y="240" width="8" height="50" fill="#5CA4FF" rx="4" />
                                    <rect x="282" y="240" width="8" height="50" fill="#5CA4FF" rx="4" />

                                    {/* Left person - animated to move right and back */}
                                    <motion.g
                                        animate={{ x: [0, 15] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <circle cx="160" cy="200" r="25" fill="#2C5F8D" />
                                        <ellipse cx="160" cy="250" rx="30" ry="40" fill="#2C5F8D" />
                                    </motion.g>

                                    {/* Right person - animated to move left and back */}
                                    <motion.g
                                        animate={{ x: [0, -15] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <circle cx="240" cy="195" r="28" fill="#1E4A6D" />
                                        <ellipse cx="240" cy="250" rx="32" ry="42" fill="#1E4A6D" />
                                    </motion.g>

                                    {/* Flying hearts - animated up and down */}
                                    <motion.path
                                        d="M 200 150 L 205 145 Q 210 140 210 145 Q 210 150 205 155 L 200 160 L 195 155 Q 190 150 190 145 Q 190 140 195 145 Z"
                                        fill="#FF6B9D"
                                        animate={{
                                            y: [0, -30],
                                            opacity: [0.6, 0.8]
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut"
                                        }}
                                    />
                                    <motion.path
                                        d="M 220 130 L 223 127 Q 226 124 226 127 Q 226 130 223 133 L 220 136 L 217 133 Q 214 130 214 127 Q 214 124 217 127 Z"
                                        fill="#FF6B9D"
                                        animate={{
                                            y: [0, -35],
                                            opacity: [0.4, 0.7]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut",
                                            delay: 0.5
                                        }}
                                    />

                                    {/* Additional flying heart */}
                                    <motion.path
                                        d="M 180 120 L 183 117 Q 186 114 186 117 Q 186 120 183 123 L 180 126 L 177 123 Q 174 120 174 117 Q 174 114 177 117 Z"
                                        fill="#FF6B9D"
                                        animate={{
                                            y: [0, -25],
                                            opacity: [0.5, 0.75]
                                        }}
                                        transition={{
                                            duration: 2.8,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut",
                                            delay: 1
                                        }}
                                    />
                                </svg>
                            </div>

                            {/* Background decoration */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
