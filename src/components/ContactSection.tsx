"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Mail,
  Phone,
  CreditCard,
  Instagram,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ContactSectionProps {
  className?: string;
}

const ContactSection = ({ className = "" }: ContactSectionProps) => {
  const contactInfo = [
    {
      icon: <Facebook className="h-6 w-6" />,
      label: "Facebook",
      value: "Anh Trần Văn",
      link: "https://www.facebook.com/annh.trannvann.9/",
      color: "#1877F2",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.321 5.562a5.124 5.124 0 0 0-3.414-3.414c-1.554-.466-7.86-.466-7.86-.466s-6.305 0-7.86.466a5.124 5.124 0 0 0-3.414 3.414C-1.143 12.97 2.894 19.097 3.473 19.953c.198.294.452.537.749.714a3.993 3.993 0 0 0 2.211.683 3.993 3.993 0 0 0 2.55-.92l.032-.026c.211-.175.397-.38.55-.607V20h2.87v-7.669h-2.87v6.33c-.212.176-.456.31-.72.396a1.822 1.822 0 0 1-.71.082 1.65 1.65 0 0 1-1.11-.431c-1.087-1.04-3.129-4.325-2.147-8.553.133-.575.343-1.129.621-1.647h3.346v7.669h2.87V8.108h3.346c.278.518.488 1.072.621 1.647.982 4.228-1.06 7.513-2.147 8.553a1.65 1.65 0 0 1-1.11.431 1.822 1.822 0 0 1-.71-.082 1.872 1.872 0 0 1-.72-.396v1.339a3.993 3.993 0 0 0 2.55.92 3.993 3.993 0 0 0 2.211-.683c.297-.177.551-.42.749-.714.58-.856 4.616-6.982 2.68-14.39z" />
        </svg>
      ),
      label: "TikTok",
      value: "@anh_tran10",
      link: "https://www.tiktok.com/@anh_tran10",
      color: "#000000",
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      label: "Instagram",
      value: "tv.anh26",
      link: "https://www.instagram.com/tv.anh26/",
      color: "#E4405F",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "anhtran26042004@gmail.com",
      link: "mailto:anhtran26042004@gmail.com",
      color: "#EA4335",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "0342645707",
      link: "tel:0342645707",
      color: "#25D366",
    },
  ];

  const bankInfo = {
    icon: <CreditCard className="h-6 w-6" />,
    label: "MB Bank",
    value: "048889019999",
    color: "#1A73E8",
  };

  return (
    <section
      className={`py-16 px-4 md:px-8 bg-zinc-900 text-white ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Liên Hệ Với Tôi
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Mạng Xã Hội & Liên Hệ
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-center gap-4"
                    >
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={contact.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors"
                              style={{ color: contact.color }}
                            >
                              {contact.icon}
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Truy cập {contact.label} của tôi</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <div>
                        <p className="text-sm text-zinc-400">{contact.label}</p>
                        <a
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-zinc-800 border-zinc-700 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Thông Tin Ngân Hàng
                </h3>

                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-3 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-white/20">
                    <CreditCard className="w-6 h-6 text-blue-400" />
                    <span className="text-xl font-bold text-white">
                      MB Bank 048889019999
                    </span>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="p-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl border border-amber-500/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-lg font-semibold text-white">Lưu Ý Quan Trọng</h4>
        </div>

        <p className="text-white/80 text-sm leading-relaxed">
          Vui lòng ghi rõ tên hoặc nội dung tham chiếu khi chuyển khoản để tôi
          có thể xác nhận và phản hồi nhanh chóng nhất.
        </p>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigator.clipboard.writeText("048889019999")}
          className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
        >
          <CreditCard className="w-6 h-6 text-blue-400 mx-auto mb-2" />
          <span className="text-sm font-medium text-white">Sao Chép STK</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            window.open("mailto:anhtran26042004@gmail.com", "_blank")
          }
          className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
        >
          <Mail className="w-6 h-6 text-green-400 mx-auto mb-2" />
          <span className="text-sm font-medium text-white">Gửi Email</span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ContactSection;
