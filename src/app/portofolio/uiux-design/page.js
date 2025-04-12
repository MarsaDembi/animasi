"use client";
import { motion } from "framer-motion";

export default function UIUXDesignPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
      <div className="max-w-4xl w-full text-center">
        {/* Judul */}
        <motion.h1
          className="text-4xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🎨 Desain UI/UX Aplikasi Mobile
        </motion.h1>

        <motion.p
          className="text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Desain antarmuka pengguna untuk aplikasi mobile edukasi interaktif berbasis gamifikasi dan kuis. Fokus pada kenyamanan, konsistensi visual, dan pengalaman pengguna yang menyenangkan.
        </motion.p>

        {/* Gambar UI Mockup */}
        <motion.img
          src="/uiux-mobile.png"
          alt="UI/UX Mobile App"
          className="mt-6 rounded-lg shadow-lg w-full max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Fitur UI/UX */}
        <div className="mt-8 bg-white text-gray-900 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-3 text-purple-600">✨ Fitur Desain</h2>
          <ul className="text-lg space-y-2 text-left">
            <li>✅ Tampilan modern & intuitif</li>
            <li>✅ Navigasi sederhana & responsif</li>
            <li>✅ Komponen UI konsisten dan modular</li>
            <li>✅ Warna & tipografi disesuaikan dengan audiens</li>
            <li>✅ Prototyping menggunakan Figma</li>
          </ul>
        </div>

        {/* Teknologi & Tools */}
        <div className="mt-6">
          <h2 className="text-xl font-bold">🛠️ Tools yang Digunakan</h2>
          <p className="text-lg mt-2">Figma • Adobe XD • Canva • User Research • Design System</p>
        </div>

        {/* Tombol (Opsional) */}
        {/* <a
          href="https://figma.com/project-link"
          target="_blank"
          className="mt-6 inline-block bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          🔗 Lihat Prototipe di Figma
        </a> */}
      </div>
    </div>
  );
}
