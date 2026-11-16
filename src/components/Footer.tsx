import React from 'react';
import { Heart, Instagram, Facebook } from 'lucide-react';
import { LOGO_IMAGE } from '../data/cornerData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-pink-100 bg-white/80 pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-pink-100/60">
          {/* Brand Wordmark with official logo */}
          <div className="flex items-center gap-3">
            <img
              src={LOGO_IMAGE}
              alt="Logo oficial The Mini Beauty Corner"
              className="w-10 h-10 rounded-full object-contain drop-shadow-xs"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-base font-bold text-purple-950 font-display leading-tight">
                THE MINI <span className="text-pink-600">BEAUTY</span> CORNER
              </span>
              <span className="text-[10px] text-purple-700/80 uppercase tracking-wider font-medium">
                Corner de Belleza Infantil
              </span>
            </div>
          </div>

          {/* Nav links mirror */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-purple-900/75">
            <a href="#historia" className="hover:text-pink-600 transition-colors">Nuestra Historia</a>
            <a href="#actividades" className="hover:text-pink-600 transition-colors">Fiesta Spa & Actividades</a>
            <a href="#packs" className="hover:text-pink-600 transition-colors">Packs y Detalles</a>
            <a href="#testimonios" className="hover:text-pink-600 transition-colors">Opiniones</a>
            <a href="#contacto" className="hover:text-pink-600 transition-colors">Contacto</a>
          </nav>

          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/theminibeautycorner"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-pink-50 hover:bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-600 hover:text-pink-700 transition-all shadow-2xs"
              aria-label="Instagram @theminibeautycorner"
              title="Instagram @theminibeautycorner"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/theminibeautycorner"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-purple-50 hover:bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 hover:text-purple-700 transition-all shadow-2xs"
              aria-label="Facebook @theminibeautycorner"
              title="Facebook @theminibeautycorner"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/34626964719"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-purple-950 hover:text-pink-600 transition-colors ml-2 bg-pink-50/80 px-2.5 py-1 rounded-full border border-pink-100"
              title="Contactar al 626 96 47 19"
            >
              📞 626 96 47 19
            </a>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-800/60">
          <p>© {new Date().getFullYear()} The Mini Beauty Corner. Animación y Belleza Infantil para Niñas.</p>
          <p className="flex items-center gap-1">
            Diseñado con <Heart className="w-3 h-3 text-pink-500 fill-pink-500 inline" /> para hacer realidad momentos únicos
          </p>
        </div>
      </div>
    </footer>
  );
};
