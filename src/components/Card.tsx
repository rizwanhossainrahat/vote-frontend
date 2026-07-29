import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className = '',
  hover = true,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4 } : undefined}
      className={[
        'bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden',
        hover ? 'hover:shadow-xl transition-shadow duration-300' : '',
        className,
      ].join(' ')}
    >
      {children}
    </motion.div>
  );
}
