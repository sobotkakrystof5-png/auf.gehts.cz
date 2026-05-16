"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutMe() {
  return (
    <section id="omne" className="py-24 relative overflow-hidden bg-secondary/10">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
            <div className="relative z-10 rounded-[2rem] border border-gold/10 overflow-hidden shadow-2xl max-w-sm">
              <Image
                src="/profile_new.jpg"
                alt="Moje fotografie"
                width={600}
                height={800}
                className="w-full h-auto object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
                <div className="flex gap-8">
                  <div>
                    <div className="text-gold font-bold text-2xl">100+</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Konzultací</div>
                  </div>
                  <div>
                    <div className="text-gold font-bold text-2xl">10+</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Škol v DE/AT</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="text-gold font-mono text-xs uppercase tracking-[0.3em] block mb-4">Můj příběh</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">
                Průvodce na vaší cestě za <span className="text-gold italic font-serif">vzděláním v Německu.</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                <p>
                  Sám jsem si prošel cestou českého studenta v Německu. Rozumím nejistotě,
                  kterou přináší začátky v cizí zemi, náročné přijímací procesy i pochybnosti o vlastních jazykových schopnostech.
                </p>
                <p className="text-foreground/80 font-medium text-xl leading-relaxed border-l-2 border-gold/50 pl-5">
                  Pomáhám studentům najít směr a vyhnout se chybám na cestě do Německa.
                </p>
                <p>
                  Od prvních kroků s němčinou až po úspěšné přijetí — všechny zkušenosti jsem přetavil do efektivního systému,
                  který ti ušetří měsíce tápání. Žádná teorie, jen reálná praxe z každodenního studia v zahraničí.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {[
                "Reálné zkušenosti z DE škol",
                "Metodika z A2 na C1",
                "Individuální mentoring",
                "Prověřené postupy",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
