"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Heading from "@/components/ui/Heading";
import Container from "@/components/ui/Container";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "A clínica atende emergências 24 horas?",
    answer: "Sim, operamos em regime de prontidão total, 365 dias por ano, com equipe médica completa no local para diagnósticos e intervenções.",
  },
  {
    question: "Como funciona o agendamento de consultas?",
    answer: "Para especialidades e rotina, o agendamento pode ser feito de forma rápida via WhatsApp. Emergências são atendidas prioritariamente na chegada.",
  },
  {
    question: "Quais são as modalidades de pagamento aceitas?",
    answer: "Aceitamos todos os cartões (débito/crédito com parcelamento), PIX e também trabalhamos com reembolso de diversos convênios veterinários.",
  },
  {
    question: "A clínica possui laboratório próprio?",
    answer: "Sim, contamos com laboratório clínico in-house, o que nos permite entregar resultados de exames fundamentais em tempo recorde.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-surface py-20">
      <Container size="md">
        <AnimatedSection className="text-center mb-16">
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6 text-secondary">
             <HelpCircle size={32} />
          </div>
          <Heading subtitle="Ajuda" centered className="mb-0">
             Dúvidas Frequentes.
          </Heading>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem 
              key={i} 
              faq={faq} 
              isOpen={openIndex === i} 
              onClick={() => setOpenIndex(openIndex === i ? null : i)} 
              index={i} 
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function FAQItem({ faq, isOpen, onClick, index }: { faq: typeof faqs[0], isOpen: boolean, onClick: () => void, index: number }) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <article className={`rounded-2xl border transition-all duration-400 overflow-hidden ${isOpen ? "bg-white border-primary/5 shadow-card" : "bg-transparent border-neutral-200 hover:border-primary/20"}`}>
        <button
          className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span className={`font-heading font-bold text-lg md:text-xl pr-6 break-words tracking-tight transition-colors ${isOpen ? "text-primary" : "text-neutral-600 group-hover:text-primary"}`}>
            {faq.question}
          </span>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all flex-shrink-0 ${isOpen ? "bg-primary text-white" : "bg-surface text-neutral-400 group-hover:bg-neutral-100"}`}>
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 md:px-8 pb-8 font-body text-neutral-500 text-sm md:text-base leading-relaxed border-t border-neutral-50 pt-6 mx-6 md:mx-8">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </AnimatedSection>
  );
}
