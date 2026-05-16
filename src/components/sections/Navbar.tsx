"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { name: "Příběh", href: "#pribeh" },
  { name: "Služby", href: "#sluzby" },
  { name: "O mně", href: "#omne" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-gold/10 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter flex items-center gap-4 group"
        >
          <div className="relative w-12 h-12 overflow-hidden rounded-xl shadow-lg border border-gold/20 group-hover:border-gold/50 transition-all duration-500">
            <Image 
              src="/logo_new.jpg" 
              alt="AUF GEHTS" 
              fill
              sizes="48px"
              className="object-cover" 
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-gold text-2xl font-black tracking-tight group-hover:tracking-normal transition-all duration-500">AUF</span>
            <span className="text-foreground text-xs uppercase tracking-[0.4em] font-semibold opacity-70 group-hover:opacity-100 transition-opacity">GEHTS.</span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <a
              href="#kontakt"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-gold/30 hover:border-gold hover:bg-gold/10 text-gold h-10 px-6 rounded-lg font-bold tracking-wide"
              )}
            >
              Konzultace
            </a>
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold/30 shadow-md group-hover:border-gold transition-colors">
              <Image 
                src="/profile_new.jpg" 
                alt="Profil" 
                fill 
                sizes="40px"
                className="object-cover" 
              />
            </div>
          </motion.div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-gold/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium py-2 border-b border-gold/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#kontakt"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-gold hover:bg-gold-hover text-background w-full"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Konzultace zdarma
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
