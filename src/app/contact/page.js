'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
      <motion.div
        className="max-w-xl w-full bg-white text-gray-900 p-8 rounded-2xl shadow-xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl font-bold text-purple-600"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          📬 Hubungi Saya
        </motion.h1>

        <p className="text-lg mt-4 text-gray-700">
          Ingin bekerja sama, berdiskusi, atau sekadar menyapa? Jangan ragu untuk menghubungi saya!
        </p>

        <div className="mt-6 space-y-4">
          <p className="text-lg">
            💌 Email:{' '}
            <a href="mailto:marsadembi@gmail.com" className="text-blue-600 hover:underline font-semibold">
              marsa@example.com
            </a>
          </p>
          <p className="text-lg">
            🔗 LinkedIn:{' '}
            <a
              href="https://linkedin.com/in/marsa"
              target="_blank"
              className="text-blue-600 hover:underline font-semibold"
            >
              linkedin.com/in/marsa
            </a>
          </p>
          <p className="text-lg">
            📱 WhatsApp:{' '}
            <a
              href="https://wa.me/628714533014"
              target="_blank"
              className="text-blue-600 hover:underline font-semibold"
            >
              +62 812-3456-7890
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
