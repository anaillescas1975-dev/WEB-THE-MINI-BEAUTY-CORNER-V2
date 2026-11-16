import React from 'react';
import { MessageCircle } from 'lucide-react';
import { AVATAR_CARTOON, WHATSAPP_PHONE } from '../data/cornerData';

export const FloatingWhatsAppAvatar: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    '¡Hola! He visto The Mini Beauty Corner y me gustaría consultar disponibilidad para una fiesta infantil.'
  )}`;

  return (
    <aside
      aria-label="Atención directa por WhatsApp"
      className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50 flex items-end pointer-events-auto"
    >
      {/* Compact Floating Avatar + WhatsApp Button Lockup (no blocking speech bubble) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 p-1 bg-white/95 backdrop-blur-md rounded-full border-2 border-pink-300 shadow-lg shadow-purple-900/15 hover:shadow-xl hover:shadow-pink-500/20 hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
        aria-label="Contactar por WhatsApp con The Mini Beauty Corner"
        title="¿Organizamos su día especial? Escríbeme por WhatsApp"
      >
        {/* User-supplied custom Caricature Avatar */}
        <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-pink-400 via-purple-300 to-pink-200 shrink-0">
          <img
            src={AVATAR_CARTOON}
            alt="Caricatura The Mini Beauty Corner"
            className="w-full h-full object-cover rounded-full bg-white"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* WhatsApp Icon Overlay on avatar */}
        <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white shadow-xs group-hover:scale-110 transition-transform">
          <MessageCircle className="w-3 h-3 fill-current" />
        </div>

        {/* Desktop friendly compact label */}
        <span className="hidden lg:inline-block pr-3 pl-0.5 text-xs font-bold text-purple-950 whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </aside>
  );
};
