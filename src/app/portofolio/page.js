"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const portfolios = [
  {
    id: 1,
    title: "🛒 Web App E-Commerce",
    description: "Aplikasi e-commerce dengan fitur pembayaran online, API integrasi, dan dashboard admin.",
    tech: "Next.js • Tailwind • Firebase • Midtrans",
    details: "/portofolio/ecomerce",
  },
  {
    id: 2,
    title: "🤖 Aplikasi Manajemen Data (Java Desktop)",
    description: "Aplikasi desktop berbasis Java yang dirancang untuk mengelola proses manajemen secara efisien. Sistem ini mencakup fitur pengelolaan, transaksi penjualan, serta manajemen pengguna.",
    tech: "Java (JDK 8+), Java Swing atau JavaFX, MySQL / SQLit, JasperReports (untuk cetak laporan), NetBeans / IntelliJ IDEA (IDE)",
    details: "/portofolio/java-desktop",
  },
  {
    id: 3,
    title: "📱 Design UI UX",
    description: "Desain antarmuka pengguna untuk aplikasi mobile edukasi interaktif berbasis gamifikasi dan kuis. Fokus pada kenyamanan, konsistensi visual, dan pengalaman pengguna yang menyenangkan.",
    tech: "Figma",
    details: "/portofolio/uiux-design",
  },
];

export default function Portfolio() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
      <div className="max-w-5xl w-full text-center">
        <motion.h1
          className="text-4xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🎨 Portfolio Saya
        </motion.h1>

        <motion.p
          className="text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Berikut adalah beberapa proyek yang telah saya kerjakan dalam pengembangan web, mobile, dan AI.
        </motion.p>

        {/* Portfolio Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {portfolios.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white text-gray-900 p-6 rounded-2xl shadow-md cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onClick={() => router.push(item.details)}
            >
              <h2 className="text-2xl font-bold text-purple-600">{item.title}</h2>
              <p className="text-base mt-2">{item.description}</p>
              <p className="text-sm text-purple-500 mt-3">{item.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
