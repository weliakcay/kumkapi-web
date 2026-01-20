'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// Animated Section Component
function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="overflow-hidden w-full">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/restaurant-interior-1.jpg"
            alt="Kumkapı Restaurant Interior"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient z-10" />

        {/* Blue glow effect */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-900/20" />

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
            Tradition trifft Moderne
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl leading-tight"
          >
            Das Feinste Seafood Erlebnis in Hamburg
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mb-10"
          >
            Genießen Sie frischen Fisch und authentische mediterrane Küche in einem eleganten Ambiente direkt am Hamburger Hafen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/menu" className="btn-outline">
              SPEISEKARTE
            </Link>
            <Link href="/reservation" className="btn-primary">
              JETZT BUCHEN
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
            >
              <motion.div className="w-1.5 h-3 bg-[#c5a059] rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Decorative Fish Icon */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-10 z-20 hidden lg:block opacity-30"
        >
          <svg width="80" height="40" viewBox="0 0 80 40" fill="none" className="text-[#c5a059]">
            <path d="M60 20c0 8-12 16-30 16S0 28 0 20 12 4 30 4s30 8 30 16z" fill="currentColor" opacity="0.3" />
            <path d="M80 20l-20-12v24l20-12z" fill="currentColor" opacity="0.3" />
          </svg>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <AnimatedSection>
              <div className="relative">
                <div className="gallery-image rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/restaurant-signage.jpg"
                    alt="Kumkapı Restaurant Signage"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
                {/* Decorative Frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#c5a059]/30 rounded-lg -z-10" />
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c5a059]/10 rounded-full blur-2xl" />
              </div>
            </AnimatedSection>

            {/* Right - Text */}
            <AnimatedSection delay={0.2}>
              <p className="script-text text-[#c5a059] text-2xl mb-4">
                Unsere Geschichte
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Eine Tradition der Exzellenz
              </h2>
              <div className="gold-border mb-8" />
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Seit über zwei Jahrzehnten servieren wir bei Kumkapı die feinsten Meeresfrüchte Hamburgs. Unsere Leidenschaft für Qualität und Authentizität hat uns zu einem der beliebtesten Fischrestaurants der Stadt gemacht.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Jeder Fisch wird täglich frisch ausgewählt, und unsere Köche bereiten ihn mit traditionellen mediterranen Rezepten zu, die von Generation zu Generation weitergegeben wurden.
              </p>
              <Link href="/menu" className="btn-primary inline-block">
                UNSERE SPEISEKARTE
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="script-text text-[#c5a059] text-2xl mb-4">
              Einblicke
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Unser Ambiente
            </h2>
            <div className="gold-border max-w-xs mx-auto" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/images/restaurant-interior-1.jpg', alt: 'Restaurant Interior' },
              { src: '/images/restaurant-interior-2.jpg', alt: 'Dining Area' },
              { src: '/images/restaurant-interior-3.jpg', alt: 'Ambiance' },
            ].map((image, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="gallery-image relative h-80 rounded-lg overflow-hidden shadow-xl cursor-pointer"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium">{image.alt}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="script-text text-[#c5a059] text-2xl mb-4">
              Unsere Spezialitäten
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Gerichte aus dem Meer
            </h2>
            <div className="gold-border max-w-xs mx-auto" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-lg overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/menu-decor-1.png"
                  alt="Seafood Platter"
                  width={600}
                  height={500}
                  className="w-full object-cover"
                />
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-lg overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/menu-decor-2.png"
                  alt="Grilled Fish"
                  width={600}
                  height={500}
                  className="w-full object-cover"
                />
              </motion.div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Link href="/menu" className="btn-primary">
              VOLLSTÄNDIGE SPEISEKARTE
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#c5a059]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#c5a059]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center">
            <p className="script-text text-[#c5a059] text-2xl mb-4">
              Reservieren Sie Heute
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Erleben Sie Kumkapı
            </h2>
            <div className="gold-border max-w-xs mx-auto mb-8" />
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Ob romantisches Dinner, Geschäftsessen oder Familienfeier – wir freuen uns darauf, Sie zu verwöhnen. Reservieren Sie jetzt Ihren Tisch und erleben Sie unvergessliche kulinarische Momente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/reservation" className="btn-primary">
                TISCH RESERVIEREN
              </Link>
              <Link href="/checkout" className="btn-outline">
                LIEFERUNG BESTELLEN
              </Link>
            </div>
          </AnimatedSection>

          {/* Contact Info Cards */}
          <AnimatedSection delay={0.3} className="grid md:grid-cols-3 gap-6 mt-16">
            <motion.div
              whileHover={{ y: -5, borderColor: '#c5a059' }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-[#c5a059]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#c5a059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Adresse</h4>
              <p className="text-white/60 text-sm">
                Luruper Hauptstraße 103<br />
                22547 Hamburg
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, borderColor: '#c5a059' }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-[#c5a059]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#c5a059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Öffnungszeiten</h4>
              <p className="text-white/60 text-sm">
                Mo-Fr: 12:00 - 23:00<br />
                Sa-So: 12:00 - 00:00
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, borderColor: '#c5a059' }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-[#c5a059]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#c5a059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Kontakt</h4>
              <p className="text-white/60 text-sm">
                +49 40 18034218<br />
                info@kumkapi.de
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
