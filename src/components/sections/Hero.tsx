"use client";

import { motion } from "framer-motion";
import { ChevronDown, ShieldCheck, Clock, MessageCircle, Heart } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/554712345679?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta!";

export default function Hero() {
  return (
    <header id="inicio" className="relative min-h-[90vh] flex items-center bg-primary py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(44,122,123,0.2)_0%,_transparent_70%)]" />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Content */}
          <article className="max-w-xl">
            <motion.div
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">
                Emergência 24h Disponível
              </span>
            </motion.div>

            <motion.h1
              className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl text-white leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ textWrap: "balance" } as any}
            >
              Medicina de <span className="text-accent italic">Estratégia</span> & <span className="text-secondary">Cuidado.</span>
            </motion.h1>

            <motion.p
              className="font-body text-base md:text-lg text-white/50 leading-relaxed mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Centro hospitalar completo em Balneário Camboriú, onde a tecnologia encontra a dedicação absoluta para quem você ama.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button href={WHATSAPP_URL} size="lg">
                <MessageCircle size={18} />
                <span>Agendar pelo WhatsApp</span>
              </Button>
              <Button href="#servicos" variant="ghost" size="lg" className="text-white/40 hover:text-white group">
                <span>Especialidades</span>
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Trust Tags */}
            <motion.div
              className="flex items-center gap-8 mt-16 pt-8 border-t border-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: ShieldCheck, text: "Protocolo Internacional" },
                { icon: Clock, text: "Urgência Full-Time" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/30">
                  <item.icon size={16} className="text-accent/50" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </article>

          {/* Visual - Premium Visual Card */}
          <div className="hidden lg:flex justify-end pr-8">
            <motion.div
              className="relative w-full max-w-md aspect-[4/5]"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-3xl opacity-20" />
              <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-Card">
                <img
                  src="/premium_vet_hero_1776858769982.png"
                  alt="Medicina Veterinária Premium"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary shadow-sm">
                         <Heart size={24} fill="currentColor" />
                      </div>
                      <div>
                        <p className="font-heading font-bold text-white text-lg leading-tight">Cuidado Elite</p>
                        <p className="font-body text-[10px] text-white/50 uppercase tracking-widest">Protocolos Ouro</p>
                      </div>
                   </div>
                   <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40">
                      <ShieldCheck size={18} />
                   </div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-elevated"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                 <div className="text-center">
                    <p className="font-heading font-bold text-2xl leading-none">24</p>
                    <p className="font-body text-[8px] uppercase font-bold">Horas</p>
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </header>
  );
}
