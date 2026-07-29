import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-white"
      >
        <div className="text-8xl mb-6">🏺</div>
        <h1 className="text-8xl font-bold text-green-400 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">পেজটি পাওয়া যায়নি</h2>
        <p className="text-green-200 mb-8 max-w-sm mx-auto">
          আপনি যে পেজটি খুঁজছেন সেটি নেই। হোম পেজে ফিরে যান।
        </p>
        <Link to="/">
          <Button size="lg" className="bg-white text-green-800 hover:bg-green-50 border-white">
            🏠 হোম পেজে যান
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
