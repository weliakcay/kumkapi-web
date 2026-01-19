'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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

        // Simulate order submission
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setOrderComplete(true);
        clearCart();
        setIsSubmitting(false);
    };

    if (orderComplete) {
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
        <div className="min-h-screen bg-[#0a0a0a]">
            {/* Hero Section */}
            <section className="relative pt-28 pb-12 overflow-hidden">
                {/* Blue glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-900/20" />

                <div className="relative z-10 text-center px-6 mt-8">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="script-text text-[#c5a059] text-xl md:text-2xl mb-3"
                    >
                        Elegant Dining at Home
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wider"
                    >
                        CHECKOUT
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="gold-border w-24 mx-auto mt-4"
                    />
                </div>
            </section>

            {/* Checkout Content */}
            <section className="pb-24">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Left Column - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-3"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Delivery Details */}
                                <div className="card p-6 md:p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="w-8 h-8 rounded-full bg-[#c5a059] text-[#0a0a0a] flex items-center justify-center font-bold text-sm">1</span>
                                        <h2 className="text-xl font-semibold text-white">DELIVERY DETAILS</h2>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                placeholder="Maximilian Schmidt"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">
                                                Delivery Address in Hamburg
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                placeholder="Neuer Wall 12"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">
                                                    Postal Code
                                                </label>
                                                <input
                                                    type="text"
                                                    name="postalCode"
                                                    value={formData.postalCode}
                                                    onChange={handleInputChange}
                                                    placeholder="20354"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white/60 text-sm uppercase tracking-wider mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="+49 771 1234567"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Method - Redesigned */}
                                <div className="card p-6 md:p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="w-8 h-8 rounded-full bg-[#c5a059] text-[#0a0a0a] flex items-center justify-center font-bold text-sm">2</span>
                                        <h2 className="text-xl font-semibold text-white">PAYMENT METHOD</h2>
                                    </div>

                                    <div className="grid gap-3">
                                        {[
                                            {
                                                value: 'cash',
                                                label: 'Barzahlung',
                                                sublabel: 'Bei Lieferung',
                                                icon: (
                                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                )
                                            },
                                            {
                                                value: 'card',
                                                label: 'Kartenzahlung',
                                                sublabel: 'Bei Lieferung',
                                                icon: (
                                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                                    </svg>
                                                )
                                            },
                                            {
                                                value: 'paypal',
                                                label: 'PayPal',
                                                sublabel: 'Online bezahlen',
                                                icon: (
                                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19a.768.768 0 00-.758.648l-.885 5.61a.63.63 0 01-.622.54h-.003l-.892 1.208z" />
                                                    </svg>
                                                )
                                            },
                                        ].map((method) => (
                                            <motion.label
                                                key={method.value}
                                                whileHover={{ scale: 1.01 }}
                                                whileTap={{ scale: 0.99 }}
                                                className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${formData.paymentMethod === method.value
                                                        ? 'border-[#c5a059] bg-[#c5a059]/10'
                                                        : 'border-[#2a2a2a] hover:border-[#3a3a3a] bg-[#141414]'
                                                    }`}
                                            >
                                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${formData.paymentMethod === method.value
                                                        ? 'bg-[#c5a059] text-[#0a0a0a]'
                                                        : 'bg-[#2a2a2a] text-white/60'
                                                    }`}>
                                                    {method.icon}
                                                </div>
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

                                {/* Notes */}
                                <div className="card p-6 md:p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="w-8 h-8 rounded-full bg-[#c5a059] text-[#0a0a0a] flex items-center justify-center font-bold text-sm">3</span>
                                        <h2 className="text-xl font-semibold text-white">ANMERKUNGEN</h2>
                                    </div>

                                    <textarea
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleInputChange}
                                        placeholder="Besondere Wünsche oder Anmerkungen..."
                                        rows={3}
                                    />
                                </div>
                            </form>
                        </motion.div>

                        {/* Right Column - Order Summary */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-2"
                        >
                            <div className="card p-6 md:p-8 sticky top-24">
                                <h2 className="text-xl font-semibold text-white mb-6">YOUR ORDER</h2>

                                {cart.length === 0 ? (
                                    <div className="text-center py-12">
                                        <svg className="w-16 h-16 mx-auto text-white/20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                        <p className="text-white/40">Your cart is empty.</p>
                                        <a href="/menu" className="text-[#c5a059] hover:underline mt-2 inline-block">
                                            Zur Speisekarte →
                                        </a>
                                    </div>
                                ) : (
                                    <>
                                        <div className="space-y-4 mb-6">
                                            {cart.map((item) => (
                                                <motion.div
                                                    key={item.id}
                                                    layout
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="flex justify-between items-start gap-4 pb-4 border-b border-[#2a2a2a]"
                                                >
                                                    <div className="flex-1">
                                                        <h4 className="text-white font-medium">{item.name}</h4>
                                                        <div className="flex items-center gap-3 mt-2">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="w-6 h-6 rounded bg-[#2a2a2a] text-white/60 flex items-center justify-center hover:bg-[#c5a059] hover:text-[#0a0a0a] transition-colors"
                                                            >
                                                                -
                                                            </button>
                                                            <span className="text-white/60">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="w-6 h-6 rounded bg-[#2a2a2a] text-white/60 flex items-center justify-center hover:bg-[#c5a059] hover:text-[#0a0a0a] transition-colors"
                                                            >
                                                                +
                                                            </button>
                                                            <button
                                                                onClick={() => removeFromCart(item.id)}
                                                                className="ml-auto text-red-400/60 hover:text-red-400 text-sm"
                                                            >
                                                                Entfernen
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <span className="text-[#c5a059] font-semibold">
                                                        €{(item.price * item.quantity).toFixed(2)}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Totals */}
                                        <div className="space-y-3 py-4 border-t border-[#2a2a2a]">
                                            <div className="flex justify-between text-white/60">
                                                <span>SUBTOTAL</span>
                                                <span>€{getCartTotal().toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-white/60">
                                                <span>DELIVERY</span>
                                                <span>€{deliveryFee.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-white text-xl font-bold pt-3 border-t border-[#2a2a2a]">
                                                <span>Total</span>
                                                <span>€{(getCartTotal() + deliveryFee).toFixed(2)}</span>
                                            </div>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={handleSubmit}
                                            disabled={isSubmitting || cart.length === 0}
                                            className="w-full btn-primary mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
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
                                                'COMPLETE ORDER'
                                            )}
                                        </motion.button>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
