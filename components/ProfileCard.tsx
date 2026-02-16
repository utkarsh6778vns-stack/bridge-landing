"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProfileCard() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-[340px] mx-auto"
        >
            <img
                src="/profile_card_exact.png"
                alt="Chloe Profile Card"
                className="w-full h-auto object-contain drop-shadow-2xl rounded-[2.5rem]"
            />
        </motion.div>
    );
}
