import { motion } from 'framer-motion';

interface LoaderProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Loader({ text = 'Loading...', size = 'md' }: LoaderProps) {
  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className={`${sizeMap[size]} border-4 border-green-200 border-t-green-600 rounded-full`}
      />
      {text && (
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-500 text-sm font-medium"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}
