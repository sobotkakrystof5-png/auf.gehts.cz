"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Pro koho je spolupráce určena?",
    answer: "Moje služby jsou ideální pro studenty, kteří vážně uvažují o studiu v Německu nebo Rakousku, ale postrádají jasnou strategii, jak vybrat správný obor nebo jak zvládnout náročný administrativní proces.",
  },
  {
    question: "Jak probíhá příprava a doučování?",
    answer: "Vše probíhá online prostřednictvím Google Meet nebo Zoom. Zaměřujeme se na praktické využití jazyka, odbourání komunikačních bariér a efektivní přípravu na certifikáty či přijímací zkoušky.",
  },
  {
    question: "Jak probíhá úvodní konzultace?",
    answer: "Během první informativní schůzky probereme vaše cíle, aktuální úroveň němčiny a vaše ambice. Zjistíme, zda pro vás bude moje vedení tím správným krokem k dosažení vašich cílů.",
  },
  {
    question: "Za jak dlouho lze dosáhnout úrovně C1?",
    answer: "Individuální progres závisí na vaší výchozí úrovni a nasazení. Moje metodika se zaměřuje na nejkratší možnou cestu, kterou jsem sám využil při přechodu z A2 na C1 během rekordně krátké doby.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Často kladené <span className="text-gold italic font-serif">otázky</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg">Vše, co potřebuješ vědět před začátkem naší spolupráce.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-[2rem] border border-gold/10"
        >
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-gold/10 last:border-0 px-2">
                <AccordionTrigger className="text-xl md:text-2xl font-bold hover:text-gold transition-colors text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
