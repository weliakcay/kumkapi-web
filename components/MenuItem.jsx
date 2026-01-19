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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="menu-item group flex justify-between items-start gap-4 p-4 rounded-lg border border-transparent hover:border-[#2a2a2a] transition-all duration-300"
        >
            <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[#c5a059] text-sm font-mono">{item.id}</span>
                    <h4 className="text-white font-medium text-lg">{item.name}</h4>
                </div>
                {item.description && (
                    <p className="text-white/50 text-sm leading-relaxed mt-1">
                        {item.description}
                    </p>
                )}
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
                <span className="text-[#c5a059] font-semibold text-lg">
                    €{item.price.toFixed(2)}
                </span>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAddToCart}
                    className="w-10 h-10 rounded-full bg-[#c5a059]/10 text-[#c5a059] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#c5a059] hover:text-[#0a0a0a]"
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
