'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ReservationPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        occasion: '',
        notes: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call (would integrate with n8n webhook)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSuccess(true);
        setIsSubmitting(false);
    };

    const timeSlots = [
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30',
    ];

    if (isSuccess) {
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
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Reservierung Bestätigt!
                    </h1>
                    <p className="text-white/60 text-lg mb-4">
                        Vielen Dank, {formData.name}! Ihre Reservierung wurde erfolgreich aufgenommen.
                    </p>
                    <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-6 mb-8 inline-block">
                        <p className="text-white">
                            <span className="text-[#c5a059]">{formData.date}</span> um <span className="text-[#c5a059]">{formData.time}</span> Uhr
                        </p>
                        <p className="text-white/60">{formData.guests} Personen</p>
                    </div>
                    <p className="text-white/40 text-sm mb-8">
                        Sie erhalten in Kürze eine Bestätigungs-E-Mail an {formData.email}
                    </p>
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
            <section className="relative h-[50vh] overflow-hidden">
                <Image
                    src="/images/restaurant-interior-2.jpg"
                    alt="Restaurant Interior"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-900/20" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="script-text text-[#c5a059] text-2xl md:text-3xl mb-2"
                    >
                        Sichern Sie Sich Ihren Platz
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider"
                    >
                        RESERVIERUNG
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="gold-border w-24 mt-4"
                    />
                </div>
            </section>

            {/* Reservation Form */}
            <section className="py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        onSubmit={handleSubmit}
                        className="card p-8 md:p-12"
                    >
                        <div className="text-center mb-10">
                            <p className="text-white/60 text-lg">
                                Füllen Sie das Formular aus und wir bestätigen Ihre Reservierung schnellstmöglich.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Name & Email */}
                            <div className="grid md:grid-cols-2 gap-6">
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
                            </div>

                            {/* Phone & Guests */}
                            <div className="grid md:grid-cols-2 gap-6">
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
                                <div>
                                    <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">
                                        Anzahl der Gäste *
                                    </label>
                                    <select
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                            <option key={num} value={num}>
                                                {num} {num === 1 ? 'Person' : 'Personen'}
                                            </option>
                                        ))}
                                        <option value="10+">Mehr als 10 (Gruppenreservierung)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Date & Time */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">
                                        Datum *
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        min={new Date().toISOString().split('T')[0]}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">
                                        Uhrzeit *
                                    </label>
                                    <select
                                        name="time"
                                        value={formData.time}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Bitte wählen...</option>
                                        {timeSlots.map((time) => (
                                            <option key={time} value={time}>
                                                {time} Uhr
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Occasion */}
                            <div>
                                <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">
                                    Anlass (optional)
                                </label>
                                <select
                                    name="occasion"
                                    value={formData.occasion}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Kein besonderer Anlass</option>
                                    <option value="birthday">Geburtstag</option>
                                    <option value="anniversary">Jubiläum</option>
                                    <option value="business">Geschäftsessen</option>
                                    <option value="date">Romantisches Dinner</option>
                                    <option value="other">Sonstiges</option>
                                </select>
                            </div>

                            {/* Notes */}
                            <div>
                                <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">
                                    Besondere Wünsche (optional)
                                </label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    placeholder="Allergien, Kinderstuhl benötigt, Sitzplatzwünsche..."
                                    rows={4}
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Verarbeitung...
                                    </span>
                                ) : (
                                    'RESERVIERUNG ANFRAGEN'
                                )}
                            </motion.button>
                        </div>

                        <p className="text-white/40 text-sm text-center mt-6">
                            * Pflichtfelder. Wir werden Sie innerhalb von 24 Stunden kontaktieren, um Ihre Reservierung zu bestätigen.
                        </p>
                    </motion.form>

                    {/* Contact Alternative */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center mt-12"
                    >
                        <p className="text-white/60 mb-2">Oder rufen Sie uns direkt an:</p>
                        <a href="tel:+494012345678" className="text-[#c5a059] text-2xl font-semibold hover:text-[#d4af6a] transition-colors">
                            +49 40 123 456 78
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
