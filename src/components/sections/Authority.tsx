"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import { Users, History, GraduationCap, Star, Shield, Microscope, Clock, Globe } from "lucide-react";

const stats = [
  { value: "+5.000", label: "Pacientes", Icon: Users },
  { value: "8 anos", label: "Presença", Icon: History },
  { value: "15+", label: "Especialistas", Icon: GraduationCap },
  { value: "4.9★", label: "Nota Google", Icon: Star },
];

const trustBadges = [
  { label: "CRMV SC Credenciado", Icon: Shield },
  { label: "Centro Cirúrgico Completo", Icon: Microscope },
  { label: "Plantão Médico 24h", Icon: Clock },
  { label: "Padrão de Cuidado Ouro", Icon: Globe },
];

export default function Authority() {
  return (
    <section id="autoridade" className="section-padding bg-white relative z-10 overflow-hidden">
      <Container size="lg">
        <div className="flex flex-col gap-20 md:gap-24">
          {/* Stats Distribution - More compact */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>

          {/* Banner - Not giant */}
          <article className="relative">
             <AnimatedSection>
               <div className="bg-primary rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden text-white shadow-elevated">
                  {/* Subtle lights */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                      <div className="inline-flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest mb-6 leading-none">
                         <Shield size={14} />
                         <span>Compromisso Vital</span>
                      </div>
                      <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight break-words">
                        Confiança construída com precisão científica.
                      </h2>
                      <p className="font-body text-white/40 text-base md:text-lg leading-relaxed max-w-sm">
                        Referência hospitalar em SC, operando sob os mais rígidos protocolos de segurança.
                      </p>
                    </div>
                    
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {trustBadges.map((badge, index) => (
                        <div
                          key={badge.label}
                          className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex items-center gap-4"
                        >
                          <div className="w-10 h-10 rounded-xl bg-accent text-primary flex items-center justify-center flex-shrink-0">
                            <badge.Icon size={18} />
                          </div>
                          <span className="font-body text-[13px] font-bold text-white/80 leading-tight">
                            {badge.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
             </AnimatedSection>
          </article>
        </div>
      </Container>
    </section>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0], index: number }) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="flex flex-col items-center lg:items-start group">
        <div className="w-12 h-12 rounded-xl bg-surface border border-neutral-100 flex items-center justify-center mb-6 text-secondary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
          <stat.Icon size={24} strokeWidth={1.5} />
        </div>
        <div className="font-heading font-bold text-4xl text-primary mb-1">
          {stat.value}
        </div>
        <div className="font-body text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none">
          {stat.label}
        </div>
      </div>
    </AnimatedSection>
  );
}
