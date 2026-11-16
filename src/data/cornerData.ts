import { ActivityItem, TestimonialItem } from '../types';
import heroBeautyCornerImg from '../assets/images/hero_casual_party_1794741969110.jpg';
import cucumberSpaMaskImg from '../assets/images/cucumber_spa_mask_1793806840249.jpg';
import glitterManicureImg from '../assets/images/glitter_manicure_sparkle_1793806842013.jpg';
import braceletsWorkshopImg from '../assets/images/bracelets_workshop_craft_1793806842078.jpg';

export const WHATSAPP_PHONE = '34626964719'; // Correct WhatsApp contact number (+34 626 96 47 19)
export const DISPLAY_PHONE = '626 96 47 19';
export const PACK_UNIT_PRICE = 12; // 12€ as requested

export const HERO_IMAGE = heroBeautyCornerImg;
export const CUCUMBER_IMAGE = cucumberSpaMaskImg;
export const GLITTER_IMAGE = glitterManicureImg;
export const BRACELETS_IMAGE = braceletsWorkshopImg;

// User uploaded assets (served from /public):
export const LOGO_IMAGE = '/assets/aistudio/Logo_circular_de_belleza_infantil___efa13b78.png';
export const COORDINATOR_PHOTO = '/assets/aistudio/Gemini_Generated_Image_wbyt6fwbyt6fwbyt_1cf1b84a.jpg';
export const PACK_IMAGE = '/assets/aistudio/Gemini_Generated_Image_ceime6ceime6ceim_e78417c0.jfif';
export const AVATAR_CARTOON = '/assets/aistudio/image_73613e03.jpg';
export const THEME_MUSIC_URL = '/assets/aistudio/sintonia_mini_beauty_corner-gemini_72f2bbf3.mp3';

export const ACTIVITIES: ActivityItem[] = [
  {
    id: 'mascarillas-pepino',
    title: 'Mascarillas Faciales de Pepino',
    subtitle: 'Frescor, risas y relax suave',
    description: 'Un momento spa sensorial con rodajitas de pepino fresco y mascarillas suaves de celulosa vegetal. Una experiencia relajante y divertida con la que se sienten protagonistas.',
    image: CUCUMBER_IMAGE,
    features: [
      'Rodajas de pepino natural refrescantes',
      'Mascarillas suaves de celulosa respetuosas',
      'Cintas suaves para el pelo y ambiente relajante',
      'Risas y complicidad entre amigas'
    ]
  },
  {
    id: 'manicura-glitter',
    title: 'Manicura con Glitter y Brillos',
    subtitle: 'Colores pastel y destellos mágicos',
    description: 'Esmaltado infantil con bonitos tonos pastel, toques de purpurina brillante y stickers de estrellitas o gemas que les fascinan para lucir unas uñas preciosas.',
    image: GLITTER_IMAGE,
    features: [
      'Esmaltes infantiles en tonos dulces',
      'Purpurinas y glitter brillante suave',
      'Stickers de estrellitas, corazones y gemas',
      'Cuidado y mimo en cada uñita'
    ]
  },
  {
    id: 'maquillaje-fantasia',
    title: 'Maquillaje de Fantasía y Tatuajes Temporales',
    subtitle: 'Brillos delicados y gemas faciales',
    description: 'Toques de fantasía elegantes y llenos de luz: sombras irisadas, toques de brillo suave, aplicaciones de pedrería y gemas adhesivas, más tatuajes temporales con motivos mágicos.',
    image: HERO_IMAGE,
    features: [
      'Pinturas suaves para uso infantil',
      'Gemas adhesivas brillantes y purpurinas',
      'Tatuajes temporales metalizados y de color',
      'Diseños rápidos, cómodos y fotogénicos'
    ]
  },
  {
    id: 'taller-pulseras',
    title: 'Taller de Pulseras Creativas',
    subtitle: 'Actividad complementaria ideal',
    description: 'Un rincón artesanal y creativo donde cada niña diseña y monta su propia pulsera con abalorios de colores pastel, letras para escribir su nombre o palabras mágicas, y colgantes especiales.',
    image: BRACELETS_IMAGE,
    isComplementary: true,
    features: [
      'Cuentas pastel, perlas y abalorios variados',
      'Letras para personalizar nombres o iniciales',
      'Dijes dorados y plateados (estrellas, corazones)',
      'Se llevan su propia creación a casa como recuerdo'
    ]
  }
];

