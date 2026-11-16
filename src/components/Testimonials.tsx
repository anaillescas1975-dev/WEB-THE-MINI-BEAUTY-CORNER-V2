import React, { useEffect, useState } from 'react';
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  GalleryHorizontalEnd,
  MessageSquarePlus,
  CheckCircle2,
  MapPin,
  X
} from 'lucide-react';
import { TestimonialItem } from '../types';
import { INITIAL_TESTIMONIALS } from '../data/cornerData';

const STORAGE_KEY = 'tmbc_parent_testimonials_v1';

const EVENT_TYPE_OPTIONS = [
  'Cumpleaños infantil',
  'Primera Comunión',
  'Boda o evento familiar',
  'Fiesta escolar / Fin de curso',
  'Feria o mercado',
  'Otro evento'
];

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as TestimonialItem[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          return [...parsed, ...INITIAL_TESTIMONIALS];
        }
      }
    } catch {
      // Ignore storage read errors and fall back to initial testimonials
    }
    return INITIAL_TESTIMONIALS;
  });

  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [showForm, setShowForm] = useState(false);
  const [justSubmitted, setJustSubmitted] = useState(false);

  const [parentName, setParentName] = useState('');
  const [eventType, setEventType] = useState(EVENT_TYPE_OPTIONS[0]);
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxSlide = Math.max(0, testimonials.length - cardsPerView);

  useEffect(() => {
    if (currentSlide > maxSlide) {
      setCurrentSlide(maxSlide);
    }
  }, [currentSlide, maxSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !quote.trim()) return;

    const now = new Date();
    const formattedDate = now.toLocaleDateString('es-ES', {
      month: 'long',
      year: 'numeric'
    });
    const capitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    const newReview: TestimonialItem = {
      id: `user-${Date.now()}`,
      parentName: parentName.trim(),
      eventType,
      location: location.trim() || 'La Sagra / Madrid',
      rating,
      quote: quote.trim(),
      dateLabel: capitalizedDate,
      isUserSubmitted: true
    };

    const updatedAll = [newReview, ...testimonials];
    setTestimonials(updatedAll);
    setCurrentSlide(0);

    try {
      const userOnly = updatedAll.filter((item) => item.isUserSubmitted);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(userOnly));
    } catch {
      // Ignore storage write errors
    }

    setParentName('');
    setLocation('');
    setRating(5);
    setQuote('');
    setShowForm(false);
    setJustSubmitted(true);
  };

  const averageRating = (
    testimonials.reduce((acc, item) => acc + item.rating, 0) / testimonials.length
  ).toFixed(1).replace('.', ',');

  const slideStepCount = maxSlide + 1;

  return (
    <section id="testimonios" className="py-16 md:py-24 relative bg-gradient-to-b from-transparent via-purple-50/40 to-transparent">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-pink-600 tracking-wider uppercase mb-2">
            <span>Familias Felices</span>
            <span aria-hidden="true">·</span>
            <span>Experiencias Reales</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-950 font-display tracking-tight text-balance">
            Lo que opinan madres y padres
          </h2>
          <p className="mt-3 text-sm sm:text-base text-purple-900/75 leading-relaxed">
            Cada sonrisa en nuestros rincones de belleza es nuestro mayor regalo. Descubre cómo han vivido sus celebraciones otras familias o comparte tu propia reseña.
          </p>
        </div>

        {/* Controls Bar: Rating Summary + Layout Toggle + Share CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-5 border-b border-pink-100/90">
          <div className="flex items-center gap-3 text-sm text-purple-950">
            <div className="flex items-center gap-1 text-pink-500" aria-label={`Valoración media ${averageRating} de 5`}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-pink-500 text-pink-500" />
              ))}
            </div>
            <span className="font-bold font-display text-base tabular-nums">{averageRating}</span>
            <span className="text-purple-800/70 text-xs sm:text-sm">
              · {testimonials.length} {testimonials.length === 1 ? 'experiencia' : 'experiencias'}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {/* Slider / Grid toggle */}
            <div className="inline-flex items-center p-1 rounded-xl bg-white border border-pink-200/80 shadow-2xs">
              <button
                type="button"
                onClick={() => setViewMode('slider')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'slider'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-xs'
                    : 'text-purple-900/75 hover:text-pink-600'
                }`}
                aria-pressed={viewMode === 'slider'}
              >
                <GalleryHorizontalEnd className="w-3.5 h-3.5" />
                <span>Carrusel</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-xs'
                    : 'text-purple-900/75 hover:text-pink-600'
                }`}
                aria-pressed={viewMode === 'grid'}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Cuadrícula</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                setShowForm((prev) => !prev);
                setJustSubmitted(false);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 rounded-xl shadow-xs hover:from-pink-600 hover:to-purple-700 active:scale-95 transition-all cursor-pointer"
            >
              {showForm ? <X className="w-3.5 h-3.5" /> : <MessageSquarePlus className="w-3.5 h-3.5" />}
              <span>{showForm ? 'Cerrar formulario' : 'Compartir mi experiencia'}</span>
            </button>
          </div>
        </div>

        {/* Confirmation Banner after publishing */}
        {justSubmitted && !showForm && (
          <div className="max-w-2xl mx-auto mb-8 p-4 rounded-2xl bg-white border border-pink-200 shadow-xs flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-sm text-purple-950">
              <div className="w-9 h-9 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-purple-950 text-xs sm:text-sm">
                  ¡Muchas gracias por compartir tu experiencia!
                </p>
                <p className="text-xs text-purple-800/75">
                  Tu reseña ya aparece destacada entre las opiniones de nuestras familias.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setJustSubmitted(false)}
              className="p-1.5 rounded-lg text-purple-400 hover:text-purple-700 hover:bg-pink-50 transition-colors cursor-pointer"
              aria-label="Cerrar aviso"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Parent Review Submission Form */}
        {showForm && (
          <div className="max-w-2xl mx-auto mb-10 bg-white rounded-3xl border border-pink-200/90 p-6 sm:p-8 shadow-md shadow-pink-900/5">
            <div className="mb-5">
              <h3 className="text-lg sm:text-xl font-bold text-purple-950 font-display">
                Cuéntanos cómo fue vuestra celebración
              </h3>
              <p className="text-xs sm:text-sm text-purple-900/75 mt-1">
                Vuestra opinión ayuda a otras familias a conocer cómo trabajamos en cada fiesta y evento.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="review-name" className="block text-xs font-semibold text-purple-950 mb-1.5">
                    Nombre de madre o padre *
                  </label>
                  <input
                    id="review-name"
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="Ej. Laura G."
                    className="w-full px-3.5 py-2.5 text-sm bg-pink-50/30 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all text-purple-950 placeholder:text-purple-300"
                  />
                </div>

                <div>
                  <label htmlFor="review-location" className="block text-xs font-semibold text-purple-950 mb-1.5">
                    Localidad
                  </label>
                  <input
                    id="review-location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ej. Illescas, Toledo, Madrid..."
                    className="w-full px-3.5 py-2.5 text-sm bg-pink-50/30 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all text-purple-950 placeholder:text-purple-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                <div>
                  <label htmlFor="review-event" className="block text-xs font-semibold text-purple-950 mb-1.5">
                    Tipo de celebración *
                  </label>
                  <select
                    id="review-event"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-pink-50/30 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all text-purple-950"
                  >
                    {EVENT_TYPE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <span className="block text-xs font-semibold text-purple-950 mb-1.5">
                    Valoración *
                  </span>
                  <div className="flex items-center gap-1.5 px-3.5 py-2 bg-pink-50/30 border border-pink-200 rounded-xl">
                    {[1, 2, 3, 4, 5].map((starValue) => (
                      <button
                        key={starValue}
                        type="button"
                        onClick={() => setRating(starValue)}
                        className="p-0.5 transition-transform hover:scale-110 cursor-pointer"
                        aria-label={`Valorar con ${starValue} de 5 estrellas`}
                      >
                        <Star
                          className={`w-5 h-5 ${
                            starValue <= rating
                              ? 'fill-pink-500 text-pink-500'
                              : 'text-purple-200'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-xs font-semibold text-purple-900">
                      {rating}/5
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="review-quote" className="block text-xs font-semibold text-purple-950 mb-1.5">
                  Tu experiencia *
                </label>
                <textarea
                  id="review-quote"
                  rows={3}
                  required
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  placeholder="Cuéntanos qué fue lo que más les gustó a las niñas y cómo vivisteis el evento..."
                  className="w-full px-3.5 py-2.5 text-sm bg-pink-50/30 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all text-purple-950 placeholder:text-purple-300 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2.5 text-xs font-semibold text-purple-800 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 rounded-xl shadow-xs hover:from-pink-600 hover:to-purple-700 transition-all cursor-pointer"
                >
                  Publicar experiencia
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Slider OR Grid Display */}
        {viewMode === 'slider' ? (
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${(currentSlide * 100) / cardsPerView}%)`
                }}
              >
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="shrink-0 px-2.5"
                    style={{ width: `${100 / cardsPerView}%` }}
                  >
                    <TestimonialCard item={item} />
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Arrows & Dots */}
            {slideStepCount > 1 && (
              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white border border-pink-200 text-purple-900 hover:text-pink-600 hover:border-pink-300 shadow-xs flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                  aria-label="Ver reseñas anteriores"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2" role="tablist" aria-label="Diapositivas de reseñas">
                  {Array.from({ length: slideStepCount }).map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlide
                          ? 'w-7 bg-gradient-to-r from-pink-500 to-purple-600'
                          : 'w-2 bg-pink-200 hover:bg-pink-300'
                      }`}
                      aria-label={`Ir al grupo de reseñas ${idx + 1}`}
                      aria-selected={idx === currentSlide}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white border border-pink-200 text-purple-900 hover:text-pink-600 hover:border-pink-300 shadow-xs flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                  aria-label="Ver siguientes reseñas"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  item: TestimonialItem;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item }) => {
  return (
    <article className="h-full bg-white rounded-3xl border border-pink-100/90 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-pink-200 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Top Row: Stars & Quote Mark */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-0.5" aria-label={`${item.rating} de 5 estrellas`}>
            {[...Array(5)].map((_, idx) => (
              <Star
                key={idx}
                className={`w-4 h-4 ${
                  idx < item.rating ? 'fill-pink-500 text-pink-500' : 'text-purple-100'
                }`}
              />
            ))}
          </div>

          <div className="w-8 h-8 rounded-full bg-pink-50 text-pink-400 flex items-center justify-center shrink-0">
            <Quote className="w-4 h-4" />
          </div>
        </div>

        {/* Review Quote */}
        <p className="text-sm text-purple-900/85 leading-relaxed">
          «{item.quote}»
        </p>
      </div>

      {/* Author & Event Metadata */}
      <div className="mt-6 pt-4 border-t border-pink-100/70 flex items-end justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-purple-950 font-display">
            {item.parentName}
          </p>
          <p className="text-xs font-medium text-pink-600 mt-0.5">
            {item.eventType}
          </p>
        </div>

        <div className="text-right shrink-0">
          <p className="text-[11px] font-medium text-purple-800/75 inline-flex items-center justify-end gap-1">
            <MapPin className="w-3 h-3 text-purple-400" />
            <span>{item.location}</span>
          </p>
          <p className="text-[11px] text-purple-700/60 mt-0.5">
            {item.dateLabel}
          </p>
        </div>
      </div>
    </article>
  );
};
