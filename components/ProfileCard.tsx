"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ProfileCard() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full max-w-[380px] mx-auto flex flex-col items-center justify-center relative font-sans"
        >
            <img
                src="/vote_card.jpg"
                alt="Vote Profile Card"
                className="w-full h-auto drop-shadow-2xl rounded-[32px]"
            />
        </motion.div>
    );
}
