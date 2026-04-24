"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5551995204679?";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      id="floating-whatsapp"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp agora"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 text-white rounded-full shadow-elevated flex items-center justify-center hover:bg-green-600 transition-colors focus:ring-4 focus:ring-green-500/20 outline-none"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Visual attention ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" />
      
      <div className="relative z-10">
        <MessageCircle size={32} fill="currentColor" className="text-white" />
      </div>
    </motion.a>
  );
}
