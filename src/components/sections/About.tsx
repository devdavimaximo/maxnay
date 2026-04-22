"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { Award, HeartPulse, Microchip, CheckCircle2 } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/554712345679?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Maxnay%20Veterin%C3%A1ria!";

const values = [
  {
    Icon: Award,
    title: "Excelência Científica",
    description: "Protocolos baseados em padrões diagnósticos mundiais.",
  },
  {
    Icon: HeartPulse,
    title: "Cuidado Humanizado",
    description: "Cada paciente é tratado como um membro único da família.",
  },
  {
    Icon: Microchip,
    title: "Estrutura Hospitalar",
    description: "Equipamentos de última geração para segurança absoluta.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-surface overflow-hidden">
      <Container size="lg">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Imagery */}
          <AboutVisuals />

          {/* Content */}
          <article>
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full mb-6">
                <CheckCircle2 size={12} className="text-secondary" />
                <span className="font-body text-[10px] font-bold text-secondary uppercase tracking-widest">Desde 2016</span>
              </div>
              <Heading className="mb-8">
                Referência em Balneário Camboriú.
              </Heading>
              <p className="font-body text-base text-neutral-600 leading-relaxed mb-10 max-w-lg">
                Aliamos a precisão tecnológica ao calor humano, proporcionando tratamentos eficazes e acolhedores para garantir a longevidade do seu pet.
              </p>
            </AnimatedSection>

            <div className="space-y-8 mb-12">
              {values.map((value, i) => (
                <ValueItem key={value.title} value={value} index={i} />
              ))}
            </div>

            <AnimatedSection delay={0.3}>
              <Button href={WHATSAPP_URL} variant="secondary">
                Agendar uma Visita
              </Button>
            </AnimatedSection>
          </article>
        </div>
      </Container>
    </section>
  );
}

function AboutVisuals() {
  return (
    <AnimatedSection direction="left">
      <div className="relative">
        <div className="relative z-10 rounded-3xl overflow-hidden bg-primary aspect-[4/5] shadow-card">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(44,122,123,0.3)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-white">
            <HeartPulse size={80} strokeWidth={1} className="text-accent/20 mb-6" />
            <h3 className="font-heading font-bold text-2xl mb-2">Medicina de Precisão</h3>
            <p className="font-body text-white/40 text-sm">Onde a tecnologia encontra o coração.</p>
          </div>
        </div>
        
        <motion.div 
          className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-8 shadow-elevated border border-neutral-100 hidden lg:block"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="font-heading font-bold text-3xl text-primary mb-1 leading-none">98%</div>
          <div className="font-body text-[10px] text-neutral-400 font-bold uppercase tracking-widest">Satisfação</div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function ValueItem({ value, index }: { value: typeof values[0], index: number }) {
  return (
    <AnimatedSection key={index} delay={0.1 * index} direction="right">
      <div className="flex gap-5 group items-start">
        <div className="w-12 h-12 rounded-xl bg-white shadow-soft transition-all flex items-center justify-center shrink-0 text-secondary border border-neutral-100 group-hover:bg-primary group-hover:text-white">
          <value.Icon size={24} strokeWidth={1.5} />
        </div>
        <div>
          <h4 className="font-heading font-bold text-lg text-primary mb-1 break-words">{value.title}</h4>
          <p className="font-body text-neutral-500 text-sm leading-relaxed">{value.description}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
