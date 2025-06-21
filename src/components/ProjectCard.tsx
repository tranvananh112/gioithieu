"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "This is a sample project description that explains what the project does and the technologies used.",
  icon = "clipboard-list",
  link = "https://example.com",
}: ProjectCardProps) => {
  // Get project image based on title
  const getImageUrl = () => {
    switch (title) {
      case "Ứng Dụng MB Bank":
        return "/images/Screenshot 2025-06-21 094215.png";
      case "Web Điểm Danh Tự Động":
        return "/images/Screenshot 2025-06-21 093857.png";
      case "App Ghi Chú":
        return "/images/Screenshot 2025-06-21 093834.png";
      case "Web Làm Trắc Nghiệm":
        return "/images/Screenshot 2025-06-21 093816.png";
      case "Nhận Diện AI":
        return "/images/Screenshot 2025-06-21 093857.png";
      case "Web Phát Nhạc TikTok":
        return "/images/Screenshot 2025-06-21 093808.png";
      default:
        return "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80";
    }
  };

  const getGradientColors = () => {
    switch (icon) {
      case "clipboard-list":
        return "from-emerald-500 to-teal-600";
      case "music":
        return "from-pink-500 to-rose-600";
      case "scan-face":
        return "from-blue-500 to-cyan-600";
      case "help-circle":
        return "from-purple-500 to-violet-600";
      case "credit-card":
        return "from-orange-500 to-amber-600";
      default:
        return "from-blue-500 to-purple-600";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group"
    >
      <Card className="w-full max-w-sm h-[400px] sm:h-[450px] overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm luxury-shadow hover:border-white/20 transition-all duration-500">
        <div className="relative h-48 sm:h-56 w-full overflow-hidden">
          <Image
            src={getImageUrl()}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${getGradientColors()} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
          />

          {/* Floating Icon */}
          <motion.div
            className={`absolute top-4 right-4 p-3 bg-gradient-to-r ${getGradientColors()} rounded-2xl shadow-lg`}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-6 h-6 text-white" />
          </motion.div>

          {/* Premium Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-xs font-medium text-white/90">PREMIUM</span>
          </div>
        </div>

        <CardContent className="p-4 sm:p-6 flex flex-col h-[152px] sm:h-[194px] relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }}
            />
          </div>

          <div className="relative z-10">
            <motion.h3
              className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 line-clamp-2"
              whileHover={{ scale: 1.05 }}
            >
              {title}
            </motion.h3>

            <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 flex-grow leading-relaxed line-clamp-3">
              {description}
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                className={`w-full group/btn bg-gradient-to-r ${getGradientColors()} border-0 text-white font-semibold rounded-lg sm:rounded-xl py-2 sm:py-3 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm sm:text-base`}
                onClick={() => window.open(link, "_blank")}
              >
                <span className="flex items-center justify-center gap-1 sm:gap-2">
                  Khám Phá Dự Án
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                </span>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
