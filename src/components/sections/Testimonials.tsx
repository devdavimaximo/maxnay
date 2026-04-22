"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { Star, ChevronLeft, ChevronRight, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Fernanda Oliveira",
    pet: "Tutora do Bento",
    rating: 5,
    text: "A Maxnay salvou a vida do meu Bento! Ele teve uma crise séria de madrugada e foi atendido imediatamente. A equipe foi impecável em cada segundo.",
  },
  {
    name: "Carlos Mendes",
    pet: "Tutor da Luna",
    rating: 5,
    text: "Minha Luna é muito ansiosa, mas a estrutura da Maxnay é pensada para deixar os animais confortáveis. Atendimento humanizado e excelente.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="depoimentos" className="section-padding bg-white relative overflow-hidden py-24">
      <Container size="lg">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Header */}
          <article className="lg:col-span-5">
             <header className="mb-12">
                <Heading subtitle="Relatos" className="mb-4">
                   Vozes que confiam.
                </Heading>
                <p className="font-body text-neutral-500 text-base md:text-lg mt-6 leading-relaxed max-w-sm">
                   A experiência de quem encontrou na Maxnay o porto seguro para seus melhores amigos.
                </p>
             </header>
             
             <div className="flex gap-4">
                <SatisfactionStat label="Google Views" value="4.9/5" />
                <SatisfactionStat label="NPS Score" value="98%" />
             </div>
          </article>

          {/* Carousel */}
          <div className="lg:col-span-7">
             <AnimatedSection direction="right">
                <div className="bg-surface rounded-3xl p-10 md:p-12 border border-neutral-100 shadow-card relative z-10 min-h-[360px] flex flex-col justify-center">
                   <AnimatePresence mode="wait">
                      <TestimonialSlide key={active} testimonial={testimonials[active]} />
                   </AnimatePresence>

                   <div className="absolute -bottom-6 right-8 flex gap-3">
                      <CarouselButton onClick={prev} ariaLabel="Anterior">
                        <ChevronLeft size={20} />
                      </CarouselButton>
                      <CarouselButton onClick={next} variant="primary" ariaLabel="Próximo">
                        <ChevronRight size={20} />
                      </CarouselButton>
                   </div>
                </div>
             </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SatisfactionStat({ label, value }: { label: string, value: string }) {
  return (
    <div className="p-6 bg-surface rounded-2xl border border-neutral-100 flex-1">
      <div className="font-heading font-bold text-2xl text-primary mb-1 leading-none">{value}</div>
      <p className="font-body text-[9px] text-neutral-400 font-bold uppercase tracking-widest">{label}</p>
    </div>
  );
}

function TestimonialSlide({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col h-full"
    >
      <div className="flex gap-1 mb-6">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} className="text-accent" fill="currentColor" />
        ))}
      </div>
      
      <blockquote className="font-body text-lg md:text-xl text-primary leading-relaxed mb-8 italic opacity-90">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      
      <footer className="flex items-center gap-4 mt-auto pt-6 border-t border-neutral-200/50">
        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-accent flex-shrink-0 shadow-sm">
          <Heart size={24} fill="currentColor" />
        </div>
        <div>
          <h4 className="font-heading font-bold text-primary text-lg leading-none">{testimonial.name}</h4>
          <p className="font-body text-neutral-400 text-xs mt-1">{testimonial.pet}</p>
        </div>
      </footer>
    </motion.div>
  );
}

function CarouselButton({ children, onClick, variant = "secondary", ariaLabel }: { children: React.ReactNode, onClick: () => void, variant?: "primary" | "secondary", ariaLabel: string }) {
  const base = "w-12 h-12 rounded-xl shadow-soft flex items-center justify-center transition-all border active:scale-95";
  const styles = variant === "primary" 
    ? "bg-primary text-white border-primary hover:bg-primary-light" 
    : "bg-white text-primary border-neutral-100 hover:bg-surface";
    
  return (
    <button onClick={onClick} className={`${base} ${styles}`} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
