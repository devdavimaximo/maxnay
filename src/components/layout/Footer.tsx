"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { MessageCircle, Mail, MapPin, Clock, Phone, Heart, Globe, Sparkles } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5551995204679?";

const navLinks = [
  { label: "Quem Somos", href: "#sobre" },
  { label: "Nosso Time", href: "#equipe" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const serviceLinks = [
  "Consulta de Rotina",
  "Cirurgias Avançadas",
  "Internamento 24h",
  "Exames de Imagem",
  "Odontologia Pet",
  "Banho e Tosa Premium",
];

export default function Footer() {
  return (
    <footer className="bg-primary pt-24 pb-12 relative overflow-hidden">
      {/* Visual background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          {/* Brand Identity Column */}
          <article className="lg:col-span-4">
             <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-accent">
                   <Heart size={28} fill="currentColor" />
                </div>
                <div>
                   <h3 className="font-heading font-bold text-2xl text-white leading-none mb-1">Maxnay</h3>
                   <p className="font-body text-xs text-secondary font-bold uppercase tracking-widest">Veterinária Premium</p>
                </div>
             </div>
             <p className="font-body text-white/50 text-base leading-relaxed mb-10 max-w-sm break-words">
                Elevando o padrão de cuidado animal em Balneário Camboriú. Medicina de precisão com o acolhimento que seu pet merece.
             </p>
             
          </article>

          {/* Navigation Link Groups */}
          <nav className="lg:col-span-2">
             <h4 className="font-heading font-bold text-white text-xs uppercase tracking-[0.2em] mb-8">Links Rápidos</h4>
             <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="font-body text-sm text-white/40 hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
             </ul>
          </nav>

          <section className="lg:col-span-3">
             <h4 className="font-heading font-bold text-white text-xs uppercase tracking-[0.2em] mb-8">Especialidades</h4>
             <ul className="space-y-4">
                {serviceLinks.map(link => (
                  <li key={link} className="font-body text-sm text-white/40 whitespace-nowrap overflow-hidden text-ellipsis">{link}</li>
                ))}
             </ul>
          </section>

          {/* Contact and Service Status */}
          <aside className="lg:col-span-3">
             <h4 className="font-heading font-bold text-white text-xs uppercase tracking-[0.2em] mb-8">Contato</h4>
             <div className="space-y-6">
                <div className="flex gap-4 items-start">
                   <MapPin size={20} className="text-secondary shrink-0" />
                   <address className="font-body text-sm text-white/60 leading-snug not-italic break-words">
                     Rua das Nações, 1234 — Centro, Balneário Camboriú, SC
                   </address>
                </div>
                <div className="flex gap-4 items-center">
                   <Phone size={20} className="text-secondary shrink-0" />
                   <div className="font-body text-sm font-bold text-white">(51) 99520-4679</div>
                </div>
                <div className="flex gap-4 items-center">
                   <Clock size={20} className="text-accent shrink-0" />
                   <div className="font-body text-sm text-accent font-bold uppercase tracking-wider">Emergência 24h Disponível</div>
                </div>
                <Button href={WHATSAPP_URL} fullWidth className="mt-4 shadow-glow">
                   <MessageCircle size={18} />
                   <span>Agendar Consulta</span>
                </Button>
             </div>
          </aside>
        </div>

        {/* Legal and Copyright Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="font-body text-[10px] text-white/20 uppercase tracking-widest">© {new Date().getFullYear()} Davi Maximo Quoos</p>
           <nav className="flex gap-8">
              <a href="#" className="font-body text-[10px] text-white/20 hover:text-white/40 uppercase tracking-widest transition-colors">Privacidade</a>
              <a href="#" className="font-body text-[10px] text-white/20 hover:text-white/40 uppercase tracking-widest transition-colors">Termos</a>
           </nav>
        </div>
      </Container>
    </footer>
  );
}
