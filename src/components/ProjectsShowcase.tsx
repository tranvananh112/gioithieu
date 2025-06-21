"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Sparkles, Code, Palette, Cpu, Smartphone } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  category: string;
}

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const projects: Project[] = [
    {
      id: "1",
      title: "Ứng Dụng MB Bank",
      description:
        "Ứng dụng ngân hàng với tính năng chuyển tiền ảo và tạo hóa đơn.",
      icon: "credit-card",
      link: "https://v0-mb-bank-app.vercel.app/",
      category: "app",
    },
    {
      id: "2",
      title: "Web Điểm Danh Tự Động",
      description:
        "Hệ thống tiên tiến để điểm danh học sinh tự động bằng công nghệ nhận diện khuôn mặt.",
      icon: "scan-face",
      link: "https://v0-face-recognition-app-ten.vercel.app/",
      category: "ai",
    },
    {
      id: "3",
      title: "App Ghi Chú",
      description:
        "Ứng dụng web hiện đại để ghi chú và tổ chức ghi chú với định dạng văn bản phong phú.",
      icon: "clipboard-list",
      link: "https://y1u9a9deddwudfwg.live.co.dev/",
      category: "web",
    },
    {
      id: "4",
      title: "Web Làm Trắc Nghiệm",
      description:
        "Ứng dụng trắc nghiệm tương tác với chấm điểm tự động và theo dõi kết quả.",
      icon: "help-circle",
      link: "https://ctt190vc7yfv8nce.live.co.dev/",
      category: "web",
    },

    {
      id: "6",
      title: "Web Phát Nhạc TikTok",
      description: "Tiện ích Chrome trích xuất và phát nhạc từ video TikTok.",
      icon: "music",
      link: "https://v0-google-extension-app.vercel.app/",
      category: "extension",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "web":
        return <Code className="w-5 h-5" />;
      case "extension":
        return <Palette className="w-5 h-5" />;
      case "ai":
        return <Cpu className="w-5 h-5" />;
      case "app":
        return <Smartphone className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="w-full py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
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
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 70%)
          `,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-white/10 mb-6"
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-white/80 font-medium">Portfolio Dự Án</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="gradient-text">Dự Án Của Tôi</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Khám phá bộ sưu tập dự án đa dạng của tôi, từ ứng dụng web hiện đại
            đến các giải pháp AI tiên tiến và tiện ích mở rộng sáng tạo.
          </motion.p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <TabsList className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 gap-2">
              <TabsTrigger
                value="all"
                onClick={() => setActiveCategory("all")}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-xl px-6 py-3 font-medium transition-all duration-300 flex items-center gap-2"
              >
                {getCategoryIcon("all")}
                Tất Cả Dự Án
              </TabsTrigger>
              <TabsTrigger
                value="web"
                onClick={() => setActiveCategory("web")}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white rounded-xl px-6 py-3 font-medium transition-all duration-300 flex items-center gap-2"
              >
                {getCategoryIcon("web")}
                Web App
              </TabsTrigger>
              <TabsTrigger
                value="extension"
                onClick={() => setActiveCategory("extension")}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-500 data-[state=active]:text-white rounded-xl px-6 py-3 font-medium transition-all duration-300 flex items-center gap-2"
              >
                {getCategoryIcon("extension")}
                Tiện Ích
              </TabsTrigger>
              <TabsTrigger
                value="ai"
                onClick={() => setActiveCategory("ai")}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white rounded-xl px-6 py-3 font-medium transition-all duration-300 flex items-center gap-2"
              >
                {getCategoryIcon("ai")}
                AI Project
              </TabsTrigger>
              <TabsTrigger
                value="app"
                onClick={() => setActiveCategory("app")}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white rounded-xl px-6 py-3 font-medium transition-all duration-300 flex items-center gap-2"
              >
                {getCategoryIcon("app")}
                Mobile App
              </TabsTrigger>
            </TabsList>
          </motion.div>

          {["all", "web", "extension", "ai", "app"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-0"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={{
                      hidden: { opacity: 0, y: 50, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          duration: 0.6,
                          delay: index * 0.1,
                          ease: "easeOut",
                        },
                      },
                    }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      icon={project.icon}
                      link={project.link}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0"
        >
          {[
            { number: "5+", label: "Dự Án Hoàn Thành" },
            { number: "3+", label: "Công Nghệ Sử Dụng" },
            { number: "100%", label: "Tỷ Lệ Hài Lòng" },
            { number: "24/7", label: "Hỗ Trợ Kỹ Thuật" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-3 sm:p-4 md:p-6 glass-effect rounded-xl sm:rounded-2xl border border-white/10"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 text-xs sm:text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
