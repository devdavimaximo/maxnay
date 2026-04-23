"use client";

import { motion } from "framer-motion";
import {
  ChevronDown,
  ShieldCheck,
  Clock,
  MessageCircle,
  Heart,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const WHATSAPP_URL =
  "https://wa.me/554712345679?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta!";

export default function Hero() {
  return (
    <header
      id="inicio"
      className="relative min-h-[90vh] flex items-center bg-primary py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(44,122,123,0.20)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02),transparent_35%,transparent)]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left Content */}
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
              Medicina de <span className="text-accent italic">Estratégia</span>{" "}
              & <span className="text-secondary">Cuidado.</span>
            </motion.h1>

            <motion.p
              className="font-body text-base md:text-lg text-white/50 leading-relaxed mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Centro hospitalar completo em Balneário Camboriú, onde a
              tecnologia encontra a dedicação absoluta para quem você ama.
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

              <Button
                href="#servicos"
                variant="ghost"
                size="lg"
                className="text-white/50 hover:text-primary group transition-colors"
              >
                <span>Especialidades</span>

                <ChevronDown
                  size={18}
                  className="group-hover:translate-y-1 transition-transform"
                />
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

                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </article>

          {/* Right Visual */}
          <div className="hidden lg:flex justify-end pr-8">
            <motion.div
              className="relative w-full max-w-md aspect-[4/5]"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Glow */}
              <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-3xl opacity-20" />

              {/* Main Card */}
              <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-Card bg-gradient-to-br from-[#0a2f2f] via-primary to-[#071d1d]">
                {/* Decorative Rings */}
                <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full border border-white/5" />
                <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full border border-white/5" />
                <div className="absolute bottom-20 -left-16 w-40 h-40 rounded-full border border-accent/10" />

                {/* Soft Glow */}
                <div className="absolute top-24 left-14 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />

                {/* Vertical Line */}
                <div className="absolute top-0 bottom-0 left-16 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col justify-center px-14">
                  <p className="text-accent text-[11px] uppercase tracking-[0.35em] font-semibold mb-6">
                    Premium Care Experience
                  </p>

                  <h3 className="text-white font-heading font-bold text-5xl leading-tight mb-6">
                    Clínica
                    <span className="block text-secondary italic">
                      Veterinária
                    </span>
                    de Elite
                  </h3>

                  <p className="text-white/45 text-sm leading-relaxed max-w-xs">
                    Estrutura hospitalar avançada, atendimento humano e
                    protocolos de excelência para cada detalhe do cuidado.
                  </p>
                </div>

                {/* Bottom Signature */}
                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="text-white font-semibold tracking-wide">
                      Cuidado Elite
                    </p>

                    <p className="text-white/35 text-[10px] uppercase tracking-[0.3em]">
                      Balneário Camboriú
                    </p>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center">
                    <Heart
                      size={24}
                      className="text-accent"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-6 -right-6 px-5 py-4 bg-secondary rounded-2xl text-white shadow-elevated"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="text-2xl font-bold leading-none">24h</p>

                <p className="text-[10px] uppercase tracking-widest mt-1">
                  Emergência
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </header>
  );
}
