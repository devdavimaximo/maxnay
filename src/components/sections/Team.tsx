"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { User, Mail, Stethoscope, Heart, Shield, Star } from "lucide-react";

const teamMembers = [
  {
    name: "Dra. Nayara Maximo",
    role: "Clínica Médica",
    crmv: "CRMV-RS 29.1027",
    bio: "Especialista em medicina clínica de felinos e caninos com foco em diagnósticos complexos.",
    Icon: Stethoscope,
  },
  {
    name: "Dr. Rafael Costa",
    role: "Cirurgião Ortopedista",
    crmv: "CRMV-SC 8.921",
    bio: "Referência em cirurgias ortopédicas de alta complexidade e técnicas minimamente invasivas.",
    Icon: Shield,
  },
  {
    name: "Dra. Mariana Torres",
    role: "Dermatologia",
    crmv: "CRMV-SC 15.678",
    bio: "Dedicação exclusiva à dermatologia avançada, tratamento de alergias e otologia veterinária.",
    Icon: Star,
  },
  {
    name: "Dr. Lucas Mendes",
    role: "Cardiologia",
    crmv: "CRMV-SC 20.144",
    bio: "Expertise em ecocardiografia e cardiologia clínica para o monitoramento da saúde cardíaca.",
    Icon: Heart,
  },
];

export default function Team() {
  return (
    <section id="equipe" className="section-padding bg-surface">
      <Container size="lg">
        <Heading subtitle="Experts" centered>
          Corpo clínico especializado.
        </Heading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function TeamMemberCard({ member, index }: { member: typeof teamMembers[0], index: number }) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <article className="group bg-white rounded-3xl p-8 border border-neutral-100 hover:shadow-card transition-all duration-400 h-full flex flex-col relative overflow-hidden">
        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-8 text-white shadow-sm flex-shrink-0">
          <member.Icon size={28} strokeWidth={1.5} />
        </div>

        <div className="mb-6">
          <h3 className="font-heading font-bold text-primary text-xl mb-1 break-words">{member.name}</h3>
          <p className="font-body text-secondary text-[11px] font-bold uppercase tracking-widest leading-none mb-2">{member.role}</p>
          <p className="font-body text-neutral-400 text-[9px] font-bold uppercase tracking-wider">{member.crmv}</p>
        </div>

        <p className="font-body text-neutral-500 text-sm leading-relaxed mb-6 flex-grow">
          {member.bio}
        </p>

        <footer className="flex items-center gap-4 pt-6 border-t border-neutral-50">
          <a href="#" className="text-neutral-300 hover:text-primary transition-all" aria-label="Social"><User size={18} /></a>
          <a href="#" className="text-neutral-300 hover:text-primary transition-all" aria-label="E-mail"><Mail size={18} /></a>
        </footer>
      </article>
    </AnimatedSection>
  );
}
