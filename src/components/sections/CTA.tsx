"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { MessageCircle, Phone, Heart, Star, Activity } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/554712345679?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta!";

const badges = [
  { icon: Star, label: "4.9★ Google" },
  { icon: Heart, label: "Humanizado" },
  { icon: Activity, label: "24h Ativa" },
];

export default function CTA() {
  return (
    <section id="cta" className="section-padding bg-white relative overflow-hidden py-24">
      <Container size="lg">
        <AnimatedSection>
          <div className="relative bg-primary rounded-[3rem] p-10 md:p-16 lg:p-24 text-center overflow-hidden shadow-glow">
            {/* Soft lights */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            
            <article className="relative z-10 max-w-2xl mx-auto">
              <header className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-8">
                 <span className="font-body text-[10px] font-bold text-white/70 uppercase tracking-widest leading-none">Agendamentos Imediatos</span>
              </header>

              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-8 leading-tight break-words">
                A saúde de quem você ama <br className="hidden md:block" /> está a um <span className="text-accent">clique.</span>
              </h2>

              <p className="font-body text-white/40 text-base md:text-lg leading-relaxed mb-12 max-w-lg mx-auto">
                Prevenção é o maior ato de amor que você oferece ao seu pet hoje. Fale conosco agora.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                 <Button href={WHATSAPP_URL} variant="accent" size="lg" className="w-full sm:w-auto px-10">
                    <MessageCircle size={20} />
                    <span>WhatsApp Direto</span>
                 </Button>
                 <Button href="tel:+554712345679" variant="ghost" size="lg" className="text-white/60 hover:text-white w-full sm:w-auto">
                    <Phone size={18} />
                    <span>Ligar no Hospital</span>
                 </Button>
              </div>

              {/* Trust badges footer */}
              <footer className="flex flex-wrap justify-center gap-8 md:gap-12 pt-10 border-t border-white/5">
                 {badges.map((badge, i) => (
                   <div key={i} className="flex items-center gap-2 text-white/30">
                      <badge.icon size={16} className="text-accent/50" />
                      <span className="font-body text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">{badge.label}</span>
                   </div>
                 ))}
              </footer>
            </article>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
