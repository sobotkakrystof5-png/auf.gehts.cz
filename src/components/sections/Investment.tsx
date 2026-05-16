"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Clock, Trophy } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

const stats = [
  {
    icon: TrendingUp,
    value: 3,
    suffix: "×",
    label: "rychlejší adaptace",
    desc: "Přeskočíš nejdražší chyby a orientuješ se od první chvíle.",
    color: "from-gold/20 to-gold/5",
    border: "border-gold/25",
    iconBg: "bg-gold/15",
  },
  {
    icon: Clock,
    value: 100,
    suffix: "+",
    label: "hodin ušetřeno",
    desc: "Méně času hledáním, více času na to, co skutečně rozhoduje.",
    color: "from-blue-500/10 to-transparent",
    border: "border-blue-500/15",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Trophy,
    value: 94,
    suffix: "%",
    label: "vyšší šance na úspěch",
    desc: "Se správným průvodcem výrazně rostou tvoje šance na studium a práci v Německu.",
    color: "from-emerald-500/10 to-transparent",
    border: "border-emerald-500/15",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
];

function StatCard({ stat, index, active }: { stat: typeof stats[0]; index: number; active: boolean }) {
  const count = useCountUp(stat.value, 1200, active);
  const Icon = stat.icon;
  const iconColor = stat.iconColor ?? "text-gold";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={cn(
        "relative rounded-3xl border bg-gradient-to-br backdrop-blur-xl overflow-hidden p-8 md:p-10 flex flex-col gap-6 group",
        stat.color,
        stat.border
      )}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:scale-110", stat.iconBg, stat.border)}>
        <Icon className={cn("size-7", iconColor)} />
      </div>

      <div>
        <div className="flex items-end gap-1 mb-2">
          <span className={cn("text-6xl font-black tracking-tighter tabular-nums", iconColor)}>
            {count}
          </span>
          <span className={cn("text-4xl font-black mb-1", iconColor)}>{stat.suffix}</span>
        </div>
        <div className="text-foreground font-bold text-lg mb-2">{stat.label}</div>
        <p className="text-muted-foreground text-sm leading-relaxed">{stat.desc}</p>
      </div>
    </motion.div>
  );
}

export function Investment() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-gold font-mono text-sm uppercase tracking-widest block mb-4"
          >
            Proč to stojí za to
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Investice, která se{" "}
            <span className="text-gold italic font-serif">vrátí.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Správné rozhodnutí na začátku ušetří měsíce tápání a otevře dveře, které by jinak zůstaly zavřené.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} active={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakt"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "bg-gold hover:bg-gold-hover text-background font-bold px-10 h-14 rounded-2xl shadow-[0_8px_30px_rgba(201,168,76,0.35)] hover:shadow-[0_12px_40px_rgba(201,168,76,0.45)] transition-all hover:scale-105 text-base"
              )}
            >
              Domluvit konzultaci →
            </a>
            <a
              href="#sluzby"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-gold/30 hover:bg-gold/5 text-foreground h-14 rounded-2xl px-8 text-base"
              )}
            >
              Začít mentoring
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
