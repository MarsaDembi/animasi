"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EcommercePage() {
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
          🛒 Web App E-Commerce
        </motion.h1>

        {/* Gambar */}
        <motion.div
          className="my-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/ecommerce-preview.png"
            alt="Preview E-Commerce App"
            width={600}
            height={300}
            className="rounded-xl shadow-lg mx-auto"
          />
        </motion.div>

        {/* Deskripsi */}
        <motion.p
          className="text-lg mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Aplikasi e-commerce modern dengan fitur pembayaran online, dashboard admin, dan integrasi API menggunakan Firebase.
        </motion.p>

        <motion.p
          className="text-lg mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          🚀 Teknologi: React.js • Next.js • Tailwind CSS • Firebase
        </motion.p>

        {/* Fitur */}
        <motion.div
          className="mt-8 bg-white text-gray-900 p-6 rounded-2xl shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-3 text-purple-600">✨ Fitur Utama</h2>
          <ul className="text-lg space-y-2 text-left">
            <li>✅ Integrasi Payment Gateway (Midtrans, Stripe)</li>
            <li>✅ Dashboard pengguna dan admin</li>
            <li>✅ Filter & pencarian produk dinamis</li>
            <li>✅ Sistem keranjang & checkout</li>
            <li>✅ API dan autentikasi berbasis Firebase</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
