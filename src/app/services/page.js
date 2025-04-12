'use client';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl font-extrabold"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          🚀 Layanan Saya
        </motion.h1>
        <p className="text-lg mt-4">
          Saya menawarkan berbagai layanan pengembangan perangkat lunak yang disesuaikan dengan kebutuhan Anda.
        </p>
      </motion.div>

      {/* Web Development */}
      <motion.div
        className="mt-8 bg-white text-gray-900 p-6 rounded-lg shadow-md max-w-2xl w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        whileHover={{ scale: 1.03 }}
      >
        <h2 className="text-2xl font-bold text-purple-600 mb-3">🌐 Web Development</h2>
        <p className="text-lg">
          Membangun website modern dan responsif dengan teknologi terkini seperti{' '}
          <span className="font-semibold">React.js, Next.js, dan Tailwind CSS</span>.
        </p>
      </motion.div>

      {/* Mobile Development */}
      <motion.div
        className="mt-6 bg-white text-gray-900 p-6 rounded-lg shadow-md max-w-2xl w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        whileHover={{ scale: 1.03 }}
      >
        <h2 className="text-2xl font-bold text-purple-600 mb-3">📱 Mobile Development</h2>
        <p className="text-lg">
          Pembuatan aplikasi mobile <span className="font-semibold">iOS & Android</span> menggunakan{' '}
          <span className="font-semibold">React Native & Flutter</span>.
        </p>
      </motion.div>

      {/* AI & Chatbot */}
      <motion.div
        className="mt-6 bg-white text-gray-900 p-6 rounded-lg shadow-md max-w-2xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        whileHover={{ scale: 1.03 }}
      >
        <h2 className="text-2xl font-bold text-purple-600 mb-3">🤖 AI & Chatbot Development</h2>
        <p className="text-lg">
          Pengembangan sistem berbasis <span className="font-semibold">kecerdasan buatan (AI)</span> &{' '}
          <span className="font-semibold">chatbot</span> untuk meningkatkan efisiensi bisnis Anda.
        </p>
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold">📩 Hubungi Saya</h2>
        <p className="text-lg mt-2">
          Siap berkolaborasi? Hubungi saya di{' '}
          <a
            href="mailto:marsa@example.com"
            className="text-yellow-300 hover:underline font-medium"
          >
            marsa@example.com
          </a>
        </p>
      </motion.div>
    </div>
  );
}
