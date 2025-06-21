"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Code, Palette } from "lucide-react";
import Image from "next/image";

interface Hero3DProps {
  onNavigate?: (section: string) => void;
}

const Hero3D = ({ onNavigate = () => {} }: Hero3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: `linear-gradient(45deg, ${
                ["#60A5FA", "#A78BFA", "#F472B6", "#34D399", "#FBBF24"][
                  Math.floor(Math.random() * 5)
                ]
              }, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              opacity: [0.2, 0.9, 0.2],
              scale: [0.5, 1.5, 0.5],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 3D Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          style={{
            top: "10%",
            left: "15%",
            transform: `translate3d(${mousePosition.x * -30}px, ${mousePosition.y * -30}px, 0)`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full blur-3xl"
          style={{
            bottom: "10%",
            right: "15%",
            transform: `translate3d(${mousePosition.x * -40}px, ${mousePosition.y * -40}px, 0)`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          style={{
            top: "40%",
            right: "30%",
            transform: `translate3d(${mousePosition.x * -25}px, ${mousePosition.y * -25}px, 0)`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
        />
      </div>

      {/* Premium Glass Panel */}
      <motion.div
        className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-16 glass-effect luxury-shadow rounded-2xl sm:rounded-3xl max-w-5xl w-full mx-2 sm:mx-4 border border-white/20"
        style={{
          transform:
            window.innerWidth > 768
              ? `translate3d(${mousePosition.x * 8}px, ${mousePosition.y * 8}px, 0) rotateX(${mousePosition.y * -3}deg) rotateY(${mousePosition.x * 3}deg)`
              : "none",
        }}
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 text-white/20">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute bottom-4 left-4 text-white/20">
          <Code className="w-6 h-6" />
        </div>
        <div className="absolute top-4 left-4 text-white/20">
          <Palette className="w-6 h-6" />
        </div>

        <motion.div
          className="flex flex-col items-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-6 sm:mb-8 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-500 p-1 premium-glow"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              bounce: 0.3,
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <Image
                src="/images/photo_6201982850903951174_y.jpg"
                alt="Trần Văn Anh"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center mb-3 sm:mb-4 px-2"
            style={{ fontFamily: "Playfair Display, serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <span className="gradient-text">Trần Văn Anh</span>
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-light text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <span>Full-Stack Developer</span>
            <span className="text-blue-400 hidden sm:inline">•</span>
            <span>UI/UX Designer</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center mb-8"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 200, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
        </motion.div>

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 px-2">
            <motion.a
              href="https://www.facebook.com/annh.trannvann.9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-full border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5 text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-white font-medium">Facebook</span>
            </motion.a>

            <motion.a
              href="mailto:anhtran26042004@gmail.com"
              className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-red-600/20 hover:bg-red-600/30 rounded-full border border-red-500/30 hover:border-red-500/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5 text-red-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v.273L12 8.773l6.545-4.679v-.273h3.819c.904 0 1.636.732 1.636 1.636z" />
              </svg>
              <span className="text-white font-medium">Email</span>
            </motion.a>

            <motion.a
              href="tel:0342645707"
              className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-green-600/20 hover:bg-green-600/30 rounded-full border border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="text-white font-medium">Phone</span>
            </motion.a>
          </div>

          <motion.div
            className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl sm:rounded-2xl border border-white/20 backdrop-blur-sm mx-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
            </svg>
            <span className="text-base sm:text-lg md:text-xl font-bold text-white text-center">
              MB Bank 048889019999
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            onClick={() => onNavigate("projects")}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
              <Code className="w-4 h-4 sm:w-5 sm:h-5" />
              Khám Phá Dự Án
            </span>
          </motion.button>

          <motion.button
            onClick={() => onNavigate("contact")}
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-semibold rounded-xl sm:rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              Liên Hệ Ngay
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          <span className="text-white/60 text-sm mb-3 font-medium">
            Khám phá thêm
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero3D;
