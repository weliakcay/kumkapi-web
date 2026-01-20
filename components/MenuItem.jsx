'use client';

import { motion } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';

export default function MenuItem({ item, index }) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: item.id,
            name: item.name,
            price: item.price,
            description: item.description,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="menu-item group flex flex-col items-center text-center p-4 rounded-lg border border-transparent hover:border-[#2a2a2a] hover:bg-[#141414]/50 transition-all duration-300"
        >
            <div className="w-full">
                <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-[#c5a059] text-sm font-mono">{item.id}</span>
                    <h4 className="text-white font-medium text-lg">{item.name}</h4>
                </div>
                {item.description && (
                    <p className="text-white/50 text-sm leading-relaxed mt-1 max-w-md mx-auto">
                        {item.description}
                    </p>
                )}
            </div>
            <div className="flex items-center gap-4 mt-3">
                <span className="text-[#c5a059] font-semibold text-lg">
                    €{item.price.toFixed(2)}
                </span>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAddToCart}
                    className="w-10 h-10 rounded-full bg-[#c5a059] text-[#0a0a0a] flex items-center justify-center md:opacity-0 md:bg-[#c5a059]/10 md:text-[#c5a059] md:group-hover:opacity-100 md:group-hover:bg-[#c5a059] md:group-hover:text-[#0a0a0a] transition-all duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
                </motion.button>
            </div>
        </motion.div>
    );
}
