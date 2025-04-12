'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
      
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl font-extrabold"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          👋 Halo, Saya Marsa Dembi
        </motion.h1>
        <motion.p
          className="text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Saya seorang <span className="font-semibold">Software Engineer</span> yang berfokus pada pengembangan 
          aplikasi web modern, scalable, dan berperforma tinggi. Dengan keahlian di 
          <span className="font-semibold"> Frontend & Backend</span>, saya senang menciptakan solusi teknologi yang inovatif.
        </motion.p>
      </motion.div>

      {/* Keahlian Utama */}
      <motion.div
        className="mt-8 bg-white text-gray-900 p-6 rounded-lg shadow-lg max-w-3xl w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-3 text-purple-600">🔹 Keahlian Utama</h2>
        <ul className="text-lg space-y-2 text-left">
          <li>🚀 <span className="font-semibold">Frontend:</span> React.js, Next.js, Tailwind CSS</li>
          <li>⚡ <span className="font-semibold">Backend:</span> Node.js, Express.js, MongoDB</li>
          <li>🎨 <span className="font-semibold">UI/UX:</span> Figma, Material UI, Chakra UI</li>
          <li>📱 <span className="font-semibold">Mobile:</span> React Native, Flutter</li>
        </ul>
      </motion.div>

      {/* Visi & Misi */}
      <motion.div
        className="mt-6 max-w-3xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold text-center">🎯 Visi & Misi</h2>
        <p className="text-lg mt-2 text-center text-white">
          Saya berkomitmen untuk terus belajar dan berkontribusi dalam membangun solusi digital 
          yang berdampak positif bagi banyak orang.
        </p>
      </motion.div>

      {/* Hubungi Saya */}
      <motion.div
        className="mt-6 bg-white text-gray-900 p-6 rounded-lg shadow-lg max-w-3xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-3 text-purple-600">📩 Hubungi Saya</h2>
        <p className="text-lg">💌 Email: <a href="mailto:marsa@example.com" className="text-blue-500 hover:underline">marsa@example.com</a></p>
        <p className="text-lg">🔗 LinkedIn: <a href="https://linkedin.com/in/marsa" className="text-blue-500 hover:underline">linkedin.com/in/marsa</a></p>
      </motion.div>
    </div>
  );
}
