"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const timeline = [
  {
    title: "Úroveň A2 — bod nula",
    description: "Začátky byly výzvou. Se základními znalostmi se cesta k plynné němčině zdála nekonečná.",
    year: "Začátek",
  },
  {
    title: "Z A2 na C1 — intenzivní progres",
    description: "Půl roku cílené práce a vlastní metodiky. Výsledek? Jazykový certifikát úrovně C1.",
    year: "6 měsíců",
  },
  {
    title: "Úspěchy v jazykových soutěžích",
    description: "Přední umístění v krajských i celostátních kolech potvrdila efektivitu mého přístupu.",
    year: "Výsledky",
  },
  {
    title: "Přijímací řízení v zahraničí",
    description: "Zkušenost s náročnými testy na prestižní školy v Rakousku a Německu. Cenná lekce pro další růst.",
    year: "Zkušenost",
  },
  {
    title: "Top 10 v České republice",
    description: "Umístění mezi nejlepšími v zemi v rámci olympiád v německém jazyce.",
    year: "Elita",
  },
  {
    title: "Studuji v Německu",
    description: "Splněný cíl. Nyní pomáhám ostatním projít stejnou cestou efektivně a bez chyb.",
    year: "Současnost",
  },
];

export function Story() {
  return (
    <section id="pribeh" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Cesta, která mě <span className="text-gold italic font-serif">sem přivedla.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-gold mx-auto rounded-full"
          />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden md:block" />

          <div className="space-y-12 relative">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={cn(
                  "flex flex-col md:flex-row items-center gap-8 w-full",
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                <div className={cn("flex-1 text-center md:text-right w-full", i % 2 === 0 ? "md:text-right" : "md:text-left")}>
                  <div className="text-gold font-mono text-sm uppercase tracking-widest mb-1">{item.year}</div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
                
                {/* Timeline Node */}
                <div className="relative z-20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-background border-2 border-gold flex items-center justify-center shadow-[0_0_15px_rgba(201,168,76,0.3)]">
                    <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
