import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Services } from "@/components/sections/Services";
import { Investment } from "@/components/sections/Investment";
import { AboutMe } from "@/components/sections/AboutMe";
import { FAQ } from "@/components/sections/FAQ";
import { Contact, Footer } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Services />
        <Investment />
        <AboutMe />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
