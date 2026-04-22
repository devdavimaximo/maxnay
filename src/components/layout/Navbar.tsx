"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Heart } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Equipe", href: "#equipe" },
  { name: "FAQ", href: "#faq" },
];

const WHATSAPP_URL = "https://wa.me/554712345679?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta!";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-2xl border-b border-neutral-100/50 py-4 shadow-soft" 
          : "bg-transparent py-8"
      }`}
    >
      <Container as="nav" className="flex items-center justify-between">
        {/* Logo - More breathing space */}
        <a href="#" className="flex items-center gap-4 group flex-shrink-0" aria-label="Maxnay Veterinária Home">
          <div className="w-12 h-12 rounded-[1rem] bg-primary flex items-center justify-center shadow-card group-hover:scale-110 transition-transform duration-500">
            <Heart size={28} className="text-accent" fill="currentColor" />
          </div>
          <div className="flex flex-col">
            <span className={`font-heading font-bold text-2xl leading-none transition-colors duration-500 ${isScrolled ? "text-primary" : "text-white"}`}>
              Maxnay
            </span>
            <span className={`font-body text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-500 ${isScrolled ? "text-secondary" : "text-accent"}`}>
              Veterinária
            </span>
          </div>
        </a>

        {/* Desktop Navigation - Increased spacing */}
        <ul className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`font-body text-sm font-bold transition-all duration-300 hover:text-accent hover:-translate-y-0.5 whitespace-nowrap ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button - More impactful */}
        <div className="hidden lg:block flex-shrink-0 ml-4">
          <Button href={WHATSAPP_URL} variant={isScrolled ? "primary" : "accent"} size="md" className="shadow-glow px-10">
            <MessageCircle size={20} />
            <span>Agendar Consulta</span>
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={`lg:hidden p-3 rounded-2xl transition-all duration-300 ${
            isScrolled ? "text-primary hover:bg-surface" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </Container>

      {/* Mobile Menu Overlay - More spacious */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="lg:hidden absolute top-0 left-0 right-0 h-screen bg-white z-[60] flex flex-col items-center justify-center text-center p-12"
          >
             <button 
               className="absolute top-10 right-10 p-4 text-primary"
               onClick={() => setIsMobileMenuOpen(false)}
             >
                <X size={40} />
             </button>
             
             <ul className="space-y-10 mb-16">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block font-heading font-bold text-5xl text-primary active:text-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <Button href={WHATSAPP_URL} fullWidth size="lg" className="py-6 text-xl">
              <MessageCircle size={24} />
              <span>Agendar via WhatsApp</span>
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
