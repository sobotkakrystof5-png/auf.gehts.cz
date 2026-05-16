"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { Camera, Globe, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="kontakt" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-secondary/40 border border-gold/20 rounded-[3rem] p-8 md:p-20 text-center backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">
            Připraven <span className="text-gold italic font-serif text-glow-gold">začít?</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Nečekej na „vhodnou chvíli“. Ta je právě teď. Udělej první krok ke svému studiu v zahraničí.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:info@aufgehts.cz"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "bg-gold hover:bg-gold-hover text-background text-xl font-bold h-16 px-12 rounded-2xl group transition-all hover:scale-105 shadow-2xl shadow-gold/20"
              )}
            >
              Rezervovat konzultaci <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-4 items-center justify-center sm:ml-4">
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground hover:text-gold hover:border-gold/30 transition-all">
                <Camera size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground hover:text-gold hover:border-gold/30 transition-all">
                <Globe size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-gold/5 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <span className="text-gold">Auf</span>
            <span className="text-foreground">Gehts.</span>
          </div>
          
          <nav className="flex gap-8">
            <a href="#pribeh" className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors">Příběh</a>
            <a href="#sluzby" className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors">Služby</a>
            <a href="#omne" className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors">O mně</a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors">FAQ</a>
          </nav>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Auf Gehts. Všechna práva vyhrazena.
          </div>
        </div>
      </div>
    </footer>
  );
}
