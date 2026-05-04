import { motion } from 'motion/react';
import { Link } from "react-router-dom";
import { Target, Users, Globe, Award, TrendingUp, BookOpen, Briefcase, Shield, CheckCircle, Building2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import brandLogo from "@/assets/b402c8efd70b38e0d5cb2eef9fe01649b01c6575.png";

export function About() {
    const [activeSlide, setActiveSlide] = useState(0);

    const values = [
        {
            icon: Award,
            title: 'Excellence',
            description: 'Delivering world-class education grounded in industry best practices and global standards',
        },
        {
            icon: Globe,
            title: 'Accessibility',
            description: 'Making professional education available to aspiring leaders worldwide',
        },
        {
            icon: Target,
            title: 'Relevance',
            description: 'Bridging academia and industry with practical, real-world applications',
        },
        {
            icon: Users,
            title: 'Community',
            description: 'Building a global network of digital risk and governance professionals',
        },
    ];

    const educationalApproach = [
        {
            step: 'Industry-Led Programs',
            description: 'Curriculum designed by practitioners and thought leaders',
            icon: Briefcase,
        },
        {
            step: 'Expert Mentorship',
            description: 'Guidance from seasoned professionals in financial governance',
            icon: Users,
        },
        {
            step: 'Global Frameworks',
            description: 'Aligned with international regulatory and compliance standards',
            icon: Globe,
        },
        {
            step: 'Career Pathways',
            description: 'Direct routes to roles in leading institutions and enterprises',
            icon: TrendingUp,
        },
    ];

    const competencyAreas = [
        'Digital Risk Management',
        'Financial Governance',
        'Regulatory Compliance',
        'Strategic Decision-Making',
        'Risk Analytics',
        'Cybersecurity Frameworks',
        'Data Privacy & Protection',
        'Financial Crime Prevention',
    ];

    const slides = [
        {
            image: 'https://images.unsplash.com/photo-1769034432267-0fd4a01d839f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3Nzg4MTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
            title: 'Collaborative Learning',
        },
        {
            image: 'https://images.unsplash.com/photo-1758270704296-a59b8f4e7dda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3Nzg4MTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
            title: 'Expert-Led Sessions',
        },
        {
            image: 'https://images.unsplash.com/photo-1758691737182-d42aefd6dee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxwcm9mZXNzaW9uYWwlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3Nzg4MTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
            title: 'Professional Development',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="min-h-screen pt-20">

            <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDRjMCAyLjIxLTEuNzkgNC00IDRzLTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        {/* 🔷 Logo */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                            className="inline-block mb-5"
                        >
                            <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                                <img
                                    src={brandLogo}
                                    alt="Digital Risk Academy"
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                        </motion.div>

                        {/* 🔷 Heading */}
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            About Us
                        </h1>

                        {/* 🔷 Subheading (same as you wanted) */}
                        <p className="text-lg md:text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
                            Shaping the Next Generation of Leaders in Digital Risk, Financial Governance, Compliance and Strategic Decision-Making
                        </p>
                    </motion.div>
                </div>
            </section>
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                Our Purpose
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Digital Risk Academy is a purpose-driven institution dedicated to shaping the next generation of leaders in digital risk, financial governance, compliance, and strategic decision-making.
                                </p>
                                <p>
                                    Built at the intersection of industry expertise and future-focused education, we equip aspiring professionals with the practical knowledge, analytical mindset, and global perspective required to navigate today's rapidly evolving financial and digital ecosystems.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <ImageWithFallback
                                src={slides[activeSlide].image}
                                alt={slides[activeSlide].title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent p-6">
                                <p className="text-white text-lg font-semibold">{slides[activeSlide].title}</p>
                                <div className="flex gap-2 mt-4">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveSlide(index)}
                                            className={`h-1.5 rounded-full transition-all ${index === activeSlide ? 'w-8 bg-amber-400' : 'w-1.5 bg-white/50'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1758691736490-03d39c292d7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5JTIwcHJvZmVzc2lvbmFsJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzc3ODgxNzc0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Professional training"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Bridging the Gap
                            </h2>
                            <div className="space-y-4 text-lg text-amber-100 leading-relaxed">
                                <p>
                                    Our approach is grounded in excellence, accessibility, and real-world relevance—bridging the gap between academic learning and professional execution.
                                </p>
                                <p>
                                    Through industry-led programs, expert mentorship, and globally aligned frameworks, Digital Risk Academy empowers individuals to develop the competencies demanded by leading financial institutions, regulatory bodies, and multinational enterprises.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            The principles that drive our commitment to excellence in professional education
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="bg-card rounded-xl p-8 border border-border shadow-lg hover:shadow-2xl transition-all"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                                        <Icon size={32} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-amber-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Our Educational Approach
                        </h2>
                        <p className="text-lg text-amber-100 max-w-3xl mx-auto">
                            A comprehensive framework designed to transform potential into leadership
                        </p>
                    </motion.div>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 -translate-y-1/2" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                            {educationalApproach.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                        className="relative"
                                    >
                                        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-amber-500/30 shadow-xl hover:shadow-2xl transition-all h-full">
                                            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                                                <Icon size={32} className="text-white" />
                                            </div>
                                            <div className="absolute -top-3 -right-3 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                                {index + 1}
                                            </div>
                                            <h4 className="text-lg font-semibold text-center mb-3">{item.step}</h4>
                                            <p className="text-sm text-amber-100 text-center">{item.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Competency Areas
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Develop expertise across critical domains in digital risk and financial governance
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {competencyAreas.map((area, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-card rounded-xl p-6 border border-border hover:border-amber-500 transition-all shadow-lg text-center group"
                            >
                                <CheckCircle size={24} className="text-amber-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <p className="font-semibold text-foreground">{area}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-br from-amber-900 via-gray-900 to-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Transforming Education
                            </h2>
                            <div className="space-y-4 text-lg text-amber-100 leading-relaxed">
                                <p>
                                    We are committed to fostering a new standard of professional education—one that is rigorous, inclusive, and designed to create meaningful career pathways in sectors where trust, resilience, and innovation define success.
                                </p>
                                <p className="text-xl font-semibold text-white">
                                    At Digital Risk Academy, we believe education is not only about knowledge acquisition, but about transforming potential into leadership.
                                </p>
                            </div>

                            <div className="mt-8 space-y-4">
                                {[
                                    'Industry-recognized certifications',
                                    'Lifetime access to learning resources',
                                    'Global alumni network',
                                    'Career support and placement assistance',
                                ].map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle size={24} className="text-amber-400 flex-shrink-0" />
                                        <p className="text-white">{benefit}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1764173039056-3cc602fef942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwbWVudG9yc2hpcCUyMGJ1c2luZXNzJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Nzg4MTc3NXww&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Leadership mentorship"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Corporate Information
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Proudly registered as a Community Interest Company
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-12 border border-amber-200 shadow-xl"
                    >
                        <div className="flex items-center justify-center mb-8">
                            <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                                <Building2 size={36} className="text-white" />
                            </div>
                        </div>

                        <h3 className="text-3xl font-bold text-center text-foreground mb-8">
                            DIGITAL RISK ACADEMY CIC
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Company Number</p>
                                    <p className="text-xl font-semibold text-foreground">17006899</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Registered Office</p>
                                    <p className="text-xl font-semibold text-foreground">London, England</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Company Status</p>
                                    <p className="text-xl font-semibold text-green-600 flex items-center gap-2">
                                        <span className="w-3 h-3 bg-green-600 rounded-full animate-pulse" />
                                        Active
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Incorporated On</p>
                                    <p className="text-xl font-semibold text-foreground">2 February 2026</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-white rounded-xl border border-amber-200">
                            <p className="text-sm text-muted-foreground mb-2">Company Type</p>
                            <p className="text-lg font-semibold text-foreground leading-relaxed">
                                Private company limited by guarantee without share capital<br />
                                <span className="text-amber-600">Community Interest Company (CIC)</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Begin Your Journey
                        </h2>
                        <p className="text-xl text-amber-100 mb-10 leading-relaxed">
                            Join a community of professionals committed to excellence in digital risk and financial governance
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/programs">
                                <button className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2">
                                    <BookOpen size={24} />
                                    Explore Programmes
                                </button>
                            </Link>

                            <Link to="/register">
                                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full transition-all border border-white/30 hover:border-white/50 inline-flex items-center justify-center gap-2">
                                    <Users size={24} />
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
