import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, Info } from 'lucide-react';
import { PACK_DETAILS, PACK_UNIT_PRICE, PACK_IMAGE, WHATSAPP_PHONE } from '../data/cornerData';

interface PacksAndDetailsProps {
  onSelectPacks?: (count: number) => void;
}

export const PacksAndDetails: React.FC<PacksAndDetailsProps> = ({ onSelectPacks }) => {
  const [girlsCount, setGirlsCount] = useState<number>(8);

  const totalPrice = girlsCount * PACK_UNIT_PRICE;

  const handleApply = () => {
    if (onSelectPacks) {
      onSelectPacks(girlsCount);
    }
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const packWhatsAppUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    `¡Hola! Me interesa encargar ${girlsCount} unidades del TMBC Beauty Pack (12€/ud, total: ${totalPrice}€). ¿Tienes disponibilidad?`
  )}`;

  return (
    <section id="packs" className="py-16 md:py-24 bg-gradient-to-b from-transparent via-pink-50/40 to-transparent relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-pink-600 tracking-wider uppercase mb-2">
            <span>El detalle perfecto</span>
            <span aria-hidden="true">·</span>
            <span>Celebraciones & Talleres</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-950 font-display tracking-tight text-balance">
            Packs y Detalles Personalizados
          </h2>
          <p className="mt-3 text-sm sm:text-base text-purple-900/75 leading-relaxed">
            {PACK_DETAILS.tagline}
          </p>
        </div>

        {/* Main showcase container */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-pink-200/80 p-6 sm:p-9 lg:p-10 shadow-lg shadow-pink-900/5 relative overflow-hidden">
          {/* Subtle top badge with 12€ */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-pink-500 to-purple-600 text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-1.5 rounded-bl-2xl shadow-xs">
            12 € / pack
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Real Pack Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-purple-100 bg-pink-50 shadow-md">
                <img
                  src={PACK_IMAGE}
                  alt="TMBC Beauty Pack de regalo infantil The Mini Beauty Corner"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 right-3 backdrop-blur-md bg-white/90 p-2.5 rounded-xl border border-white/60 text-center">
                  <p className="text-xs font-bold text-purple-950">
                    Bolsa oficial con logo + selección exclusiva
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Inclusions & Simple Estimator */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-pink-600 tracking-wider uppercase">
                    TMBC Beauty Pack
                  </span>
                  <span aria-hidden="true" className="text-pink-300">·</span>
                  <span className="text-xs text-purple-700">Edición especial (12 €)</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-purple-950 font-display mb-3">
                  Selección divertida y cuidada con mimo
                </h3>

                {/* 8 Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4">
                  {PACK_DETAILS.includes.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2 rounded-xl bg-pink-50/40 border border-pink-100/60 text-xs text-purple-950"
                    >
                      <span className="text-sm shrink-0">{item.icon}</span>
                      <span className="font-medium leading-snug">{item.text}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-purple-800/75 mb-6">
                  ✨ El recuerdo ideal para Comuniones, cumpleaños, ferias y talleres infantiles.
                </p>
              </div>

              {/* Simple Interactive Estimator Box */}
              <div className="bg-gradient-to-br from-pink-50/70 to-purple-50/70 rounded-2xl p-5 border border-pink-200/80">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-purple-950 block">
                      ¿Cuántos packs necesitas?
                    </span>
                    <span className="text-[11px] text-purple-700/80">
                      12 € por unidad
                    </span>
                  </div>

                  {/* Quantity Counter */}
                  <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-2xl border border-pink-200 shadow-xs">
                    <button
                      type="button"
                      onClick={() => setGirlsCount(Math.max(1, girlsCount - 1))}
                      disabled={girlsCount <= 1}
                      className="w-8 h-8 rounded-lg bg-purple-50 hover:bg-pink-100 text-purple-900 flex items-center justify-center transition-colors disabled:opacity-40 cursor-pointer"
                      aria-label="Restar un pack"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>

                    <div className="text-center min-w-[70px]">
                      <span className="text-xl font-bold text-purple-950 font-display tabular-nums">
                        {girlsCount}
                      </span>
                      <span className="text-[11px] text-purple-700 block -mt-1">
                        {girlsCount === 1 ? 'pack' : 'packs'}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setGirlsCount(girlsCount + 1)}
                      className="w-8 h-8 rounded-lg bg-purple-50 hover:bg-pink-100 text-purple-900 flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Sumar un pack"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Total calculation */}
                  <div className="text-right">
                    <span className="text-xs text-purple-700 block">Total estimado:</span>
                    <span className="text-2xl font-bold text-pink-600 font-display tabular-nums">
                      {totalPrice} €
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 pt-3 border-t border-pink-200/60 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={handleApply}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-xs hover:from-pink-600 hover:to-purple-700 transition-all cursor-pointer"
                  >
                    <span>Añadir a mi solicitud</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={packWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-semibold text-purple-950 bg-white hover:bg-pink-50 border border-pink-200 rounded-xl transition-colors"
                  >
                    <span>Pedir por WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Note under TMBC Beauty Pack */}
        <div className="max-w-5xl mx-auto mt-5 rounded-2xl bg-white/85 border border-pink-100/90 px-5 py-4 sm:px-6 sm:py-5 shadow-2xs">
          <div className="flex items-start gap-3">
            <Info className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
            <div className="space-y-2 text-xs leading-relaxed text-purple-900/75">
              <p>
                <strong className="text-purple-950 font-semibold">Nota sobre el producto:</strong>{' '}
                Cada TMBC Beauty Pack se prepara con mucho cuidado; por ello, algunos productos, marcas, colores o
                diseños pueden variar según disponibilidad. Siempre nos aseguraremos de que los artículos seleccionados
                sean similares en estilo y características, manteniendo la esencia, el contenido y la calidad de la
                propuesta original.
              </p>
              <p>
                La presentación, la decoración y el empaquetado también pueden presentar ligeras variaciones, conservando
                siempre nuestra estética característica: dulce, cuidada y especial.{' '}
                <span className="italic text-purple-800/80">
                  La imagen mostrada es una recreación ilustrativa generada mediante IA.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
