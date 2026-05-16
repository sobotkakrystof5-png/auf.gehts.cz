"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages, MessageCircle, Star, BookOpen, Plane, School, Briefcase, ArrowUpRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const comingSoonCourses = [
  { title: "A2–C1", icon: BookOpen, desc: "Kompletní jazyková cesta" },
  { title: "Cesta do Německa", icon: Plane, desc: "Krok za krokem k výjezdu" },
  { title: "Německé gymnázium A–Z", icon: School, desc: "Průvodce přijímacím řízením" },
  { title: "Brigády v Německu", icon: Briefcase, desc: "Práce a život v zahraničí" },
];

const coreServices = [
  {
    title: "Konzultace studia v Německu",
    description: "Kompletní průvodce procesem přijetí na školy v Německu. Od výběru oboru, přes požadavky na přijetí, až po veškeré formality a administrativu.",
    icon: GraduationCap,
    cta: "Domluvit konzultaci",
    href: "#kontakt",
    featured: false,
  },
  {
    title: "Online doučování němčiny A1–B2",
    description: "Individuální lekce zaměřené na praktické použití jazyka — bez zbytečného důrazu na certifikáty. Progres, který je vidět.",
    icon: Languages,
    cta: "Zjistit více",
    href: "#kontakt",
    featured: false,
  },
  {
    title: "Konverzace",
    description: "Plynulá komunikace je základ. Lekce zaměřené na sebejistý projev v reálných situacích — škola, práce, každodenní život.",
    icon: MessageCircle,
    cta: "Zjistit více",
    href: "#kontakt",
    featured: false,
  },
];

export function Services() {
  return (
    <section id="sluzby" className="py-32 relative overflow-hidden bg-background">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold font-mono text-sm uppercase tracking-widest block mb-3"
          >
            Moje Expertise
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight max-w-xl"
            >
              Jak ti mohu <span className="text-gold italic font-serif">pomoci?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg max-w-sm"
            >
              Individuální přístup vycházející z reálných zkušeností ze studia a života v Německu.
            </motion.p>
          </div>
        </div>

        {/* MAIN — Online mentoring (most prominent) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative mb-6 rounded-[2.5rem] border border-gold/25 bg-gradient-to-br from-gold/10 via-secondary/30 to-secondary/10 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_rgba(201,168,76,0.08)] hover:shadow-[0_0_80px_rgba(201,168,76,0.15)] transition-all duration-700 hover:border-gold/40"
        >
          {/* Decorative top line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          {/* Glow blob */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/10 rounded-full blur-[80px] group-hover:bg-gold/15 transition-colors duration-700" />

          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase mb-6">
                <Star size={12} className="fill-gold" />
                Hlavní služba
              </div>
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(201,168,76,0.15)]">
                  <Star className="text-gold" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
                    Online mentoring
                  </h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    Strukturovaný program, který tě provede celou cestou — od výběru školy přes přípravu v němčině až po úspěšné přijetí. Osobní průvodce, který touto cestou sám prošel.
                  </p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-3 mb-8">
                {["Individuální plán", "Týdenní check-iny", "Přímá podpora", "Reálné výsledky"].map((tag) => (
                  <li key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-gold/15 text-sm text-foreground/70 font-medium">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#kontakt"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "bg-gold hover:bg-gold-hover text-background font-bold px-10 h-14 rounded-2xl shadow-[0_8px_30px_rgba(201,168,76,0.35)] hover:shadow-[0_12px_40px_rgba(201,168,76,0.45)] transition-all hover:scale-105 text-base"
                  )}
                >
                  Začít mentoring →
                </a>
                <a
                  href="#kontakt"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-gold/30 hover:bg-gold/5 text-foreground h-14 rounded-2xl px-8 text-base"
                  )}
                >
                  Domluvit konzultaci
                </a>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-4 min-w-[200px]">
              {[
                { label: "Studentů", value: "50+" },
                { label: "Úspěšnost", value: "94%" },
                { label: "Zemí", value: "DE/AT" },
              ].map((stat) => (
                <div key={stat.label} className="glass-gold rounded-2xl px-6 py-4 text-center border border-gold/20">
                  <div className="text-gold font-black text-3xl">{stat.value}</div>
                  <div className="text-muted-foreground text-xs uppercase tracking-widest font-semibold mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core 3 services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
          {coreServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl border border-gold/10 bg-secondary/20 backdrop-blur-sm hover:border-gold/30 hover:bg-secondary/40 transition-all duration-500 overflow-hidden p-8 flex flex-col gap-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-gold" size={18} />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="text-gold" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>

              <div className="relative z-10 mt-auto">
                <a
                  href={service.href}
                  className="text-gold text-sm font-bold tracking-wide hover:underline underline-offset-4 transition-all group-hover:gap-2 inline-flex items-center gap-1"
                >
                  {service.cta} <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Online kurzy — Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-3xl border border-white/8 bg-secondary/10 backdrop-blur-sm overflow-hidden"
        >
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-xs font-bold tracking-widest uppercase mb-3">
                  <Clock size={11} />
                  Připravujeme
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Online kurzy</h3>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">
                Strukturované kurzy pro každou fázi cesty do Německa. Brzy k dispozici.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {comingSoonCourses.map((course, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-white/6 bg-white/3 hover:bg-white/6 hover:border-gold/15 transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/8 border border-gold/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <course.icon className="text-gold/60" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5">{course.title}</div>
                    <div className="text-muted-foreground text-xs leading-relaxed">{course.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
