'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';

export default function CheckoutPage() {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        postalCode: '',
        phone: '',
        paymentMethod: 'cash',
        notes: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);

    const deliveryFee = 3.50;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setOrderComplete(true);
        clearCart();
        setIsSubmitting(false);
    };

    if (orderComplete) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-16 w-full">
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
                        Bestellung Aufgegeben!
                    </h1>
                    <p className="text-white/60 text-lg mb-8">
                        Vielen Dank für Ihre Bestellung. Wir werden Sie bald kontaktieren.
                    </p>
                    <a href="/" className="btn-primary inline-block">
                        ZURÜCK ZUR STARTSEITE
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] w-full">
            {/* Hero Section - Fixed spacing */}
            <section className="relative h-[35vh] min-h-[280px] overflow-hidden">
                <Image
                    src="/images/restaurant-interior-2.jpg"
                    alt="Restaurant"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />

                <div className="absolute inset-0 flex items-end justify-center pb-12">
                    <div className="text-center px-6">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="script-text text-[#c5a059] text-xl md:text-2xl mb-2"
                        >
                            Elegant Dining at Home
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wider"
                        >
                            LIEFERUNG
                        </motion.h1>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="gold-border w-24 mx-auto mt-4"
                        />
                    </div>
                </div>
            </section>

            {/* Checkout Content */}
            <section className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column - Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-2"
                        >
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Delivery Details Card */}
                                <div className="bg-[#141414] rounded-2xl border border-[#2a2a2a] overflow-hidden">
                                    <div className="bg-[#1a1a1a] px-6 py-4 border-b border-[#2a2a2a]">
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="w-8 h-8 rounded-full bg-[#c5a059] text-[#0a0a0a] flex items-center justify-center font-bold text-sm">1</span>
                                            <h2 className="text-lg font-semibold text-white">Lieferadresse</h2>
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-5">
                                        <div>
                                            <label className="block text-white/60 text-sm mb-2">
                                                Vollständiger Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                placeholder="Max Mustermann"
                                                className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white focus:border-[#c5a059] focus:outline-none transition-colors"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-white/60 text-sm mb-2">
                                                Lieferadresse in Hamburg *
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                placeholder="Straße und Hausnummer"
                                                className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white focus:border-[#c5a059] focus:outline-none transition-colors"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-white/60 text-sm mb-2">
                                                    Postleitzahl *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="postalCode"
                                                    value={formData.postalCode}
                                                    onChange={handleInputChange}
                                                    placeholder="22547"
                                                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white focus:border-[#c5a059] focus:outline-none transition-colors"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white/60 text-sm mb-2">
                                                    Telefonnummer *
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="+49 171 1234567"
                                                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white focus:border-[#c5a059] focus:outline-none transition-colors"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Method Card */}
                                <div className="bg-[#141414] rounded-2xl border border-[#2a2a2a] overflow-hidden">
                                    <div className="bg-[#1a1a1a] px-6 py-4 border-b border-[#2a2a2a]">
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="w-8 h-8 rounded-full bg-[#c5a059] text-[#0a0a0a] flex items-center justify-center font-bold text-sm">2</span>
                                            <h2 className="text-lg font-semibold text-white">Zahlungsmethode</h2>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="grid gap-3">
                                            {[
                                                {
                                                    value: 'cash',
                                                    label: 'Barzahlung',
                                                    sublabel: 'Bezahlen Sie bei Lieferung',
                                                    icon: '💵'
                                                },
                                                {
                                                    value: 'card',
                                                    label: 'Kartenzahlung',
                                                    sublabel: 'EC-Karte bei Lieferung',
                                                    icon: '💳'
                                                },
                                                {
                                                    value: 'paypal',
                                                    label: 'PayPal',
                                                    sublabel: 'Sichere Online-Zahlung',
                                                    icon: '🅿️'
                                                },
                                            ].map((method) => (
                                                <motion.label
                                                    key={method.value}
                                                    whileTap={{ scale: 0.99 }}
                                                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.paymentMethod === method.value
                                                        ? 'border-[#c5a059] bg-[#c5a059]/10'
                                                        : 'border-[#2a2a2a] hover:border-[#3a3a3a] bg-[#0a0a0a]'
                                                        }`}
                                                >
                                                    <span className="text-2xl">{method.icon}</span>
                                                    <div className="flex-1">
                                                        <span className={`block font-medium ${formData.paymentMethod === method.value ? 'text-white' : 'text-white/80'
                                                            }`}>
                                                            {method.label}
                                                        </span>
                                                        <span className="text-sm text-white/40">{method.sublabel}</span>
                                                    </div>
                                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.paymentMethod === method.value
                                                        ? 'border-[#c5a059] bg-[#c5a059]'
                                                        : 'border-[#3a3a3a]'
                                                        }`}>
                                                        {formData.paymentMethod === method.value && (
                                                            <svg className="w-3 h-3 text-[#0a0a0a]" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                        )}
                                                    </div>
                                                    <input
                                                        type="radio"
                                                        name="paymentMethod"
                                                        value={method.value}
                                                        checked={formData.paymentMethod === method.value}
                                                        onChange={handleInputChange}
                                                        className="sr-only"
                                                    />
                                                </motion.label>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Notes Card */}
                                <div className="bg-[#141414] rounded-2xl border border-[#2a2a2a] overflow-hidden">
                                    <div className="bg-[#1a1a1a] px-6 py-4 border-b border-[#2a2a2a]">
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="w-8 h-8 rounded-full bg-[#c5a059] text-[#0a0a0a] flex items-center justify-center font-bold text-sm">3</span>
                                            <h2 className="text-lg font-semibold text-white">Anmerkungen</h2>
                                            <span className="text-white/40 text-sm">(Optional)</span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <textarea
                                            name="notes"
                                            value={formData.notes}
                                            onChange={handleInputChange}
                                            placeholder="Besondere Wünsche, Allergien, Lieferhinweise..."
                                            rows={3}
                                            className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white focus:border-[#c5a059] focus:outline-none transition-colors resize-none"
                                        />
                                    </div>
                                </div>
                            </form>
                        </motion.div>

                        {/* Right Column - Order Summary */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-1"
                        >
                            <div className="bg-[#141414] rounded-2xl border border-[#2a2a2a] overflow-hidden sticky top-24">
                                <div className="bg-[#1a1a1a] px-6 py-4 border-b border-[#2a2a2a]">
                                    <h2 className="text-lg font-semibold text-white">Ihre Bestellung</h2>
                                </div>

                                <div className="p-6">
                                    {cart.length === 0 ? (
                                        <div className="text-center py-8">
                                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                                                <svg className="w-8 h-8 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                                </svg>
                                            </div>
                                            <p className="text-white/40 mb-3">Ihr Warenkorb ist leer</p>
                                            <a href="/menu" className="text-[#c5a059] hover:underline text-sm">
                                                Zur Speisekarte →
                                            </a>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                                                {cart.map((item) => (
                                                    <motion.div
                                                        key={item.id}
                                                        layout
                                                        className="flex gap-3 pb-4 border-b border-[#2a2a2a] last:border-0"
                                                    >
                                                        <div className="flex-1 min-w-0">
                                                            <h4 className="text-white font-medium text-sm truncate">{item.name}</h4>
                                                            <div className="flex items-center gap-2 mt-2">
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                    className="w-7 h-7 rounded-lg bg-[#2a2a2a] text-white/60 flex items-center justify-center hover:bg-[#c5a059] hover:text-[#0a0a0a] transition-colors text-sm"
                                                                >
                                                                    −
                                                                </button>
                                                                <span className="text-white/60 text-sm w-6 text-center">{item.quantity}</span>
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                    className="w-7 h-7 rounded-lg bg-[#2a2a2a] text-white/60 flex items-center justify-center hover:bg-[#c5a059] hover:text-[#0a0a0a] transition-colors text-sm"
                                                                >
                                                                    +
                                                                </button>
                                                                <button
                                                                    onClick={() => removeFromCart(item.id)}
                                                                    className="ml-auto text-red-400/50 hover:text-red-400 text-xs"
                                                                >
                                                                    ✕
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <span className="text-[#c5a059] font-semibold text-sm">
                                                            €{(item.price * item.quantity).toFixed(2)}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Totals */}
                                            <div className="mt-6 pt-4 border-t border-[#2a2a2a] space-y-3">
                                                <div className="flex justify-between text-white/60 text-sm">
                                                    <span>Zwischensumme</span>
                                                    <span>€{getCartTotal().toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between text-white/60 text-sm">
                                                    <span>Lieferung</span>
                                                    <span>€{deliveryFee.toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between text-white text-lg font-bold pt-3 border-t border-[#2a2a2a]">
                                                    <span>Gesamt</span>
                                                    <span className="text-[#c5a059]">€{(getCartTotal() + deliveryFee).toFixed(2)}</span>
                                                </div>
                                            </div>

                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={handleSubmit}
                                                disabled={isSubmitting || cart.length === 0}
                                                className="w-full bg-[#c5a059] hover:bg-[#d4af6a] text-[#0a0a0a] font-semibold py-4 rounded-xl mt-6 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center justify-center gap-2">
                                                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                        </svg>
                                                        Wird verarbeitet...
                                                    </span>
                                                ) : (
                                                    'BESTELLUNG AUFGEBEN'
                                                )}
                                            </motion.button>

                                            <p className="text-center text-white/30 text-xs mt-4">
                                                🚚 Lieferzeit ca. 30-45 Minuten
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
