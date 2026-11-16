import React, { useState } from 'react';
import { Sparkles, Check, Gem, Eye, Palette, Scissors, ArrowUpRight, Sparkle } from 'lucide-react';
import { ACTIVITIES } from '../data/cornerData';
import { ActivityItem } from '../types';

export const SpaActivities: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);

  const getActivityIcon = (id: string) => {
    switch (id) {
      case 'mascarillas-pepino':
        return <Eye className="w-5 h-5 text-emerald-600" />;
      case 'manicura-glitter':
        return <Gem className="w-5 h-5 text-pink-600" />;
      case 'maquillaje-fantasia':
        return <Palette className="w-5 h-5 text-purple-600" />;
      case 'taller-pulseras':
        return <Scissors className="w-5 h-5 text-fuchsia-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-pink-600" />;
    }
  };

  return (
    <section id="actividades" className="py-16 md:py-24 bg-white/60 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-pink-600 tracking-wider uppercase mb-2">
            <span>Experiencias inolvidables</span>
            <span aria-hidden="true">·</span>
            <span>Diversión & Bienestar</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-950 font-display tracking-tight text-balance">
            Fiesta Spa y Actividades
          </h2>
          <p className="mt-3 text-sm sm:text-base text-purple-900/75 leading-relaxed">
            Una propuesta lúdica, sensorial y creativa donde ellas son el centro. Diseñada con mimo para despertar su imaginación y compartir risas entre amigas.
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-pink-700 bg-pink-50/90 px-3.5 py-1 rounded-full border border-pink-200 flex items-center gap-1">
              <Sparkle className="w-3 h-3 text-pink-500 fill-pink-500" />
              Próximamente: Taller de elaboración de mascarillas naturales
            </span>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
          {ACTIVITIES.map((activity, index) => {
            const isHighlight = activity.isComplementary;

            return (
              <div
                key={activity.id}
                className={`group rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                  isHighlight
                    ? 'border-2 border-purple-300/80 bg-gradient-to-b from-purple-50/50 via-white to-pink-50/40 shadow-md shadow-purple-900/5'
                    : 'border border-pink-100 bg-white hover:border-pink-200/90 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Activity Image Banner */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-pink-50">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 via-transparent to-transparent opacity-80" />

                    {/* Badge on card */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xs">
                        {getActivityIcon(activity.id)}
                      </span>
                      {isHighlight && (
                        <span className="text-[11px] font-bold text-purple-900 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-xs border border-purple-200">
                          ⭐ Actividad complementaria ideal
                        </span>
                      )}
                      {activity.id === 'mascarillas-pepino' && (
                        <span className="text-[11px] font-semibold text-emerald-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs border border-emerald-200">
                          🌿 Celulosa vegetal
                        </span>
                      )}
                    </div>

                    {/* Image Footer Label */}
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <p className="text-xs font-medium text-pink-200 tracking-wide">
                        {activity.subtitle}
                      </p>
                      <h3 className="text-lg sm:text-xl font-bold font-display leading-tight">
                        {activity.title}
                      </h3>
                    </div>
                  </div>

                  {/* Activity Content Body */}
                  <div className="p-6 sm:p-7">
                    <p className="text-sm text-purple-900/80 leading-relaxed mb-6">
                      {activity.description}
                    </p>

                    {/* Bullet features list */}
                    <div className="space-y-2.5">
                      <p className="text-xs font-semibold text-purple-950 uppercase tracking-wider">
                        Qué incluye esta experiencia:
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-purple-900/80">
                        {activity.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="mt-0.5 w-4 h-4 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-pink-50 flex items-center justify-between">
                  <span className="text-xs text-purple-700/70 font-medium">
                    {index === 3 ? 'Recuerdo artesanal propio' : 'Cosmética suave y respetuosa'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedActivity(activity)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 hover:text-pink-600 transition-colors cursor-pointer group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Ver detalles</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for detail view */}
        {selectedActivity && (
          <div
            className="fixed inset-0 z-50 bg-purple-950/40 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedActivity(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-pink-100 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-semibold text-pink-600 tracking-wider uppercase">
                    {selectedActivity.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-purple-950 font-display mt-0.5">
                    {selectedActivity.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedActivity(null)}
                  className="w-8 h-8 rounded-full bg-purple-50 text-purple-900 hover:bg-pink-100 flex items-center justify-center transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden h-44 mb-4 bg-pink-50">
                <img
                  src={selectedActivity.image}
                  alt={selectedActivity.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-sm text-purple-900/80 leading-relaxed mb-4">
                {selectedActivity.description}
              </p>

              <div className="bg-pink-50/60 rounded-2xl p-4 border border-pink-100/80 mb-6">
                <h4 className="text-xs font-bold text-purple-950 mb-2 uppercase tracking-wider">
                  Detalles para familias y organizadores:
                </h4>
                <ul className="space-y-1.5 text-xs text-purple-900/80">
                  {selectedActivity.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedActivity(null)}
                  className="px-4 py-2 text-xs font-medium text-purple-800 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
                <a
                  href="#contacto"
                  onClick={() => setSelectedActivity(null)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-sm hover:opacity-95 transition-opacity"
                >
                  Pedir disponibilidad
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
