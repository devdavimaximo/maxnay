"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { Clock, Shield, Users, Activity, Phone, Home } from "lucide-react";

const differentials = [
  {
    Icon: Clock,
    title: "Prontidão 24h",
    description: "Equipe técnica de prontidão absoluta para qualquer intercorrência.",
  },
  {
    Icon: Shield,
    title: "Diagnóstico Rápido",
    description: "Laboratório próprio com entrega de resultados em horas.",
  },
  {
    Icon: Users,
    title: "Corpo Clínico Sênior",
    description: "Especialistas com vasta experiência acadêmica e hospitalar.",
  },
  {
    Icon: Activity,
    title: "Estética Premium",
    description: "Produtos dermatológicos suaves e ambiente relaxante.",
  },
  {
    Icon: Phone,
    title: "Recepção Digital",
    description: "Agendamento ágil e suporte pós-consulta via WhatsApp.",
  },
  {
    Icon: Home,
    title: "Ambiência Pet-Friendly",
    description: "Arquitetura planejada para reduzir a ansiedade animal.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="section-padding bg-primary relative overflow-hidden py-24">
      {/* Visual background lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,_rgba(201,169,110,0.05)_0%,_transparent_50%)]" />
      
      <Container size="lg" className="relative z-10">
        <header className="mb-16">
          <Heading subtitle="Diferenciais" className="!text-white mb-0" centered>
            Excelência em cada detalhe.
          </Heading>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentials.map((item, i) => (
            <DifferentialCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function DifferentialCard({ item, index }: { item: typeof differentials[0], index: number }) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <article className="group bg-white/[0.04] backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:bg-white/[0.08] transition-all duration-400 h-full flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-8 border border-accent/20 text-accent group-hover:scale-105 transition-transform">
          <item.Icon size={24} strokeWidth={1.5} />
        </div>
        <h3 className="font-heading font-bold text-white text-lg mb-4 break-words">{item.title}</h3>
        <p className="font-body text-white/40 text-sm leading-relaxed flex-grow">{item.description}</p>
      </article>
    </AnimatedSection>
  );
}
