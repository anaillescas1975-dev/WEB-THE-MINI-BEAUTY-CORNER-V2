import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { COORDINATOR_PHOTO } from '../data/cornerData';

export const AboutMe: React.FC = () => {
  return (
    <section id="historia" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="bg-gradient-to-br from-pink-50/70 via-white to-purple-50/60 rounded-3xl border border-pink-100/90 p-7 sm:p-10 lg:p-14 shadow-sm relative overflow-hidden">
          {/* Subtle decor element */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -right-16 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Custom Photo Column - Prominent and elegant */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="w-full h-[420px] sm:h-[480px] lg:h-[530px] rounded-3xl overflow-hidden p-1.5 bg-gradient-to-tr from-pink-400 via-purple-300 to-pink-200 shadow-xl shadow-purple-900/10">
                  <img
                    src={COORDINATOR_PHOTO}
                    alt="Creadora de The Mini Beauty Corner"
                    className="w-full h-full object-cover rounded-[22px] bg-white"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-5 py-2 rounded-full border border-pink-200 shadow-md flex items-center gap-2 text-xs font-bold text-purple-950 whitespace-nowrap">
                  <Sparkles className="w-4 h-4 text-pink-500" />
                  <span>The Mini Beauty Corner</span>
                </div>
              </div>
            </div>

            {/* Narrative: Expanded Story & Heartfelt Journey */}
            <div className="lg:col-span-7 mt-4 lg:mt-0">
              <div className="flex items-center gap-2 text-xs font-semibold text-pink-600 tracking-wider uppercase mb-2">
                <span>Nuestra Historia</span>
                <span aria-hidden="true">·</span>
                <span>Pasión & Cercanía</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-950 font-display tracking-tight text-balance mb-5">
                Una idea que nació jugando… y se convirtió en pura magia
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-purple-900/85 leading-relaxed">
                <p>
                  Todo empezó por casualidad en <strong>2024</strong>, cuando se me ocurrió montar un «beauty corner»
                  para niñas en una fiesta de fin de curso. Aunque el pintacaras era ya una actividad muy conocida, este
                  concepto aún no había despegado en España, aunque sí era muy popular en Estados Unidos y Latinoamérica.
                </p>
                <p>
                  ¡Fue todo un éxito! La semilla de este proyecto se sembró durante las tardes jugando en casa con mi
                  hija <strong>Paula</strong>: compartiendo risas, experimentando con un toque de purpurina y
                  mascarillas faciales, y descubriendo lo maravilloso que era crear un espacio donde las niñas pudieran
                  expresar su creatividad y brillar con luz propia.
                </p>
                <p>
                  Lo que comenzó como un juego entre madre e hija pronto se convirtió en una auténtica pasión. Me di
                  cuenta de cuánto les gustaba a las niñas disfrutar de un momento de relax y belleza diseñado solo para
                  ellas: un rincón acogedor donde ponerse rodajas de pepino fresco en los ojos, elegir sus colores de
                  esmalte favoritos, añadir gemas brillantes e incluso crear sus propias pulseras llenas de abalorios y
                  recuerdos.
                </p>
                <p>
                  Aquella primera experiencia en mi localidad, <strong>Illescas</strong>, fue tan bonita y emocionante
                  que el boca a boca se extendió rápidamente. Desde entonces, he tenido el privilegio de llevar la magia
                  de <strong>«The Mini Beauty Corner»</strong> a <strong>bodas, Primeras Comuniones, ferias, fiestas
                  escolares, mercados artesanales y todo tipo de celebraciones familiares</strong> por toda la comarca de{' '}
                  <strong>La Sagra, Toledo y toda la zona de Madrid</strong>. Además, soy muy flexible y puedo
                  adaptarme a cualquier entorno: desde la comodidad de tu propia casa o jardín hasta ludotecas, parques
                  de bolas, restaurantes y espacios singulares para eventos.
                </p>
                <p>
                  Me implico personalmente en cada evento, asegurándome de que todo salga perfecto —desde el montaje y
                  la decoración hasta las actividades divertidas y dinámicas—, ofreciendo siempre un trato cercano,
                  amable y lleno de cariño a cada niña. Mi objetivo es que vivan una experiencia inolvidable llena de
                  fantasía y amistad, y que vosotros, como familia, simplemente os relajéis y disfrutéis viéndolas
                  sonreír.
                </p>
                <p className="font-semibold text-base sm:text-lg flex items-center gap-2 pt-2 text-pink-600">
                  <Heart className="w-5 h-5 fill-pink-500 text-pink-500 shrink-0" />
                  <span>¿Nos acompañas en esta aventura?</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
