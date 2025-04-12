'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 ease-in-out">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-8 drop-shadow-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        👋 Halo, Saya Marsa Dembi
      </motion.h1>

      <motion.p
        className="text-center max-w-2xl text-lg mb-6 text-white/90"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Saya adalah <span className="font-semibold text-yellow-300">Front-End Developer</span> &{' '}
        <span className="font-semibold text-pink-200">UI Designer</span> yang berbasis di Tanjungsari, Sumedang. Passion saya adalah membangun antarmuka digital yang elegan, interaktif, dan mudah digunakan.
      </motion.p>

      {/* Gambar dengan animasi zoom saat scroll */}
      <motion.div
  className="overflow-hidden rounded-full shadow-2xl mb-6"
  initial={{ scale: 0.6, opacity: 0 }}
  whileInView={{ scale: 1.1, opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.5 }}
>
  <Image
    src="/saa.jpg"
    alt="Foto Marsa Dembi"
    width={200}
    height={200}
    className="rounded-full object-cover border-4 border-white dark:border-gray-700"
  />
</motion.div>


      {/* Highlight Skill */}
      <motion.div
        className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white rounded-3xl shadow-xl p-6 w-full max-w-3xl mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">🛠️ Teknologi yang Dikuasai</h2>
        <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
          <li>Next.js & React</li>
          <li>Tailwind CSS</li>
          <li>Framer Motion</li>
          <li>Figma & UI Design</li>
          <li>Firebase & LowDB</li>
        </ul>
      </motion.div>

      {/* Ajak Kolaborasi */}
      <motion.div
        className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white rounded-3xl shadow-2xl p-6 w-full max-w-3xl mt-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">🤝 Ayo Kolaborasi!</h3>
        <p className="text-gray-700 dark:text-gray-300 mt-2">Punya proyek atau ide keren? Mari wujudkan bersama.</p>
        <a
          href="/contact"
          className="inline-block mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Hubungi Saya
        </a>
      </motion.div>

      {/* Tombol toggle tema */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 left-6 bg-white text-purple-600 dark:bg-gray-800 dark:text-white px-4 py-2 rounded-lg font-semibold shadow hover:shadow-md transition duration-300 border border-purple-300 dark:border-gray-600"
      >
        {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
}
