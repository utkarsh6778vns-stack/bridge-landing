"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Check, X, UserPlus, Info, Users, Handshake, UserCircle } from "lucide-react";

export default function ProfileCard() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full max-w-[380px] mx-auto bg-white rounded-[50px] overflow-hidden shadow-2xl border-[4px] border-slate-50 flex flex-col relative font-sans text-black"
            style={{ height: '800px' }}
        >
            {/* Top Prompt */}
            <div className="bg-blue-50/80 py-3 px-4 text-center">
                <p className="text-blue-600 font-semibold text-[13px]">
                    Vote on 2 proposals to unlock the Friends Area
                </p>
            </div>

            {/* Content Scrollable Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 pb-24 no-scrollbar">

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 mb-4 mt-2">
                    <div className="w-10 h-1.5 bg-blue-600 rounded-full"></div>
                    <div className="w-10 h-1.5 bg-blue-100 rounded-full"></div>
                    <span className="text-gray-400 text-xs font-semibold ml-2">1 of 2</span>
                </div>

                {/* Dual Portraits Area */}
                <div className="relative flex justify-between gap-2 h-[320px] mb-4">
                    {/* Left Portrait */}
                    <div className="relative w-1/2 rounded-3xl overflow-hidden shadow-sm">
                        <img
                            src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&q=80"
                            alt="S.W."
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                        <div className="absolute bottom-3 left-3 text-white font-bold text-2xl tracking-tight drop-shadow-md">
                            S.W., 18
                        </div>
                    </div>

                    {/* Right Portrait */}
                    <div className="relative w-1/2 rounded-3xl overflow-hidden shadow-sm">
                        <img
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
                            alt="C.S."
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                        <div className="absolute bottom-3 left-3 text-white font-bold text-2xl tracking-tight drop-shadow-md">
                            C.S., 18
                        </div>
                    </div>

                    {/* Floating Center Badge */}
                    <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 bg-[#1E50FF] text-white px-4 py-1.5 rounded-full border-[3px] border-white flex items-center gap-1.5 shadow-lg z-10">
                        <Star className="w-4 h-4 fill-white text-white" />
                        <span className="font-bold text-sm">90%</span>
                    </div>
                </div>

                {/* Voting Bar */}
                <div className="mb-2">
                    <div className="w-full h-3.5 bg-gray-100 rounded-full flex overflow-hidden">
                        <div className="h-full bg-green-500 w-[75%] rounded-l-full"></div>
                        <div className="h-full bg-[#FF3B30] w-[25%] rounded-r-full"></div>
                    </div>
                </div>

                {/* Voting Stats */}
                <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-4 text-sm font-semibold mb-1">
                        <span className="text-green-500">3 Yes</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-[#FF3B30]">1 No</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-gray-400">0 Unsure</span>
                    </div>
                    <p className="text-gray-400 text-xs">4 voted · strong yes</p>
                </div>

                {/* Friend Badges */}
                <div className="border border-gray-100 shadow-sm rounded-2xl p-4 flex flex-col relative overflow-hidden mb-6">
                    {/* Pink left border accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-purple-500"></div>

                    <h3 className="text-[#1E50FF] font-bold text-lg mb-4 ml-1">Friend Badges</h3>

                    <div className="grid grid-cols-2 gap-2 ml-1">
                        <div className="flex items-center justify-center p-3 border border-gray-100 rounded-xl bg-gray-50/50">
                            <span className="text-gray-400 text-sm font-medium">No friend badges yet</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 border border-gray-100 rounded-xl bg-gray-50/50">
                            <span className="text-2xl">⚽️</span>
                            <span className="text-xs font-semibold leading-tight text-gray-800">Best midfielder at Rice</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Actions Fixed */}
            <div className="absolute bottom-[60px] left-0 right-0 bg-gradient-to-t from-white via-white to-transparent pt-12 pb-4 px-4 border-b border-gray-100">
                <button className="w-full bg-[#1E50FF] hover:bg-blue-700 active:scale-95 transition-all text-white font-bold text-lg py-4 rounded-xl flex justify-center items-center gap-2 shadow-lg mb-3">
                    <Check className="w-6 h-6" strokeWidth={3} /> Yes
                </button>

                <div className="grid grid-cols-3 gap-2">
                    <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors">
                        <X className="w-4 h-4" /> No
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors">
                        <UserPlus className="w-4 h-4" /> Recommend
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors">
                        <Info className="w-4 h-4" /> Not Sure
                    </button>
                </div>
            </div>

            {/* Mock Mobile Bottom Navbar */}
            <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-white flex justify-around items-center border-t border-gray-100 text-gray-400 pb-2">
                <button className="p-2 text-[#1E50FF]">
                    <Users className="w-7 h-7" fill="currentColor" strokeWidth={1.5} />
                </button>
                <button className="p-2 hover:text-gray-600 transition-colors">
                    <Handshake className="w-7 h-7" strokeWidth={1.5} />
                </button>
                <button className="p-2">
                    <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <UserCircle className="w-6 h-6 text-gray-400" />
                    </div>
                </button>
            </div>

            {/* Mock iPhone Home Indicator */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>

        </motion.div>
    );
}
