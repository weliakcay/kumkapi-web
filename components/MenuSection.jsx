'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MenuItem from './MenuItem';

export default function MenuSection({ title, items, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-16"
        >
            {/* Section Title */}
            <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c5a059]/30 to-transparent" />
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wider">
                    {title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c5a059]/30 to-transparent" />
            </div>

            {/* Menu Items */}
            <div className="space-y-2">
                {items.map((item, itemIndex) => (
                    <MenuItem key={item.id} item={item} index={itemIndex} />
                ))}
            </div>
        </motion.section>
    );
}
