import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import type { Winner } from '../types';
import api from '../services/api';
import WinnerCard from '../components/WinnerCard';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { randomConfettiStyle } from '../utils';

const CONFETTI_COUNT = 60;

interface DrawApiResponse {
  success: boolean;
  winner?: Winner;
  message?: string;
}

export default function Draw() {
  const [winner, setWinner] = useState<Winner | null>(null);
  const [loading, setLoading] = useState(false);
  const [noParticipants, setNoParticipants] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [drawCount, setDrawCount] = useState(0);

  const fireConfetti = useCallback(() => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  }, []);

  const handleDraw = async () => {
    try {
      setLoading(true);
      setNoParticipants(false);
      setWinner(null);

      const response = await api.get<DrawApiResponse>('/draw-winner');
      const data = response.data;

      // Backend returns 404 with success:false when no participants
      if (response.status === 404 || !data.success || !data.winner) {
        setNoParticipants(true);
        toast.error('No participants available.');
        return;
      }

      setWinner(data.winner);
      setDrawCount((c) => c + 1);
      fireConfetti();
      toast.success(`🎉 বিজয়ী: ${data.winner.name}`, {
        description: 'অভিনন্দন! নতুন বিজয়ী নির্বাচিত হয়েছে।',
        duration: 5000,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to draw winner';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-green-950 to-gray-900 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* Confetti */}
      <AnimatePresence>
        {showConfetti &&
          Array.from({ length: CONFETTI_COUNT }).map((_, i) => (
            <motion.div
              key={`${drawCount}-${i}`}
              className="confetti-piece"
              style={randomConfettiStyle(i)}
              initial={{ opacity: 1, y: -20 }}
              animate={{ opacity: 0, y: '110vh' }}
              transition={{
                duration: Math.random() * 2 + 2,
                delay: Math.random() * 1,
                ease: 'linear',
              }}
            />
          ))}
      </AnimatePresence>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20">
        {/* Header */}
        <SectionTitle
          title="লটারি ড্র"
          subtitle="🏺 পানির কলস রিওয়ার্ড ক্যাম্পেইন — বিজয়ী নির্বাচন"
          light
        />

        {/* Draw button area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Big draw button */}
          <div className="relative">
            {/* Pulse ring */}
            {!loading && (
              <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDraw}
              disabled={loading}
              className={[
                'relative w-48 h-48 rounded-full text-white font-bold text-xl shadow-2xl',
                'flex flex-col items-center justify-center gap-2 cursor-pointer',
                'bg-gradient-to-br from-green-500 via-green-600 to-green-800',
                'border-4 border-green-400/50 transition-all duration-300',
                'disabled:opacity-70 disabled:cursor-not-allowed',
              ].join(' ')}
            >
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full"
                  />
                  <span className="text-sm">Drawing...</span>
                </>
              ) : (
                <>
                  <span className="text-5xl">🎉</span>
                  <span className="text-base font-bold">Draw Winner</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Draw count badge */}
          {drawCount > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 border border-white/20 rounded-full px-5 py-2 text-white/80 text-sm"
            >
              মোট {drawCount} বার ড্র হয়েছে
            </motion.div>
          )}

          {/* Or use regular button */}
          <Button
            onClick={handleDraw}
            loading={loading}
            disabled={loading}
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 border-amber-500 shadow-amber-300 hover:from-amber-600 hover:to-amber-700"
          >
            🎉 Draw Winner
          </Button>

          {/* No participants state */}
          <AnimatePresence>
            {noParticipants && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-8 text-center max-w-sm"
              >
                <div className="text-5xl mb-3">😔</div>
                <h3 className="text-white font-bold text-xl mb-2">No participants available.</h3>
                <p className="text-gray-400 text-sm">
                  এখনো কোনো অংশগ্রহণকারী নেই। প্রথমে রিওয়ার্ড ক্যাম্পেইনে অংশ নিন।
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Winner card */}
          <AnimatePresence mode="wait">
            {winner && !noParticipants && (
              <motion.div
                key={`winner-${drawCount}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-sm"
              >
                <WinnerCard winner={winner} />

                {/* Draw again prompt */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-center text-gray-400 text-sm mt-6"
                >
                  নতুন বিজয়ী নির্বাচন করতে আবার বাটন চাপুন ↑
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
          {[
            { icon: '🔄', title: 'একাধিক ড্র', desc: 'বারবার ড্র করা যাবে, প্রতিবার নতুন বিজয়ী।' },
            { icon: '⚡', title: 'তাৎক্ষণিক', desc: 'রেজাল্ট তাৎক্ষণিকভাবে দেখা যায়।' },
            { icon: '🎯', title: 'র‍্যান্ডম', desc: 'সম্পূর্ণ র‍্যান্ডম প্রক্রিয়ায় বিজয়ী নির্বাচন।' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-sm"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-white font-bold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
