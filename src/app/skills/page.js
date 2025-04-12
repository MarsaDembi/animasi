'use client';
import { motion } from 'framer-motion';

export default function Skills() {
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
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          🚀 Keahlian Saya
        </motion.h1>
        <motion.p
          className="text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Berikut adalah beberapa teknologi dan alat yang saya gunakan dalam pengembangan aplikasi web dan mobile.
        </motion.p>
      </motion.div>

      {/* Frontend */}
      <motion.div
        className="mt-8 bg-white text-gray-900 p-6 rounded-lg shadow-md max-w-3xl w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-3 text-purple-600">💻 Frontend Development</h2>
        <ul className="text-lg space-y-2 text-left">
          <li>✅ JavaScript (ES6+), TypeScript</li>
          <li>✅ React.js, Next.js, Vue.js</li>
          <li>✅ Tailwind CSS, Material UI, Chakra UI</li>
          <li>✅ Redux, Zustand</li>
        </ul>
      </motion.div>

      {/* Backend */}
      <motion.div
        className="mt-6 bg-white text-gray-900 p-6 rounded-lg shadow-md max-w-3xl w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-3 text-purple-600">⚡ Backend Development</h2>
        <ul className="text-lg space-y-2 text-left">
          <li>🚀 Node.js, Express.js</li>
          <li>🐍 Python (Django, Flask, FastAPI)</li>
          <li>📦 MongoDB, PostgreSQL, Firebase</li>
          <li>🔧 REST API, GraphQL</li>
        </ul>
      </motion.div>

      {/* Tools */}
      <motion.div
        className="mt-6 bg-white text-gray-900 p-6 rounded-lg shadow-md max-w-3xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-3 text-purple-600">🛠 Tools & Technologies</h2>
        <ul className="text-lg space-y-2 text-left">
          <li>🖥 Git & GitHub, GitLab</li>
          <li>🐳 Docker, Kubernetes</li>
          <li>☁️ AWS, Firebase Hosting</li>
          <li>🛠 CI/CD (GitHub Actions, Jenkins)</li>
        </ul>
      </motion.div>

      {/* Soft Skills */}
      <motion.div
        className="mt-6 max-w-3xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold">🎯 Soft Skills</h2>
        <p className="text-lg mt-2">
          Problem Solving | Communication | Teamwork | Time Management | Adaptability
        </p>
      </motion.div>
    </div>
  );
}
