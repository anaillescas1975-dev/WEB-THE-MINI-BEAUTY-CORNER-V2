import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Calendar, User, Sparkles, Instagram, Facebook } from 'lucide-react';
import { ContactFormData } from '../types';
import { WHATSAPP_PHONE, PACK_UNIT_PRICE } from '../data/cornerData';

interface ContactSectionProps {
  initialPacksCount?: number;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPacksCount = 0 }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    eventType: 'Cumpleaños infantil',
    eventDate: '',
    location: '',
    girlsCount: 8,
    includePacks: initialPacksCount > 0,
    message: '',
    paymentMethod: 'bizum',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const packsText = formData.includePacks
      ? `\n- Packs de regalo: Sí (${formData.girlsCount} packs = ${formData.girlsCount * PACK_UNIT_PRICE}€)`
      : '';

    return encodeURIComponent(
      `¡Hola! Me gustaría consultar disponibilidad para The Mini Beauty Corner:\n\n` +
      `- Nombre: ${formData.name || 'Sin especificar'}\n` +
      `- Tipo de evento: ${formData.eventType}\n` +
      `- Fecha prevista: ${formData.eventDate || 'Por definir'}\n` +
      `- Mensaje: ${formData.message || 'Sin comentarios adicionales'}` +
      packsText
    );
  };

  const handleOpenWhatsAppDirectly = () => {
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${getWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-16 md:py-24 relative bg-white/70">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-pink-600 tracking-wider uppercase mb-2">
            <span>Hablemos de tu celebración</span>
            <span aria-hidden="true">·</span>
            <span>Contacto directo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-950 font-display tracking-tight text-balance">
            Contacto y Reserva
          </h2>
          <p className="mt-3 text-sm sm:text-base text-purple-900/75 leading-relaxed">
            Completa este formulario sencillo para consultar disponibilidad. Te responderé personalmente con la mayor rapidez.
          </p>
        </div>

        {/* Minimalist Centered Contact Box */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-pink-200/80 p-7 sm:p-10 shadow-md shadow-pink-900/5">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-purple-950 font-display">
                ¡Mensaje enviado con éxito!
              </h3>
              <p className="text-sm text-purple-900/80 max-w-md mx-auto">
                Muchas gracias {formData.name}. He recibido tus datos y te responderé en breve para confirmar la disponibilidad de tu fecha.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleOpenWhatsAppDirectly}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-xs hover:opacity-95 transition-opacity cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Abrir también por WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-medium text-purple-800 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors cursor-pointer"
                >
                  Modificar datos
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-purple-950 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-pink-500" />
                  Nombre *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre completo"
                  className="w-full px-3.5 py-2.5 text-sm bg-pink-50/30 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all text-purple-950 placeholder:text-purple-300"
                />
              </div>

              {/* Event Type & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-purple-950 mb-1.5">
                    Tipo de evento *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-pink-50/30 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all text-purple-950"
                  >
                    <option value="Cumpleaños infantil">Cumpleaños infantil</option>
                    <option value="Primera Comunión">Primera Comunión</option>
                    <option value="Boda o evento familiar">Boda o evento familiar</option>
                    <option value="Feria o fiesta popular">Feria o mercado temático</option>
                    <option value="AMPA o Colegio">AMPA o Colegio</option>
                    <option value="Ludoteca o Parque de bolas">Ludoteca o Parque infantil</option>
                    <option value="Otro evento">Otro evento</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-purple-950 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-purple-500" />
                    Fecha prevista *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-pink-50/30 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all text-purple-950"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-purple-950 mb-1.5">
                  Mensaje
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntame el lugar o municipio, número aproximado de niñas o cualquier detalle sobre tu fiesta..."
                  className="w-full px-3.5 py-2 text-sm bg-pink-50/30 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all text-purple-950 placeholder:text-purple-300 resize-none"
                />
              </div>

              {/* Subtle Coordination Note */}
              <div className="py-2.5 px-3.5 rounded-xl bg-purple-50/60 border border-purple-100/70 text-xs text-purple-900/80 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <span>
                  Los detalles de reserva y coordinación se gestionan de forma directa, ágil y personalizada por WhatsApp o al <strong>626 96 47 19</strong>.
                </span>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 rounded-xl shadow-xs hover:from-pink-600 hover:to-purple-700 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar consulta</span>
                </button>

                <button
                  type="button"
                  onClick={handleOpenWhatsAppDirectly}
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-semibold text-purple-950 bg-pink-50 hover:bg-pink-100 border border-pink-200 rounded-xl transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                  <span>Contactar por WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Social Media Connect Box in Contact Section */}
        <div className="max-w-2xl mx-auto mt-6 p-4 sm:p-5 rounded-3xl bg-white/90 border border-pink-100/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div>
            <p className="text-xs font-bold text-purple-950 flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span>Síguenos en redes sociales</span>
            </p>
            <p className="text-[11px] text-purple-800/75 mt-0.5">
              Descubre vídeos, fotos y momentos mágicos en <strong>@theminibeautycorner</strong>
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://www.instagram.com/theminibeautycorner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-50 hover:bg-pink-100 border border-pink-200 text-xs font-semibold text-pink-700 transition-colors"
              aria-label="Instagram de The Mini Beauty Corner"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/theminibeautycorner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-50 hover:bg-purple-100 border border-purple-200 text-xs font-semibold text-purple-700 transition-colors"
              aria-label="Facebook de The Mini Beauty Corner"
            >
              <Facebook className="w-3.5 h-3.5 text-purple-600" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
