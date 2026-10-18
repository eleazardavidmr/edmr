export const heroWords = ['reserven', 'vean tu carta', 'vean tu catálogo', 'elijan su hora']

export const businessRows = ['Barberías · Restaurantes · Tiendas ·', 'Salones de belleza · Agencias de viaje ·']

/** Capítulos de la historia del teléfono: de DMs sin responder a reservas solas. */
export interface Chapter {
  eyebrow: string
  title: string
  body: string
}

export const chapters: Chapter[] = [
  {
    eyebrow: 'Hoy',
    title: 'Cada cliente te escribe. Y espera.',
    body: 'Precios, horarios, cupos. Todo pasa por tu DM, y si tardas en contestar, se va con otro.',
  },
  {
    eyebrow: 'Con tu página',
    title: 'Lo ven todo sin preguntarte.',
    body: 'Tus servicios, tu carta o tu catálogo, el horario y la ubicación. En un solo link.',
  },
  {
    eyebrow: 'Y al final',
    title: 'Eligen su hora. Tú solo atiendes.',
    body: 'Reservan a cualquier hora, y para lo demás tienen un botón directo a tu WhatsApp.',
  },
]

export const chatMessages = [
  'Hola, ¿cuánto vale el corte?',
  '¿Tienen cupo hoy a las 5?',
  '¿Me pasas la carta?',
  '¿Hasta qué hora abren?',
  'Hola??',
]

export const demoServices = [
  { name: 'Corte clásico', time: '45 min' },
  { name: 'Barba', time: '30 min' },
  { name: 'Corte + barba', time: '60 min' },
]

export const demoSlots = ['10:00', '11:30', '2:00', '3:30', '5:00', '6:30']

export interface Feature {
  id: 'booking' | 'catalog' | 'whatsapp' | 'domain' | 'schedule' | 'mobile'
  title: string
  body: string
}

export const features: Feature[] = [
  { id: 'booking', title: 'Reservas en línea', body: 'Tus clientes eligen día y hora sin escribirte.' },
  { id: 'catalog', title: 'Tu carta o catálogo', body: 'Lo que vendes, con fotos y precios, siempre al día.' },
  { id: 'whatsapp', title: 'Botón de WhatsApp', body: 'Para todo lo demás, te escriben directo.' },
  { id: 'domain', title: 'Tu propio dominio', body: 'Un link con el nombre de tu negocio para tu bio.' },
  { id: 'schedule', title: 'Horario y ubicación', body: 'Con mapa, para que lleguen sin preguntarte.' },
  { id: 'mobile', title: 'Hecha para el celular', body: 'Porque ahí es donde te buscan.' },
]

export const aboutText =
  'Soy Eleazar Muñoz, desarrollador web venezolano en Cali. Desde 2023 hago páginas para negocios locales. EDMR no es una agencia: soy yo. Hablas conmigo desde la primera llamada hasta que tu página está publicada, y después.'

export interface Fact {
  value: number
  label: string
}

export const facts: Fact[] = [
  { value: 3, label: 'clientes nuevos al mes, como máximo' },
  { value: 7, label: 'días para publicar un sitio con reservas' },
  { value: 15, label: 'minutos de llamada para empezar' },
  { value: 2023, label: 'el año en que empecé' },
]

export interface Step {
  number: string
  title: string
  description: string
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Me escribes',
    description:
      'Por WhatsApp o agendando una llamada de 15 minutos por Meet. Me cuentas cómo funciona tu negocio.',
  },
  {
    number: '02',
    title: 'Te muestro una propuesta',
    description: 'Te enseño cómo se vería tu página y te digo cuánto cuesta, antes de empezar.',
  },
  {
    number: '03',
    title: 'La construyo',
    description: 'Me pasas tus fotos, precios y horarios. Yo me encargo del resto y te muestro avances.',
  },
  {
    number: '04',
    title: 'Queda publicada',
    description: 'Tu página sale con tu dominio. Pones el link en tu Instagram y en tu WhatsApp.',
  },
]
