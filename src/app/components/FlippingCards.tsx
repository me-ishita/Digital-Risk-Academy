"use client";
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, CheckCircle, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import speaker1 from '../../assets/Speaker1.jpeg';
import speaker2 from '../../assets/Speaker2.jpeg';
import speaker3 from '../../assets/Speaker3.jpeg';
const cards = [
    {
        id: 1,
        title: 'Paul L Young',
        icon: Shield,
        gradient: 'from-gray-600 via-gray-500 to-gray-700',
        imageFront: speaker1,

        points: [
            '30+ Years Banking Experience',
            'Bank of America Leadership',
            'JPMorgan Chase Expertise',
            'Global Financial Strategy',
            'Executive-Level Advisory'
        ],
        description:
            'Learn from a senior banking executive with over three decades of experience in investment banking, finance, risk, valuations, and regulatory strategy. Paul brings deep industry expertise from leadership roles across Bank of America and JPMorgan Chase, offering practical insights into global financial systems and executive-level banking.',
        experience: '30+ Years | Bank of America, JPMorgan Chase'
    },
    {
        id: 2,
        title: 'Devesh Mehta',
        icon: Sparkles,
        gradient: 'from-slate-600 via-slate-500 to-slate-700',
        imageFront: speaker2,

        points: [
            'Investment Banking Leader',
            'Nomura International (EMEA)',
            'Finance & Operations',
            'Strategic Transformation',
            'Governance & Leadership'
        ],
        description:
            'Gain direct exposure to global investment banking through Devesh’s extensive experience leading finance, operations, and strategic transformation across Nomura’s EMEA business. His expertise equips students with practical understanding of financial strategy, governance, and modern banking leadership.',
        experience: 'Nomura International | Investment Banking'
    },
    {
        id: 3,
        title: 'Terry Learmouth',
        icon: BarChart3,
        gradient: 'from-zinc-600 via-zinc-500 to-zinc-700',
        imageFront: speaker3,

        points: [
            '26 Years Tech Experience',
            'Nomura Technology Leadership',
            'Cloud Transformation',
            'Cyber Resilience',
            'Digital Banking Strategy'
        ],
        description:
            'Understand the technological infrastructure behind modern financial services through Terry’s extensive experience in enterprise technology, cyber resilience, cloud transformation, and operational strategy. His leadership in large-scale banking technology offers valuable insight into the future of digital finance.',
        experience: '26 Years | Technology & Digital Transformation'
    }
];

function FlippingCardsCarousel() {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFlipped((prev) => !prev);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid md:grid-cols-3 gap-10">
            {cards.map((card, index) => (
                <FlippingCard
                    key={card.id}
                    card={card}
                    index={index}
                    isFlipped={isFlipped}
                />
            ))}
        </div>
    );
}

function FlippingCard({
    card,
    index,
    isFlipped
}: {
    card: typeof cards[0];
    index: number;
    isFlipped: boolean;
}) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="perspective-1000 h-[520px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="relative w-full h-full transition-transform duration-700 transform-style-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
            >
                {/* FRONT FACE */}
                <div className="absolute inset-0 backface-hidden">
                    <div className="relative h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 group cursor-pointer">

                        <div className={`absolute inset-0 bg-linear-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                        <div className="relative h-full flex flex-col">

                            {/* IMAGE */}
                            <div className="h-85 w-full overflow-hidden">
                                <img
                                    src={card.imageFront}
                                    className="w-full h-full object-cover object-[center_10%]"
                                />
                                
                            </div>

                            {/* CONTENT */}
                            <div className="p-5 flex flex-col gap-3">

                                {/* ICON + TITLE */}
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${card.gradient} p-2`}>
                                        <card.icon className="w-full h-full text-white" />
                                    </div>

                                    <h3 className="text-3xl font-bold">
                                        <span className={`bg-linear-to-r ${card.gradient} bg-clip-text text-transparent`}>
                                            {card.title}
                                        </span>
                                    </h3>
                                </div>

                                {/* POINTS */}
                                <ul className="space-y-2 text-sm">
                                    {card.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                                            <CheckCircle className="w-4 h-4 mt-0.5" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                {/* BACK FACE */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className={`h-full bg-linear-to-br ${card.gradient} rounded-2xl shadow-2xl overflow-hidden text-white`}>

                        {/* CONTENT */}
                        <div className="p-6 flex flex-col h-full justify-center">

                            <h3 className="text-2xl font-semibold mb-4">
                                Experience & Expertise
                            </h3>

                            <p className="text-sm leading-relaxed">
                                {card.description}
                            </p>

                        </div>
                    </div>
                </div>

            </motion.div>
        </motion.div>
    );
}

export function FlippingCards() {
    return (
        <section className="py-10 bg-white">

            <div className="container mx-auto px-6">


                <FlippingCardsCarousel />
            </div>

            <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
        </section>
    );
}
