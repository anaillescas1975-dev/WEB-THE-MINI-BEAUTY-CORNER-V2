import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { SpaActivities } from './components/SpaActivities';
import { PacksAndDetails } from './components/PacksAndDetails';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsAppAvatar } from './components/FloatingWhatsAppAvatar';
import { ThemeMusicPlayer } from './components/ThemeMusicPlayer';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedPacksCount, setSelectedPacksCount] = useState<number>(0);

  const handleSelectPacks = (count: number) => {
    setSelectedPacksCount(count);
  };

  return (
    <div className="min-h-screen bg-[#FCF9FB] text-slate-800 flex flex-col font-sans selection:bg-pink-200 selection:text-purple-900">
      {/* 1. Cabecera (Navbar con logotipo oficial destacado & Menú minimalista) */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. "About Us" / Nuestra Historia */}
        <AboutMe />

        {/* 3. "Spa Party & Activities" Section */}
        <SpaActivities />

        {/* 4. "Packages & Details" Section (TMBC Beauty Pack 12€) */}
        <PacksAndDetails onSelectPacks={handleSelectPacks} />

        {/* 5. "Testimonials" Section */}
        <Testimonials />

        {/* 6. Contact Section Simplified */}
        <ContactSection initialPacksCount={selectedPacksCount} />
      </main>

      {/* Footer */}
      <Footer />

      {/* 6. Floating Bottom Elements */}
      <ThemeMusicPlayer />
      <FloatingWhatsAppAvatar />
    </div>
  );
}
