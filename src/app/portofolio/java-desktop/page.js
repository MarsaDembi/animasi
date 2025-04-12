"use client";
import { motion } from "framer-motion";

export default function JavaDesktopApp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
      <div className="max-w-4xl w-full text-center">
        {/* Judul Halaman */}
        <motion.h1
          className="text-4xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          💻 Aplikasi Manajemen Data (Java Desktop)
        </motion.h1>

        <motion.p
          className="text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Aplikasi desktop berbasis Java untuk manajemen data dengan fitur CRUD, laporan otomatis, dan sistem user access control.
        </motion.p>

        {/* Gambar Ilustrasi */}
        <motion.img
          src="/java-desktop.png"
          alt="Java Desktop App"
          className="mt-6 rounded-lg shadow-lg w-full max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Fitur Utama */}
        <div className="mt-8 bg-white text-gray-900 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-3 text-purple-600">✨ Fitur Utama</h2>
          <ul className="text-lg space-y-2 text-left">
            <li>✅ CRUD Data (Create, Read, Update, Delete)</li>
            <li>✅ Sistem Login: Admin & Pengguna Biasa</li>
            <li>✅ Pencarian & Filter Data</li>
            <li>✅ Cetak Laporan PDF/Excel dengan JasperReports</li>
            <li>✅ Tampilan GUI interaktif dengan Java Swing</li>
          </ul>
        </div>

        {/* Teknologi yang Digunakan */}
        <div className="mt-6">
          <h2 className="text-xl font-bold">🛠️ Teknologi yang Digunakan</h2>
          <p className="text-lg mt-2">Java SE • Java Swing • MySQL / SQLite • JasperReports</p>
        </div>

        {/* Tombol / Demo Link (Opsional) */}
        {/* <a
          href="https://github.com/namamu/java-desktop-app"
          target="_blank"
          className="mt-6 inline-block bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          🔗 Lihat Kode Sumber
        </a> */}
      </div>
    </div>
  );
}
