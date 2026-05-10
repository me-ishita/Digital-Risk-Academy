"use client";

import { useState } from "react";
import BrochureModal from "./BrochureModal";

export default function InfoBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="sticky top-0 z-[100] w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 border-b border-white/10 shadow-md">

                <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-2 md:grid-cols-5 gap-10 items-center text-white">

                    {/* START */}
                    <div className="md:border-r border-white/20 pr-10">
                        <p className="text-sm tracking-widest uppercase mb-1 text-white/70">
                            Starts On
                        </p>
                        <p className="text-lg font-semibold">
                            3 August 2026
                        </p>
                    </div>

                    {/* DURATION */}
                    <div className="md:border-r border-white/20 pr-10">
                        <p className="text-sm tracking-widest uppercase mb-1 text-white/70">
                            Duration
                        </p>
                        <p className="text-lg font-semibold">
                            4 Weeks
                        </p>
                        <p className="text-xs text-white/60">
                            Online & Live
                        </p>
                    </div>

                    {/* FEE */}
                    <div className="md:border-r border-white/20 pr-8">
                        <p className="text-sm tracking-widest uppercase mb-2 text-white/70">
                            Programme Fee
                        </p>

                        <p className="text-2xl font-bold tracking-tight">
                            £270
                        </p>

                        <p className="text-xs bg-blue-400/20 text-blue-200 px-3 py-1 rounded-full inline-block mt-1">
                            Early access offer • 25% off
                        </p>
                    </div>

                    {/* ELIGIBILITY */}
                    <div className="md:border-r border-white/20 pr-10">
                        <p className="text-sm tracking-widest uppercase mb-1 text-white/70">
                            Eligibility
                        </p>
                        <p className="text-lg font-semibold">
                          Students & Professionals
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="flex justify-end">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="bg-white text-blue-900 px-6 py-2.5 rounded-md text-xs font-semibold tracking-wide hover:bg-gray-100 transition"
                        >
                            DOWNLOAD BROCHURE
                        </button>
                    </div>

                </div>
            </div>

            {/* MODAL */}
            <BrochureModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}