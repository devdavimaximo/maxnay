"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Container from "@/components/ui/Container";
import { 
  Stethoscope, Syringe, Microscope, Search, Hospital, 
  Activity, Sparkles, Home, MessageCircle, Clock, ArrowRight 
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/554712345679?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20servi%C3%A7o!";

const categories = ["Todos", "Médico", "Diagnóstico", "Cirurgia", "Estética"];

const services = [
  {
    category: "Médico",
    Icon: Stethoscope,
    title: "Consulta Médica",
    description: "Avaliação completa com foco em medicina preventiva e curativa.",
  },
  {
    category: "Médico",
    Icon: Syringe,
    title: "Vacinologia",
    description: "Protocolos imunológicos seguros e atualizados anualmente.",
  },
  {
    category: "Diagnóstico",
    Icon: Microscope,
    title: "Eco e Ultrassom",
    description: "Imagem diagnóstica com laudos imediatos e precisos.",
  },
  {
    category: "Diagnóstico",
    Icon: Search,
    title: "Laboratório",
    description: "Análises de sangue, tecidos e fluídos em ambiente próprio.",
  },
  {
    category: "Cirurgia",
    Icon: Hospital,
    title: "Hospitalização",
    description: "Suporte intensivo com monitoramento multiparamétrico real-time.",
  },
  {
    category: "Cirurgia",
    Icon: Activity,
    title: "Especialidades",
    description: "Equipe sênior em Cardiologia, Ortopedia e Dermatologia.",
  },
  {
    category: "Estética",
    Icon: Sparkles,
    title: "Higiene Premium",
    description: "Banho e tosa realizados com produtos dermatológicos certificados.",
  },
  {
    category: "Estética",
    Icon: Home,
    title: "Suítes de Hospedagem",
    description: "Acomodações VIP com acompanhamento de plantonistas 24h.",
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredServices = activeCategory === "Todos" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="servicos" className="section-padding bg-white relative">
      <Container size="lg">
        <header className="mb-16">
          <Heading subtitle="Especialidades" centered className="mb-0">
             Cuidado completo em cada etapa.
          </Heading>
        </header>

        {/* Filter Navigation - Cleaner */}
        <nav className="flex flex-wrap justify-center gap-2 mb-16" aria-label="Categorias">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-body font-bold text-[10px] uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-surface text-neutral-400 border-neutral-100 hover:border-primary/20 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Grid - More normal sized cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* Emergency - Balanced */}
        <EmergencyCallout />
      </Container>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="bg-surface rounded-3xl p-8 border border-neutral-100 flex flex-col group hover:bg-white hover:shadow-card transition-all duration-400"
    >
      <div className="w-12 h-12 rounded-xl bg-white shadow-soft flex items-center justify-center mb-6 text-secondary group-hover:bg-primary group-hover:text-white transition-all">
        <service.Icon size={24} strokeWidth={1.5} />
      </div>
      
      <h3 className="font-heading font-bold text-primary text-lg mb-2 leading-tight">
        {service.title}
      </h3>
      
      <p className="font-body text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">
        {service.description}
      </p>
      
      <a 
        href={WHATSAPP_URL}
        className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest group-hover:text-secondary transition-colors"
      >
        <span>Detalhes</span>
        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.article>
  );
}

function EmergencyCallout() {
  return (
    <AnimatedSection className="mt-20">
      <aside className="p-8 md:p-12 bg-primary rounded-[3rem] text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-accent flex-shrink-0">
              <Clock size={32} />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xl text-white mb-1">
                Serviço de Urgência 24 Horas
              </h4>
              <p className="font-body text-white/40 text-sm max-w-lg">
                Equipe médica de prontidão para diagnósticos rápidos e intervenções críticas a qualquer momento.
              </p>
            </div>
          </div>
          <Button href={WHATSAPP_URL} variant="accent" size="lg" className="w-full lg:w-auto shadow-sm">
            <MessageCircle size={18} />
            <span>Falar com Plantonista</span>
          </Button>
        </div>
      </aside>
    </AnimatedSection>
  );
}
