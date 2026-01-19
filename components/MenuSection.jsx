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
            <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wider inline-block">
                    {title}
                </h3>
                <div className="gold-border max-w-[200px] mx-auto mt-3" />
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
