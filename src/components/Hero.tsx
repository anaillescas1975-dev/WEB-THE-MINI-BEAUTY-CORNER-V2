import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Sparkles, Heart, Smile } from 'lucide-react';
import { HERO_IMAGE, WHATSAPP_PHONE } from '../data/cornerData';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    '¡Hola! Quiero consultar disponibilidad para una fiesta con The Mini Beauty Corner.'
  )}`;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Subtle ambient light glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-pink-300/30 via-purple-200/25 to-pink-100/20 blur-3xl rounded-full -z-10"
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-700 tracking-wider uppercase mb-3">
              <span>Animación infantil de belleza</span>
              <span aria-hidden="true">·</span>
              <span className="text-pink-600">Fiestas Spa & Creatividad</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-purple-950 font-display tracking-tight leading-[1.12] text-balance mb-5">
              Momentos inolvidables llenos de{' '}
              <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                magia, risas y belleza
              </span>{' '}
              para niñas
            </h1>

            <p className="text-base sm:text-lg text-purple-900/80 leading-relaxed max-w-2xl mb-8">
              Transformo cualquier celebración en una experiencia única y mimada.
              Un corner de belleza infantil diseñado para que las más pequeñas se sientan
              especiales con mascarillas de pepino, manicura con brillos, maquillaje de fantasía
              y taller de pulseras artesanales.
            </p>

            {/* Zero-Pill Quiet Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-medium text-purple-800/75 mb-8">
              <span className="inline-flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-pink-500" />
                Productos suaves pensados para niñas
              </span>
              <span aria-hidden="true" className="text-purple-300">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-purple-500" />
                Trato cercano y con mucho mimo
              </span>
              <span aria-hidden="true" className="text-purple-300">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-pink-500" />
                Me desplazo a tu celebración
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 rounded-full shadow-md shadow-pink-500/25 hover:shadow-lg hover:shadow-pink-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Reservar por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#actividades"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-purple-950 bg-white/90 hover:bg-white border border-pink-200/80 rounded-full shadow-xs hover:border-pink-300 transition-all duration-200"
              >
                <span>Ver actividades spa</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (Pristine photo without overlays) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-pink-200/70 shadow-xl shadow-pink-900/5 bg-gradient-to-b from-pink-50 to-purple-50">
              <img
                src={HERO_IMAGE}
                alt="Montaje de fiesta spa y corner de belleza infantil The Mini Beauty Corner"
                className={`w-full h-[360px] sm:h-[420px] lg:h-[480px] object-cover transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                referrerPolicy="no-referrer"
              />

              {!imageLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 text-purple-900 p-6 text-center">
                  <Sparkles className="w-8 h-8 text-pink-500 mb-2 animate-pulse" />
                  <p className="text-sm font-semibold">The Mini Beauty Corner</p>
                  <p className="text-xs text-purple-600">Rincón de belleza y spa infantil</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
