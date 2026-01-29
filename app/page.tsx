"use client";

import { useState } from "react";
import BridgePreloader from "@/components/BridgePreloader";
import MainContent from "@/components/MainContent";
import AboutSection from "@/components/AboutSection";
import WhatMakesBridge from "@/components/WhatMakesBridge";
import ExpressInterest from "@/components/ExpressInterest";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [stage, setStage] = useState<"preloader" | "main">("preloader");

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden scroll-smooth">
      {/* Sticky Navbar */}
      {stage === "main" && <Navbar />}

      {/* Scrollable Content */}
      <div className="scroll-smooth">
        <MainContent showContent={stage === "main"} />
        <AboutSection />
        <WhatMakesBridge />
        <ExpressInterest />
        <Footer />
      </div>

      <AnimatePresence>
        {stage === "preloader" && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="fixed inset-0 z-50 overflow-hidden"
          >
            <BridgePreloader onComplete={() => setStage("main")} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
