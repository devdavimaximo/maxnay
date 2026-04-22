"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { MapPin, Clock, Phone, Navigation, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/554712345679?text=Ol%C3%A1%2C%20como%20chego%20%C3%A0%20Maxnay%20Veterin%C3%A1ria%3F";

const openingHours = [
  { day: "Segunda a Sexta", time: "08h – 20h" },
  { day: "Sábado", time: "08h – 17h" },
  { day: "Domingo e Feriados", time: "09h – 13h" },
  { day: "Emergência Hospitalar", time: "Atendimento 24h", isSpecial: true },
];

export default function Location() {
  return (
    <section id="localizacao" className="section-padding bg-surface py-20">
      <Container size="lg">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Header and Map Side */}
          <div>
            <header className="mb-10">
              <Heading subtitle="Contato" className="mb-4">
                Onde estamos localizados.
              </Heading>
              <p className="font-body text-neutral-500 text-base leading-relaxed max-w-sm">
                Rua das Nações, 1234 — Balneário Camboriú, SC. No coração do centro para facilitar sua chegada.
              </p>
            </header>

            <AnimatedSection direction="left">
               <article className="bg-white rounded-3xl p-10 md:p-12 border border-neutral-100 shadow-card flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 text-accent">
                     <MapPin size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-primary mb-2">Unidade Central BC</h4>
                  <p className="font-body text-neutral-500 text-sm leading-relaxed mb-10 max-w-xs mx-auto">
                    Rua das Nações, 1234 — Centro<br />
                    Balneário Camboriú – SC, 88330-000
                  </p>
                  <Button href="https://maps.google.com" variant="outline" size="md">
                     <Navigation size={18} />
                     <span>Obter Rota</span>
                  </Button>
               </article>
            </AnimatedSection>
          </div>

          {/* Opening Details Side */}
          <div className="space-y-6">
            <AnimatedSection direction="right">
              <aside className="bg-primary rounded-3xl p-10 text-white shadow-elevated relative overflow-hidden">
                 <h3 className="font-heading font-bold text-xl mb-8 flex items-center gap-3">
                    <Clock size={20} className="text-accent" />
                    Horários
                 </h3>
                 <div className="space-y-4">
                    {openingHours.map((item, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                        <span className="font-body text-[13px] text-white/50">{item.day}</span>
                        <span className={`font-body font-bold text-[13px] ${item.isSpecial ? "text-accent" : "text-white"}`}>
                          {item.time}
                        </span>
                      </div>
                    ))}
                 </div>
              </aside>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="bg-white rounded-3xl p-10 border border-neutral-100 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
                 <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0 shadow-sm">
                       <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-body text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">Telefone</p>
                      <p className="font-heading font-bold text-2xl text-primary leading-none">(47) 1234-5679</p>
                    </div>
                 </div>
                 <Button href={WHATSAPP_URL} variant="secondary" size="md" className="w-full md:w-auto">
                    <MessageCircle size={18} />
                    <span>WhatsApp</span>
                 </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
