import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { LOGO_IMAGE, WHATSAPP_PHONE } from '../data/cornerData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    '¡Hola! Me gustaría pedir información y disponibilidad para The Mini Beauty Corner.'
  )}`;

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 border-b border-pink-100/90 shadow-xs transition-all duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        {/* Prominent Official Circular Logo */}
        <a
          href="#"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded-full"
        >
          <img
            src={LOGO_IMAGE}
            alt="Logo oficial The Mini Beauty Corner"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-purple-950 font-display leading-tight">
              THE MINI <span className="text-pink-600">BEAUTY</span> CORNER
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-purple-700/80 tracking-wider uppercase">
              Corner de Belleza Infantil
            </span>
          </div>
        </a>

        {/* Minimalist Navigation Menu */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-purple-900/85">
          <a
            href="#historia"
            className="hover:text-pink-600 transition-colors whitespace-nowrap shrink-0"
          >
            Nuestra Historia
          </a>
          <a
            href="#actividades"
            className="hover:text-pink-600 transition-colors whitespace-nowrap shrink-0"
          >
            Fiesta Spa & Actividades
          </a>
          <a
            href="#packs"
            className="hover:text-pink-600 transition-colors whitespace-nowrap shrink-0"
          >
            Packs y Detalles
          </a>
          <a
            href="#testimonios"
            className="hover:text-pink-600 transition-colors whitespace-nowrap shrink-0"
          >
            Opiniones
          </a>
          <a
            href="#contacto"
            className="hover:text-pink-600 transition-colors whitespace-nowrap shrink-0"
          >
            Contacto
          </a>
        </nav>

        {/* Primary Action Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 shadow-sm shadow-pink-500/20 active:scale-95 transition-all duration-200 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Reservar por WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-purple-900 hover:bg-pink-50 transition-colors cursor-pointer"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-pink-100 bg-[#FCF9FB]/98 px-5 py-4 space-y-3 shadow-lg">
          <nav className="flex flex-col gap-3 text-sm font-medium text-purple-950">
            <a
              href="#historia"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-lg hover:bg-pink-100/60 transition-colors"
            >
              Nuestra Historia
            </a>
            <a
              href="#actividades"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-lg hover:bg-pink-100/60 transition-colors"
            >
              Fiesta Spa & Actividades
            </a>
            <a
              href="#packs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-lg hover:bg-pink-100/60 transition-colors"
            >
              Packs y Detalles
            </a>
            <a
              href="#testimonios"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-lg hover:bg-pink-100/60 transition-colors"
            >
              Opiniones
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-lg hover:bg-pink-100/60 transition-colors"
            >
              Contacto
            </a>
          </nav>
          <div className="pt-2 border-t border-pink-100">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Reservar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
