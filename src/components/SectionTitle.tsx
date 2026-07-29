import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  center = true,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{marginTop:"10px"}}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      <div
        className={`inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase ${
          light
            ? 'bg-white/20 text-white'
            : 'bg-green-100 text-green-700'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
        যুগ্ম সাধারণ সম্পাদক পদপ্রার্থী
      </div>
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${
            light ? 'text-green-100' : 'text-gray-500'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 ${center ? 'mx-auto' : ''} h-1 w-16 rounded-full ${
          light ? 'bg-white' : 'bg-gradient-to-r from-green-500 to-red-500'
        }`}
      />
    </motion.div>
  );
}
