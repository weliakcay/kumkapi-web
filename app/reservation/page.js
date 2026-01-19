'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function ReservationPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        guests: 2,
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        occasion: '',
        notes: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const timeSlots = [
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
    ];

    const occasions = [
        { value: '', label: 'Kein besonderer Anlass' },
        { value: 'birthday', label: '🎂 Geburtstag' },
        { value: 'anniversary', label: '💕 Jahrestag' },
        { value: 'business', label: '💼 Geschäftsessen' },
        { value: 'date', label: '🌹 Romantisches Dinner' },
        { value: 'celebration', label: '🎉 Feier' },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsComplete(true);
        setIsSubmitting(false);
    };

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const canProceedStep1 = formData.guests && formData.date && formData.time;
    const canProceedStep2 = formData.name && formData.email && formData.phone;

    // Get min date (today)
    const today = new Date().toISOString().split('T')[0];

    if (isComplete) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-16">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                        className="w-24 h-24 mx-auto mb-8 rounded-full bg-[#c5a059]/20 flex items-center justify-center"
                    >
                        <svg className="w-12 h-12 text-[#c5a059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Reservierung Bestätigt!
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/60 text-lg mb-8"
                    >
                        Vielen Dank, {formData.name}! Wir freuen uns auf Ihren Besuch.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-[#141414] rounded-2xl p-8 mb-8 border border-[#2a2a2a]"
                    >
                        <div className="grid grid-cols-2 gap-6 text-left">
                            <div>
                                <p className="text-white/40 text-sm uppercase tracking-wider mb-1">Datum</p>
                                <p className="text-white font-medium">{new Date(formData.date).toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
                            </div>
                            <div>
                                <p className="text-white/40 text-sm uppercase tracking-wider mb-1">Uhrzeit</p>
                                <p className="text-white font-medium">{formData.time} Uhr</p>
                            </div>
                            <div>
                                <p className="text-white/40 text-sm uppercase tracking-wider mb-1">Gäste</p>
                                <p className="text-white font-medium">{formData.guests} {formData.guests === 1 ? 'Person' : 'Personen'}</p>
                            </div>
                            <div>
                                <p className="text-white/40 text-sm uppercase tracking-wider mb-1">Kontakt</p>
                                <p className="text-white font-medium">{formData.phone}</p>
                            </div>
                        </div>
                    </motion.div>

                    <a href="/" className="btn-primary inline-block">
                        ZURÜCK ZUR STARTSEITE
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
                <Image
                    src="/images/restaurant-interior-1.jpg"
                    alt="Restaurant Interior"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-6">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="script-text text-[#c5a059] text-2xl md:text-3xl mb-3"
                        >
                            Reservieren Sie Ihren Tisch
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider"
                        >
                            RESERVIERUNG
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* Progress Steps */}
            <section className="py-8 border-b border-[#2a2a2a]">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="flex items-center justify-between">
                        {[
                            { num: 1, label: 'Datum & Zeit' },
                            { num: 2, label: 'Ihre Daten' },
                            { num: 3, label: 'Bestätigung' },
                        ].map((s, i) => (
                            <div key={s.num} className="flex items-center">
                                <div className="flex flex-col items-center">
                                    <motion.div
                                        animate={{
                                            backgroundColor: step >= s.num ? '#c5a059' : '#2a2a2a',
                                            scale: step === s.num ? 1.1 : 1,
                                        }}
                                        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                                        style={{ color: step >= s.num ? '#0a0a0a' : '#666' }}
                                    >
                                        {step > s.num ? (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            s.num
                                        )}
                                    </motion.div>
                                    <span className={`mt-2 text-xs md:text-sm ${step >= s.num ? 'text-[#c5a059]' : 'text-white/40'}`}>
                                        {s.label}
                                    </span>
                                </div>
                                {i < 2 && (
                                    <div className={`hidden md:block w-20 lg:w-32 h-0.5 mx-4 ${step > s.num ? 'bg-[#c5a059]' : 'bg-[#2a2a2a]'}`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-12 md:py-16">
                <div className="max-w-3xl mx-auto px-6">
                    <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait">
                            {/* Step 1: Date, Time & Guests */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="text-center mb-8">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Wann möchten Sie uns besuchen?</h2>
                                        <p className="text-white/60">Wählen Sie Datum, Uhrzeit und Anzahl der Gäste</p>
                                    </div>

                                    {/* Guest Count */}
                                    <div className="bg-[#141414] rounded-2xl p-6 border border-[#2a2a2a]">
                                        <label className="block text-white/60 text-sm uppercase tracking-wider mb-4">
                                            Anzahl der Gäste
                                        </label>
                                        <div className="flex items-center justify-center gap-4">
                                            <button
                                                type="button"
                                                onClick={() => setFormData(prev => ({ ...prev, guests: Math.max(1, prev.guests - 1) }))}
                                                className="w-12 h-12 rounded-full bg-[#2a2a2a] text-white flex items-center justify-center hover:bg-[#c5a059] hover:text-[#0a0a0a] transition-colors text-xl"
                                            >
                                                −
                                            </button>
                                            <div className="w-24 text-center">
                                                <span className="text-4xl font-bold text-[#c5a059]">{formData.guests}</span>
                                                <p className="text-white/40 text-sm mt-1">{formData.guests === 1 ? 'Person' : 'Personen'}</p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setFormData(prev => ({ ...prev, guests: Math.min(12, prev.guests + 1) }))}
                                                className="w-12 h-12 rounded-full bg-[#2a2a2a] text-white flex items-center justify-center hover:bg-[#c5a059] hover:text-[#0a0a0a] transition-colors text-xl"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* Date */}
                                    <div className="bg-[#141414] rounded-2xl p-6 border border-[#2a2a2a]">
                                        <label className="block text-white/60 text-sm uppercase tracking-wider mb-4">
                                            Datum wählen
                                        </label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            min={today}
                                            className="w-full text-lg py-4"
                                            required
                                        />
                                    </div>

                                    {/* Time Slots */}
                                    <div className="bg-[#141414] rounded-2xl p-6 border border-[#2a2a2a]">
                                        <label className="block text-white/60 text-sm uppercase tracking-wider mb-4">
                                            Uhrzeit wählen
                                        </label>
                                        <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                                            {timeSlots.map((time) => (
                                                <button
                                                    key={time}
                                                    type="button"
                                                    onClick={() => setFormData(prev => ({ ...prev, time }))}
                                                    className={`py-3 px-2 rounded-lg text-sm font-medium transition-all ${formData.time === time
                                                            ? 'bg-[#c5a059] text-[#0a0a0a]'
                                                            : 'bg-[#2a2a2a] text-white/60 hover:bg-[#3a3a3a] hover:text-white'
                                                        }`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Personal Info */}
                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="text-center mb-8">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ihre Kontaktdaten</h2>
                                        <p className="text-white/60">Damit wir Ihre Reservierung bestätigen können</p>
                                    </div>

                                    <div className="bg-[#141414] rounded-2xl p-6 md:p-8 border border-[#2a2a2a] space-y-5">
                                        <div>
                                            <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">
                                                Vollständiger Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Max Mustermann"
                                                required
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">
                                                    E-Mail Adresse *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="max@example.de"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">
                                                    Telefonnummer *
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="+49 171 1234567"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">
                                                Anlass (Optional)
                                            </label>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                                {occasions.map((occ) => (
                                                    <button
                                                        key={occ.value}
                                                        type="button"
                                                        onClick={() => setFormData(prev => ({ ...prev, occasion: occ.value }))}
                                                        className={`py-3 px-3 rounded-lg text-sm transition-all ${formData.occasion === occ.value
                                                                ? 'bg-[#c5a059] text-[#0a0a0a] font-medium'
                                                                : 'bg-[#2a2a2a] text-white/60 hover:bg-[#3a3a3a]'
                                                            }`}
                                                    >
                                                        {occ.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">
                                                Besondere Wünsche (Optional)
                                            </label>
                                            <textarea
                                                name="notes"
                                                value={formData.notes}
                                                onChange={handleInputChange}
                                                placeholder="Allergien, Kinderstühle, Fensterplatz..."
                                                rows={3}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Confirmation */}
                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="text-center mb-8">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Reservierung überprüfen</h2>
                                        <p className="text-white/60">Bitte überprüfen Sie Ihre Angaben</p>
                                    </div>

                                    <div className="bg-[#141414] rounded-2xl p-6 md:p-8 border border-[#2a2a2a]">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div>
                                                    <p className="text-white/40 text-sm uppercase tracking-wider">Datum</p>
                                                    <p className="text-white text-lg font-medium">
                                                        {formData.date && new Date(formData.date).toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-white/40 text-sm uppercase tracking-wider">Uhrzeit</p>
                                                    <p className="text-white text-lg font-medium">{formData.time} Uhr</p>
                                                </div>
                                                <div>
                                                    <p className="text-white/40 text-sm uppercase tracking-wider">Gäste</p>
                                                    <p className="text-white text-lg font-medium">{formData.guests} {formData.guests === 1 ? 'Person' : 'Personen'}</p>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div>
                                                    <p className="text-white/40 text-sm uppercase tracking-wider">Name</p>
                                                    <p className="text-white text-lg font-medium">{formData.name}</p>
                                                </div>
                                                <div>
                                                    <p className="text-white/40 text-sm uppercase tracking-wider">E-Mail</p>
                                                    <p className="text-white text-lg font-medium">{formData.email}</p>
                                                </div>
                                                <div>
                                                    <p className="text-white/40 text-sm uppercase tracking-wider">Telefon</p>
                                                    <p className="text-white text-lg font-medium">{formData.phone}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {(formData.occasion || formData.notes) && (
                                            <div className="mt-6 pt-6 border-t border-[#2a2a2a]">
                                                {formData.occasion && (
                                                    <div className="mb-3">
                                                        <p className="text-white/40 text-sm uppercase tracking-wider">Anlass</p>
                                                        <p className="text-white">{occasions.find(o => o.value === formData.occasion)?.label}</p>
                                                    </div>
                                                )}
                                                {formData.notes && (
                                                    <div>
                                                        <p className="text-white/40 text-sm uppercase tracking-wider">Wünsche</p>
                                                        <p className="text-white">{formData.notes}</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    <div className="bg-[#c5a059]/10 rounded-xl p-4 border border-[#c5a059]/30">
                                        <p className="text-[#c5a059] text-sm text-center">
                                            Sie erhalten eine Bestätigung per E-Mail an {formData.email}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center mt-10">
                            {step > 1 ? (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Zurück
                                </button>
                            ) : (
                                <div />
                            )}

                            {step < 3 ? (
                                <motion.button
                                    type="button"
                                    onClick={nextStep}
                                    disabled={(step === 1 && !canProceedStep1) || (step === 2 && !canProceedStep2)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Weiter
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </motion.button>
                            ) : (
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-primary flex items-center gap-2 disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Wird gesendet...
                                        </>
                                    ) : (
                                        <>
                                            Reservierung bestätigen
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </>
                                    )}
                                </motion.button>
                            )}
                        </div>
                    </form>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-16 text-center"
                    >
                        <p className="text-white/40 mb-2">Für größere Gruppen oder besondere Anfragen rufen Sie uns an:</p>
                        <a href="tel:+494018034218" className="text-[#c5a059] text-xl font-semibold hover:text-[#d4af6a] transition-colors">
                            +49 40 18034218
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
