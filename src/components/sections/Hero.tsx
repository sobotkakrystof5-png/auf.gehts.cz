"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-semibold tracking-wider uppercase w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            Vaše cesta ke studiu v Německu začíná zde
          </div>

          <div className="relative">
            <h1 className="text-7xl md:text-9xl font-extrabold leading-[0.85] tracking-tighter">
              AUF<br />
              <span className="text-gold italic font-serif">GEHTS.</span>
            </h1>
          </div>

          <p className="text-xl md:text-3xl text-muted-foreground max-w-2xl leading-relaxed font-light">
            Odborné konzultace pro zájemce o <span className="text-foreground font-medium">studium v Německu</span> a individuální příprava v němčině. Od někoho, kdo touto cestou sám úspěšně prošel.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <a
              href="#kontakt"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "bg-gold hover:bg-gold-hover text-background text-xl font-bold px-10 h-16 rounded-2xl shadow-[0_10px_30px_rgba(201,168,76,0.4)] transition-all hover:scale-105"
              )}
            >
              Nezávazná konzultace →
            </a>
            <a
              href="#sluzby"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-gold/30 hover:bg-gold/5 text-foreground text-xl h-16 rounded-2xl px-10 backdrop-blur-sm"
              )}
            >
              Moje služby
            </a>
          </div>

        </motion.div>

        {/* Large New Logo Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="relative lg:flex items-center justify-center"
        >
          <div className="absolute w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] animate-pulse" />
          <div className="relative z-10 w-full max-w-xl aspect-square flex items-center justify-center">
            <div className="relative w-full h-full rounded-[4rem] border border-gold/10 bg-secondary/5 backdrop-blur-3xl shadow-[0_0_50px_rgba(201,168,76,0.1)] flex items-center justify-center overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent opacity-30" />
               <div className="relative w-full h-full p-8 md:p-12">
                 <Image 
                  src="/logo_new.jpg" 
                  alt="AUF GEHTS" 
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                 />
               </div>
               <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-colors" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
