'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import MenuSection from '@/components/MenuSection';
import { menuData } from '@/menu-data';

export default function MenuPage() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const menuSections = [
        { key: 'soups', data: menuData.soups },
        { key: 'salads', data: menuData.salads },
        { key: 'coldAppetizers', data: menuData.coldAppetizers },
        { key: 'hotAppetizers', data: menuData.hotAppetizers },
        { key: 'pasta', data: menuData.pasta },
        { key: 'fish', data: menuData.fish },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] w-full">
            {/* Hero Section */}
            <section ref={heroRef} className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                {/* Background Image */}
                <motion.div
                    style={{ y: heroY }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/images/seafood-platter.jpg"
                        alt="Seafood Platter"
                        fill
                        priority
                        className="object-cover"
                    />
                </motion.div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a] z-10" />

                {/* Blue glow effect on sides */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-900/30 via-transparent to-blue-900/30" />

                {/* Hero Content */}
                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="script-text text-[#c5a059] text-3xl md:text-4xl mb-4"
                    >
                        Fine Seafood
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider"
                    >
                        THE MENU
                    </motion.h1>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="gold-border w-32 mt-6"
                    />
                </motion.div>
            </section>

            {/* Menu Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="script-text text-[#c5a059] text-2xl mb-2">
                            Ocean to Table
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wider">
                            MAIN MENU
                        </h2>
                        <div className="gold-border max-w-xs mx-auto mt-4" />
                    </motion.div>

                    {/* Menu Sections */}
                    {menuSections.map((section, index) => (
                        <MenuSection
                            key={section.key}
                            title={section.data.title}
                            items={section.data.items}
                            index={index}
                        />
                    ))}

                    {/* Add to cart notification hint */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mt-12 p-6 bg-[#141414] rounded-lg border border-[#2a2a2a]"
                    >
                        <p className="text-white/60 text-sm">
                            <span className="text-[#c5a059]">Tipp:</span> Bewegen Sie den Mauszeiger über ein Gericht und klicken Sie auf das
                            <span className="inline-flex items-center justify-center w-6 h-6 mx-1 rounded-full bg-[#c5a059]/20 text-[#c5a059] text-xs">+</span>
                            Symbol, um es zu Ihrer Bestellung hinzuzufügen.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Decorative Images Section */}
            <section className="py-16 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative rounded-lg overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/grilled-fish-main.jpg"
                                alt="Grilled Fish"
                                width={500}
                                height={400}
                                className="w-full object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-center"
                        >
                            <p className="script-text text-[#c5a059] text-2xl mb-4">
                                Frisch & Authentisch
                            </p>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Täglich Frischer Fang
                            </h3>
                            <p className="text-white/60 leading-relaxed">
                                Jeder Fisch, den wir servieren, wird sorgfältig von unseren erfahrenen
                                Köchen ausgewählt und mit traditionellen mediterranen Rezepten zubereitet.
                                Wir garantieren Frische und Qualität in jedem Bissen.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
