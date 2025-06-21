"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero3D from "@/components/Hero3D";
import ProjectsShowcase from "@/components/ProjectsShowcase";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-zinc-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white"
        >
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-t-4 border-white rounded-full mb-4"
            />
            <span className="text-xl">Đang tải Portfolio...</span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-900 text-white overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero3D />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ProjectsShowcase />
        </motion.div>

        <footer className="py-8 text-center text-zinc-400 border-t border-zinc-800">
          <p>© {new Date().getFullYear()} - Portfolio Tương Tác 3D</p>
        </footer>
      </motion.div>
    </main>
  );
}
