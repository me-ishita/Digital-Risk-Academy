"use client";
import { motion } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";
import { useRef } from "react";
import { BarChart3, Shield, Brain, Briefcase, Users, Globe } from "lucide-react";
import {
    Video,
    FileText,
    Layers,
    CheckCircle,
    Wallet2,
    Download,
    ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import MediaPlayer from "../../components/MediaPlayer";
import BrochureModal from "@/app/components/BrochureModal";
import InfoBar from "@/app/components/InfoBar";
import Speaker1 from "@/assets/Speaker1.jpeg";
import Speaker2 from "@/assets/Speaker2.jpeg";
import Speaker3 from "@/assets/Speaker3.jpeg";
import Speaker4 from "@/assets/Speaker4.jpeg";


const faculty: Faculty[] = [
    {
        name: "Devesh Mehta",
        role: "Ex-EMEA CFO & CAO, Nomura International",
        image: Speaker1,
        short:
            "Ex-Nomura executive with expertise in finance, operations, and strategic transformation.",
        full:
            "Gain practical investment banking knowledge from a former Nomura executive who led finance, operations, and strategic transformation across EMEA. Devesh offers first-hand expertise in banking structures, financial strategy, governance, and executive leadership within one of the world’s leading financial institutions.",
    },
    {
        name: "Paul Young",
        role: "Ex-CFO, Bank of America Europe/US | Ex-Managing Director, JPMorgan Chase",
        image: Speaker2,
        short:
            "Senior banking executive with 30+ years of leadership across global financial institutions.",
        full:
            "Learn directly from a senior banking executive with over 30 years of leadership across Bank of America and JPMorgan Chase. Paul brings deep expertise in investment banking, finance, risk, valuations, and regulatory strategy—offering students real-world insights into global banking leadership and high-level financial decision-making.",
    },
    {
        name: "Melissa Dembrosky",
        role: "Ex-Managing Director – Head of Programme Delivery, Cloud and Modernization (CIB), J.P. Morgan",
        image: Speaker4,
        short:
            "Senior J.P. Morgan executive with expertise in technology transformation, cloud modernization, and investment banking systems.",
        full:
            "Learn from a senior J.P. Morgan executive with extensive experience leading large-scale technology transformation across global investment banking. Melissa brings deep expertise in markets technology, cloud modernization, front-office systems, regulatory transformation, and enterprise-scale programme delivery—offering students valuable insight into the operational and technological frameworks that power modern investment banking."
    },
    {
        name: "Terry Learmouth",
        role: "Ex-Co-Group Technology Officer & Wholesale CIO EMEA, Nomura",
        image: Speaker3,
        short:
            "Technology leader with 26+ years in enterprise systems, cyber resilience, and banking tech.",
        full:
            "Understand the digital backbone of modern investment banking from a senior Nomura technology leader with nearly 26 years of experience. Terry specializes in enterprise technology, cyber resilience, cloud transformation, and operational strategy—bringing critical insight into the systems powering global financial markets.",
    },

];
type Faculty = {
    name: string;
    role: string;
    image: any;
    short: string;
    full: string;
};

export default function InvestmentBankingProgram() {
    const [openModal, setOpenModal] = useState(false);
    const [selected, setSelected] = useState<Faculty | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const scroll = (direction: "left" | "right") => {
        const container = sliderRef.current;
        if (!container) return;

        const card = container.querySelector(".card") as HTMLElement;
        if (!card) return;

        const gap = 24; // gap-6 = 24px
        const scrollAmount = (card.offsetWidth + gap) * 2; // move 2 cards exactly

        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div className="pt-20 relative">
            {/* Back Button */}
            <div className="absolute top-6 left-4 z-50">
                <Link
                    to="/programs"
                    className="flex items-center justify-center w-10 h-10 bg-slate-900/50 backdrop-blur-md border border-slate-800 text-slate-300 rounded-full hover:text-white hover:border-slate-700 transition-all shadow-lg"
                    aria-label="Back to Academy"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
            </div>

            {/* ================= HERO SECTION ================= */}
            <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-900 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 bg-slate-950">
                    <img
                        src="https://images.unsplash.com/photo-1707761918029-1295034aa31e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGludmVzdG1lbnR8ZW58MHx8MHx8fDA%3D"
                        alt=""
                        loading="eager"
                        className="w-full h-full object-cover opacity-60"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
                </div>
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                        {/* Left Column - Content */}
                        <div className="max-w-2xl">
                            <span className="text-orange-400 text-xs sm:text-sm tracking-widest uppercase">
                                Digital Risk Academy • June Cohort
                            </span>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
                                Investment Banking &{" "}
                                <span className="bg-gradient-to-r from-orange-400 via-white to-blue-500 bg-clip-text text-transparent">
                                    Digital Risk Programme
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8">
                                A 4-week practitioner-led programme designed to bridge the gap between academic learning and real-world investment banking and risk roles.
                            </p>

                            {/* Pricing */}
                            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                                <span className="text-lg sm:text-2xl text-slate-400 line-through">
                                    £500
                                </span>
                                <span className="text-3xl sm:text-4xl font-bold text-orange-400">
                                    £375
                                </span>
                                <span className="text-xs sm:text-sm bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
                                    Early access offer • 25% off
                                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    to="/register"
                                    className="inline-block w-full sm:w-auto text-center min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-orange-500/40 active:scale-[0.99] transition"
                                >
                                    Register Now
                                </Link>


                            </div>
                        </div>

                        {/* Right Column - Media Player */}
                        <div className="flex justify-center lg:justify-end lg:pl-6 w-full">
                            <div className="w-full max-w-[600px] lg:max-w-[720px]">
                                <MediaPlayer
                                    videoSrc="/images/0417(1).mp4"
                                    title="Programme Overview"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <InfoBar />
            <div className="h-[80px]" />

            <section className="bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* HEADER */}
                    <div className="mb-12">
                        <h1 className="text-3xl font-semibold mb-4">
                            Investment Banking Programme
                        </h1>
                        <h2 className="text-3xl font-semibold text-slate-900 mb-3 text-center">
                            Programme Overview
                        </h2>
                        <p className="text-gray-600 leading-relaxed max-w-3xl items-center mx-auto">
                            A one-month, practitioner-led programme designed for ambitious students
                            and early-career professionals. Delivered by industry experts from UK
                            investment banking and digital risk domains, this programme bridges the
                            gap between academic knowledge and real-world financial expertise.
                        </p>
                        <p className="text-gray-600 leading-relaxed max-w-3xl mt-4 items-center mx-auto">
                            Through live sessions, simulations, and mentorship, participants gain
                            hands-on exposure to the tools, strategies, and thinking patterns used
                            by modern investment bankers.
                        </p>
                    </div>

                    {/* WHAT YOU WILL LEARN */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-8 text-slate-950 text-center">
                            What You Will Learn
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">

                            {/* CARD 1 */}
                            <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition">
                                <h3 className="font-semibold text-lg mb-3 text-slate-900">
                                    Investment Banking Fundamentals
                                </h3>
                                <ul className="text-gray-600 text-sm space-y-2">
                                    <li>• Structure of financial markets and instruments</li>
                                    <li>• Role and functions of investment banks</li>
                                    <li>• Deal lifecycle and capital raising processes</li>
                                </ul>
                            </div>

                            {/* CARD 2 */}
                            <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition">
                                <h3 className="font-semibold text-lg mb-3 text-slate-900 ">
                                    Mergers & Acquisitions and Valuation
                                </h3>
                                <ul className="text-gray-600 text-sm space-y-2">
                                    <li>• Discounted Cash Flow (DCF) modelling</li>
                                    <li>• Comparable and precedent transaction analysis</li>
                                    <li>• M&A deal structuring fundamentals</li>
                                </ul>
                            </div>

                            {/* CARD 3 */}
                            <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition">
                                <h3 className="font-semibold text-lg mb-3 text-slate-900">
                                    Governance, Risk & Compliance (GRC)
                                </h3>
                                <ul className="text-gray-600 text-sm space-y-2">
                                    <li>• Global regulatory frameworks and standards</li>
                                    <li>• Financial governance practices</li>
                                    <li>• Risk identification and compliance strategies</li>
                                </ul>
                            </div>

                            {/* CARD 4 */}
                            <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition">
                                <h3 className="font-semibold text-lg mb-3 text-slate-900">
                                    AI in Financial Services
                                </h3>
                                <ul className="text-gray-600 text-sm space-y-2">
                                    <li>• AI applications in banking and finance</li>
                                    <li>• Fraud detection and predictive analytics</li>
                                    <li>• Algorithmic decision-making and automation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-white px-6">
                <div className="max-w-6xl mx-auto">

                    {/* WHO IS THIS FOR - SINGLE BOX */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-semibold mb-8 text-slate-900 text-center">
                            Who Is This Programme For?
                        </h2>

                        <div className="border border-gray-200 rounded-xl p-7 bg-white hover:shadow-sm transition max-w-4xl mx-auto">

                            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-5 text-sm text-gray-700">

                                <li className="flex items-start gap-3">
                                    <span className="text-slate-700 mt-1">▸</span>
                                    Students in finance, business, or economics aiming to build careers in investment banking
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="text-slate-700 mt-1">▸</span>
                                    Early-career professionals seeking entry into investment banking roles
                                </li>
                            </ul>

                        </div>
                    </div>

                    {/* PROGRAMME HIGHLIGHTS */}
                    <section className="bg-gray-50 py-20 px-6">
                        <div className="max-w-6xl mx-auto text-center">

                            {/* HEADING */}
                            <h2 className="text-3xl font-semibold text-slate-900 mb-14">
                                Programme highlights
                            </h2>

                            {/* GRID */}
                            <div className="grid md:grid-cols-3 gap-y-12">

                                {/* ITEM */}
                                <div className="px-6 md:border-r border-gray-200">
                                    <div className="flex justify-center mb-4">
                                        <svg className="h-8 w-8 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                                            <rect x="3" y="4" width="18" height="12" rx="2" />
                                            <path d="M8 20h8M12 16v4" />
                                        </svg>
                                    </div>
                                    <h3 className="font-medium text-slate-900 mb-2">
                                        Live interactive classes
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Learn directly from industry experts through live sessions designed
                                        to simulate real investment banking environments.
                                    </p>
                                </div>

                                {/* ITEM */}
                                <div className="px-6 md:border-r border-gray-200">
                                    <div className="flex justify-center mb-4">
                                        <svg className="h-8 w-8 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                                            <path d="M4 19V5M10 19V9M16 19V13M22 19H2" />
                                        </svg>
                                    </div>
                                    <h3 className="font-medium text-slate-900 mb-2">
                                        Real-world case studies
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Analyze global banking scenarios and real M&A deals to understand
                                        practical decision-making.
                                    </p>
                                </div>

                                {/* ITEM */}
                                <div className="px-6">
                                    <div className="flex justify-center mb-4">
                                        <svg className="h-8 w-8 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                                            <path d="M16 11c1.66 0 3-1.79 3-4s-1.34-4-3-4-3 1.79-3 4 1.34 4 3 4z" />
                                            <path d="M8 11c1.66 0 3-1.79 3-4S9.66 3 8 3 5 4.79 5 7s1.34 4 3 4z" />
                                            <path d="M2 21c0-3 3-5 6-5M22 21c0-3-3-5-6-5" />
                                        </svg>
                                    </div>
                                    <h3 className="font-medium text-slate-900 mb-2">
                                        Mentorship & guidance
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Receive personalised career guidance and insights from experienced
                                        finance professionals.
                                    </p>
                                </div>

                                {/* ROW 2 */}

                                <div className="px-6 md:border-r border-gray-200 md:mt-12">
                                    <div className="flex justify-center mb-4">
                                        <svg className="h-8 w-8 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-6-3.46a2 2 0 0 0-2 0l-6 3.46A2 2 0 0 0 5 8v8a2 2 0 0 0 1 1.73l6 3.46a2 2 0 0 0 2 0l6-3.46A2 2 0 0 0 21 16z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-medium text-slate-900 mb-2">
                                        Simulations & projects
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Work on hands-on simulations and projects that reflect real
                                        investment banking workflows.
                                    </p>
                                </div>

                                <div className="px-6 md:border-r border-gray-200 md:mt-12">
                                    <div className="flex justify-center mb-4">
                                        <svg className="h-8 w-8 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
                                        </svg>
                                    </div>
                                    <h3 className="font-medium text-slate-900 mb-2">
                                        Global exposure
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Gain insights into UK and international financial markets and
                                        industry practices.
                                    </p>
                                </div>

                                <div className="px-6 md:mt-12">
                                    <div className="flex justify-center mb-4">
                                        <svg className="h-8 w-8 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                                            <rect x="4" y="3" width="16" height="18" rx="2" />
                                            <path d="M8 7h8M8 11h8M8 15h5" />
                                        </svg>
                                    </div>
                                    <h3 className="font-medium text-slate-900 mb-2">
                                        Certificate of completion
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Earn a recognised certificate validating your investment banking
                                        expertise.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* EXECUTIVE STRATEGY + IMMERSIVE LEARNING */}
                    <section className="bg-white py-20 px-6">
                        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                            {/* LEFT IMAGE */}
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
                                    alt="strategy"
                                    className="rounded-lg w-full object-cover"
                                />
                            </div>

                            {/* RIGHT CONTENT */}
                            <div>
                                <h2 className="text-3xl font-semibold text-slate-900 mb-6">
                                    Executive strategy activities
                                </h2>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Throughout the Investment Banking Programme, you will apply core financial
                                    concepts through a series of practical simulations, strategic exercises,
                                    and guided projects. These activities are designed to bridge theory with
                                    execution—developing both technical expertise and leadership capabilities
                                    required in modern financial environments.
                                </p>

                                {/* ITEM 1 */}
                                <div className="flex items-start gap-3 mb-5">
                                    <div className="mt-1">
                                        <div className="h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center">
                                            <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-slate-900 mb-1">
                                            Investment pitch simulations
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Develop and present investment strategies by analysing financial data,
                                            evaluating opportunities, and pitching to simulated stakeholders.
                                        </p>
                                    </div>
                                </div>

                                {/* ITEM 2 */}
                                <div className="flex items-start gap-3 mb-5">
                                    <div className="mt-1">
                                        <div className="h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center">
                                            <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-slate-900 mb-1">
                                            M&A deal negotiation roleplays
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Participate in structured deal-making scenarios, focusing on valuation,
                                            negotiation tactics, and stakeholder alignment.
                                        </p>
                                    </div>
                                </div>

                                {/* ITEM 3 */}
                                <div className="flex items-start gap-3 mb-5">
                                    <div className="mt-1">
                                        <div className="h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center">
                                            <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-slate-900 mb-1">
                                            Risk assessment frameworks
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Apply structured risk models to evaluate financial, operational,
                                            and regulatory challenges across different scenarios.
                                        </p>
                                    </div>
                                </div>

                                {/* ITEM 4 */}
                                <div className="flex items-start gap-3">
                                    <div className="mt-1">
                                        <div className="h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center">
                                            <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-slate-900 mb-1">
                                            Portfolio strategy building
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Design diversified portfolio strategies by balancing risk, return,
                                            and market conditions using real-world financial insights.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        {/* DIVIDER */}
                        <div className="border-t border-gray-200 my-16"></div>

                        {/* IMMERSIVE LEARNING (INLINE, NOT NEW SECTION) */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">

                            {/* LEFT CONTENT */}
                            <div>
                                <h2 className="text-3xl font-semibold text-slate-900 mb-5">
                                    Immersive learning
                                </h2>

                                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                    Experience a practical and engaging learning journey that goes beyond
                                    traditional classroom methods through live sessions, collaboration,
                                    and real-world applications. You will:
                                </p>

                                {/* POINTS */}
                                <div className="space-y-4">

                                    {/* ITEM */}
                                    <div className="flex items-start gap-3">
                                        <svg className="h-4 w-4 text-gray-500 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            <span className="font-medium text-slate-900">
                                                Engage with global peers, guest speakers and faculty
                                            </span>{" "}
                                            to gain diverse perspectives and deeper industry insights
                                        </p>
                                    </div>

                                    {/* ITEM */}
                                    <div className="flex items-start gap-3">
                                        <svg className="h-4 w-4 text-gray-500 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            <span className="font-medium text-slate-900">
                                                Collaborate with cohort members
                                            </span>{" "}
                                            to exchange ideas and strengthen learning through peer interaction
                                        </p>
                                    </div>

                                    {/* ITEM */}
                                    <div className="flex items-start gap-3">
                                        <svg className="h-4 w-4 text-gray-500 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            <span className="font-medium text-slate-900">
                                                Apply programme concepts
                                            </span>{" "}
                                            through simulations and strategic exercises to build practical capabilities
                                        </p>
                                    </div>

                                    {/* ITEM */}
                                    <div className="flex items-start gap-3">
                                        <svg className="h-4 w-4 text-gray-500 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            <span className="font-medium text-slate-900">
                                                Receive guidance from mentors
                                            </span>{" "}
                                            to align your learning journey with career goals
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                                    alt="immersive learning"
                                    className="rounded-lg w-full object-cover"
                                />
                            </div>

                        </div>
                    </section>

                    <section className="bg-gray-50 py-20 px-6">
                        <div className="max-w-6xl mx-auto">

                            {/* HEADING */}
                            <div className="text-center mb-14">
                                <h2 className="text-3xl font-semibold text-slate-900 mb-4">
                                    Meet our Speakers
                                </h2>
                                <p className="text-sm text-gray-600 max-w-3xl mx-auto">
                                    Learn from experienced industry leaders who bring deep expertise
                                    and real-world insights into every session.
                                </p>
                            </div>

                            {/* SPEAKERS SLIDER */}
                            <div className="relative group">

                                {/* LEFT ARROW */}
                                <button
                                    onClick={() => scroll("left")}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-9 h-9 flex items-center justify-center text-gray-600 text-lg shadow-sm opacity-0 group-hover:opacity-100 transition"
                                >
                                    ‹
                                </button>

                                {/* RIGHT ARROW */}
                                <button
                                    onClick={() => scroll("right")}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-9 h-9 flex items-center justify-center text-gray-600 text-lg shadow-sm opacity-0 group-hover:opacity-100 transition"
                                >
                                    ›
                                </button>

                                {/* SLIDER */}
                                <div
                                    ref={sliderRef}
                                    className="overflow-x-auto scrollbar-hide"
                                >
                                    <div className="flex gap-6 snap-x snap-mandatory px-8">

                                        {faculty.map((item, i) => (
                                            <div
                                                key={i}
                                                className="min-w-[85%] md:min-w-[48%] snap-start flex items-start gap-5 border border-gray-200 rounded-xl p-5 bg-white hover:shadow-sm transition"
                                            >

                                                {/* IMAGE */}
                                                <img
                                                    src={item.image?.src || item.image}
                                                    alt={item.name}
                                                    className="h-16 w-16 rounded-full object-cover flex-shrink-0"
                                                />

                                                {/* CONTENT */}
                                                <div>
                                                    <h3 className="text-sm font-semibold text-slate-900">
                                                        {item.name}
                                                    </h3>

                                                    <p className="text-xs text-gray-700 mb-2 leading-snug">
                                                        {item.role}
                                                    </p>

                                                    <p className="text-xs text-gray-600 line-clamp-3">
                                                        {item.short}
                                                    </p>

                                                    <button
                                                        onClick={() => setSelected(item)}
                                                        className="text-xs text-blue-700 mt-2 hover:underline"
                                                    >
                                                        More info
                                                    </button>
                                                </div>

                                            </div>
                                        ))}

                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* MODAL */}
                        {selected && (
                            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                                <div className="bg-white max-w-2xl w-full rounded-lg p-8 relative">

                                    {/* CLOSE */}
                                    <button
                                        onClick={() => setSelected(null)}
                                        className="absolute top-4 right-4 text-gray-500 hover:text-black"
                                    >
                                        ✕
                                    </button>
                                    {/* IMAGE */}
                                    <div className="flex justify-center mb-4">
                                        <img
                                            src={selected.image?.src || selected.image}
                                            alt={selected.name}
                                            className="h-24 w-24 rounded-full object-cover"
                                        />
                                    </div>

                                    {/* TEXT */}
                                    <div className="text-center">
                                        <h3 className="text-lg font-semibold text-slate-900">
                                            {selected.name}
                                        </h3>
                                        <p className="text-sm text-gray-700 mb-4">
                                            {selected.role}
                                        </p>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {selected.full}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        )}
                    </section>



                    {/* CERTIFICATE */}

                    <section className="w-full bg-white py-16">
                        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                                    Certificate
                                </h2>

                                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                    Upon successful completion of this programme, you will receive a
                                    verified digital certificate of completion via email from
                                    <span className="font-semibold"> Digital Risk Academy</span>.
                                </p>

                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    You will also gain recognition as part of our professional network,
                                    helping strengthen your career credibility and industry presence.
                                </p>                            
                            </div>
                            
                            {/* RIGHT CERTIFICATE */}

                            <div className="flex justify-center">
                                <div className="relative w-[340px] md:w-[400px] h-[540px] bg-[#f8f8f8] border border-gray-300 shadow-xl px-6 py-6">

                                    {/* HEADER */}
                                    <div className="mb-4">
                                        <p className="text-indigo-900 text-lg tracking-[0.3em] font-bold">
                                            DIGITAL RISK ACADEMY
                                        </p>
                                    </div>

                                    {/* TOP LINE */}
                                    <div className="border-t border-indigo-400 mb-4"></div>

                                    {/* CONTENT GRID */}
                                    <div className="grid grid-cols-[20px_1fr] h-[380px]">

                                        {/* LEFT VERTICAL LINE */}
                                        <div className="border-r border-indigo-400"></div>

                                        {/* RIGHT CONTENT */}
                                        <div className="pl-6 flex flex-col justify-between">

                                            {/* TOP CONTENT */}
                                            <div>
                                                <h3 className="text-indigo-700 font-semibold text-lg mb-10">
                                                    Certificate of Completion
                                                </h3>

                                                <p className="text-2xl font-semibold text-gray-900 mb-2 text-left">
                                                    Your Name
                                                </p>

                                                <p className="text-sm text-gray-600 text-left mb-6">
                                                    has successfully completed the <br />
                                                    Executive Education Programme
                                                </p>

                                                <p className="text-sm font-medium text-gray-800 text-left">
                                                    Investment Banking Programme
                                                </p>

                                                <p className="text-xs text-gray-500 text-left">
                                                    Month Year
                                                </p>
                                            </div>

                                            {/* SIGNATURES */}
                                            <div className="flex justify-between text-[10px] text-gray-600 mt-6">

                                                <div>
                                                    <p className="font-semibold">Programme Faculty</p>
                                                </div>

                                                <div className="text-right">
                                                    <p className="font-semibold">Academic Lead</p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    {/* BOTTOM LINE */}
                                    <div className="border-t border-indigo-400 mt-4"></div>

                                    {/* FOOTER */}
                                    <div className="flex justify-between items-center text-[10px] text-gray-500 mt-3">
                                        <span>Digital Risk Academy</span>
                                        <span>digitalrisk.academy</span>
                                    </div>

                                    {/* WATERMARK */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <span className="text-gray-300 text-6xl font-bold rotate-[-30deg] opacity-20 tracking-widest">
                                            SAMPLE
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </section>
            <section className="w-full bg-[#f5f6f8] py-8">
                <div className="max-w-4xl mx-auto px-6 text-center">

                    {/* TITLE */}
                    <h2 className="text-3xl md:text-3xl font-semibold text-gray-800 mb-4">
                        Application Details
                    </h2>

                    {/* SUBTEXT */}
                    <p className="text-gray-600 text-lg mb-10">
                        The current tuition fee benefit is available as displayed below.
                        The full programme fee is{" "}
                        <span className="font-semibold">£500</span> as of the start date.
                    </p>

                    {/* CARD */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">

                        {/* TOP STRIP */}
                        <div className="bg-gray-700 text-white text-lg font-semibold py-3 tracking-wide">
                            SAVE 25%
                        </div>

                        {/* CONTENT */}
                        <div className="py-10 px-6">

                            <p className="text-gray-500 text-sm tracking-widest uppercase mb-3">
                                Programme Fee
                            </p>

                            <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                £375
                            </p>

                            <p className="text-gray-600 text-base">
                                Pay by{" "}
                                <span className="font-medium text-gray-800">
                                    10 May 2026
                                </span>{" "}
                                at 11:59 PM
                            </p>
                            <div className="mt-10 flex justify-center">
                                <Link
                                    to="/register"
                                    className="inline-flex items-center gap-2 whitespace-nowrap bg-gray-700 text-white px-8 py-3.5 rounded-md text-base font-semibold tracking-wide hover:bg-indigo-900 transition shadow-md"
                                >
                                    <Wallet2 className="w-4 h-4" />
                                    Pay and Enroll
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>

    );
}
