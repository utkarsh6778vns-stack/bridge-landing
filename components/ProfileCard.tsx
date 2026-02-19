"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProfileCard() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-[340px] mx-auto hover:scale-[1.02] transition-transform duration-500"
        >
            <img
                src="/profile_card_v2.png"
                alt="Chloe Profile Card"
                className="w-full h-auto drop-shadow-2xl rounded-[2.5rem]"
            />
        </motion.div>
    );
}