export const PACK_DETAILS = {
  pricePerUnit: PACK_UNIT_PRICE,
  name: 'TMBC Beauty Pack',
  title: 'TMBC Beauty Pack – El regalo o detalle personalizado',
  tagline: '¿Estás organizando un cumple, una fiesta temática o un taller especial y buscas un detalle diferente que a las peques les encante? En The Mini Beauty Corner he creado este precioso pack infantil pensado con mucho amor para que se sientan auténticas protagonistas.',
  includes: [
    { icon: '🌸', text: 'Mascarilla facial infantil de celulosa' },
    { icon: '💄', text: 'Bálsamo labial hidratante' },
    { icon: '🎀', text: 'Diadema de terciopelo' },
    { icon: '🪞', text: 'Espejito y peine a juego' },
    { icon: '🧴', text: 'Mini colonia y esmalte de uñas infantil' },
    { icon: '🧼', text: 'Jaboncito, cremita de manos y toallita' },
    { icon: '✨', text: 'Hoja de pegatinas divertidas' },
    { icon: '🛍️', text: 'Bolsa personalizada con nuestro logo' },
  ]
};

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'rev-1',
    parentName: 'Laura Martínez',
    eventType: 'Cumpleaños infantil',
    location: 'Illescas, Toledo',
    rating: 5,
    dateLabel: 'Mayo 2025',
    quote:
      'Celebramos el séptimo cumpleaños de mi hija en casa y fue el rincón favorito de todas sus amigas. Las mascarillas de pepino y la manicura con glitter las tuvieron felices y entretenidas toda la tarde. El trato con las niñas fue súper dulce y cuidado.'
  },
  {
    id: 'rev-2',
    parentName: 'Patricia & Javier',
    eventType: 'Primera Comunión',
    location: 'Toledo',
    rating: 5,
    dateLabel: 'Abril 2025',
    quote:
      'Buscábamos algo diferente para la Comunión y The Mini Beauty Corner superó todas nuestras expectativas. Mientras los adultos disfrutábamos de la sobremesa tranquilos, las niñas se hicieron sus pulseras y disfrutaron del maquillaje de fantasía sin parar de reír.'
  },
  {
    id: 'rev-3',
    parentName: 'Marta Sánchez',
    eventType: 'Fiesta fin de curso',
    location: 'La Sagra',
    rating: 5,
    dateLabel: 'Junio 2025',
    quote:
      'Fue todo un acierto para la fiesta escolar. La decoración en tonos rosa y lila quedó preciosa y cada detalle estaba pensado con muchísimo cariño. Además, encargamos los Beauty Packs personalizados como recuerdo y fueron un éxito total.'
  },
  {
    id: 'rev-4',
    parentName: 'Elena Rodríguez',
    eventType: 'Cumpleaños en restaurante',
    location: 'Getafe, Madrid',
    rating: 5,
    dateLabel: 'Marzo 2025',
    quote:
      'Se adaptó perfectamente al espacio reservado que teníamos en el restaurante. Las gemas brillantes, los tatuajes temporales y el taller de pulseras con sus iniciales encantaron a las peques. Sin duda repetiremos el año que viene.'
  },
  {
    id: 'rev-5',
    parentName: 'Carmen López',
    eventType: 'Boda familiar',
    location: 'Aranjuez, Madrid',
    rating: 5,
    dateLabel: 'Septiembre 2025',
    quote:
      'En nuestra boda queríamos un espacio especial para las más pequeñas y fue mágico. No querían irse del corner ni un minuto. Organización impecable, puntualidad y una cercanía que da muchísima tranquilidad a los padres.'
  },
  {
    id: 'rev-6',
    parentName: 'Sofía Navarro',
    eventType: 'Cumpleaños en jardín',
    location: 'Yuncos, Toledo',
    rating: 5,
    dateLabel: 'Julio 2025',
    quote:
      'Mi hija aún habla de su fiesta spa con pepinos y purpurina. Se nota muchísimo la ilusión con la que prepara todo y cómo consigue que cada niña se sienta especial desde el primer momento. Totalmente recomendable.'
  }
];
