'use client'
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import SkillsSection from "@/components/SkillsSection";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import ProjectSection from "@/components/ProjectSection";
import { FEMsets1 } from "@/components/FEMsets";
import FEMSection from "@/components/FEMSection";

export default function Home() {
  return (
    <main className="min-h-screen relative">
        <NavBar />
      
      <section className="w-full h-screen px-4">
        <HeroSection />
      </section>

      <section id='aboutme' className="w-full min-h-screen bg-slate-50 px-4 py-10 flex flex-col justify-center items-center gap-12">
        <AboutSection />
      </section>

      <section className="w-full min-h-screen  px-4 py-10 flex justify-center items-center">
        <Certifications />
      </section>
      
      <section className="w-full min-h-screen bg-slate-50 px-4 py-10 flex justify-center items-center">
        <SkillsSection />
      </section>

      <section className="w-full min-h-screen  px-4 py-10 flex justify-center items-center">
        <ProjectSection />
      </section>
      <FEMSection/>

      <section className="w-full min-h-screen bg-slate-50 px-4 py-10 flex justify-center items-center">
        <Contact />
      </section>

      
    </main>
  );
}
