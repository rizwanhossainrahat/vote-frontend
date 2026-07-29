import { motion } from 'framer-motion';
import type { Winner } from '../types';
import { FiUser, FiPhone, FiAward } from 'react-icons/fi';

interface WinnerCardProps {
  winner: Winner;
}

export default function WinnerCard({ winner }: WinnerCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="relative bg-gradient-to-br from-green-600 via-green-700 to-red-700 rounded-3xl p-1 shadow-2xl"
    >
      {/* Glowing border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400 via-green-400 to-red-400 opacity-30 blur-sm" />

      <div className="relative bg-gradient-to-br from-green-800 to-green-900 rounded-3xl p-8 text-center">
        {/* Crown / Award Icon */}
        <motion.div
          animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-4"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
            <FiAward className="text-white text-4xl" />
          </div>
        </motion.div>

        {/* Winner title */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-yellow-400 text-sm font-bold tracking-widest uppercase mb-2"
        >
          🎉 বিজয়ী ঘোষণা / Winner
        </motion.p>

        {/* Water pot symbol */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="text-4xl mb-4"
        >
          🏺
        </motion.div>

        {/* Winner name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-white mb-2"
        >
          {winner.name}
        </motion.h2>

        <div className="w-24 h-0.5 bg-yellow-400 mx-auto mb-4 rounded-full" />

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-2 text-green-200"
        >
          <FiPhone size={16} />
          <span className="text-lg font-medium">{winner.phone}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-green-300 mt-2 text-sm"
        >
          <FiUser size={14} />
          <span>আব্দুল মতিন — পানির কলস</span>
        </motion.div>

        {/* Decorative stars */}
        <div className="absolute top-4 left-4 text-yellow-400 text-lg opacity-60">★</div>
        <div className="absolute top-4 right-4 text-yellow-400 text-lg opacity-60">★</div>
        <div className="absolute bottom-4 left-4 text-yellow-400 text-sm opacity-40">✦</div>
        <div className="absolute bottom-4 right-4 text-yellow-400 text-sm opacity-40">✦</div>
      </div>
    </motion.div>
  );
}
