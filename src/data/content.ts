export const businessTypes = [
  'Barberías',
  'Restaurantes',
  'Tiendas',
  'Salones de belleza',
  'Agencias de viaje',
]

export const problems = [
  'Las reservas llegan por DM y se pierden entre mensajes.',
  'El link de tu bio está vacío o no lleva a nada útil.',
  'Te preguntan todos los días precios, carta y horarios.',
  'Si tardas en contestar, el cliente se va con otro.',
]

export interface Solution {
  text: string
  note?: string
}

export const solutions: Solution[] = [
  { text: 'Tus clientes reservan solos, a cualquier hora.', note: 'Plan Pro' },
  { text: 'Tu carta, catálogo o servicios, con precios, en un solo link.' },
  { text: 'Horario, ubicación y un botón para escribirte por WhatsApp.' },
  { text: 'Un dominio con el nombre de tu negocio para poner en tu bio.' },
]

export const aboutPoints = [
  'Hablas directo con quien construye tu web. Sin intermediarios.',
  'Tomo máximo 3 clientes nuevos al mes. Así cumplo los plazos.',
  'Si tu sitio lleva reservas, queda publicado en 7 días.',
]

export interface Step {
  number: string
  title: string
  description: string
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Hablamos 15 minutos',
    description:
      'Una llamada por Meet. Me cuentas cómo funciona tu negocio y qué te está costando clientes hoy.',
  },
  {
    number: '02',
    title: 'Te muestro una propuesta',
    description: 'Te enseño cómo se vería la página de tu negocio. Eliges el plan que te sirve.',
  },
  {
    number: '03',
    title: 'La construyo',
    description:
      'Me pasas tus fotos, precios y horarios. Yo me encargo del resto y te muestro avances.',
  },
  {
    number: '04',
    title: 'Queda publicada',
    description: 'Tu página sale con tu dominio. Pones el link en tu Instagram y en tu WhatsApp.',
  },
]

export interface PricingPlan {
  id: string
  name: string
  tagline: string
  setupPrice: string
  features: string[]
  highlight?: boolean
  badge?: string
}

export const plans: PricingPlan[] = [
  {
    id: 'light',
    name: 'Light',
    tagline: 'Para tener un link serio en tu bio.',
    setupPrice: '$150.000',
    features: [
      'Una página con la información de tu negocio',
      'Botón para escribirte por WhatsApp',
      'Dominio propio incluido',
    ],
  },
  {
    id: 'core',
    name: 'Core',
    tagline: 'Para mostrar lo que vendes.',
    setupPrice: '$220.000',
    features: [
      'Varias secciones: Inicio, Servicios, Nosotros, Contacto',
      'Galería o catálogo de tus productos o servicios',
      'Formulario de contacto',
      'Botón de WhatsApp',
      'Dominio propio incluido',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Para negocios que viven de las citas.',
    setupPrice: '$300.000',
    highlight: true,
    badge: 'Con reservas',
    features: [
      'Sitio completo de varias páginas',
      'Reservas en línea: tus clientes eligen día y hora',
      'Botón de WhatsApp',
      'Dominio propio incluido',
      'Publicado en 7 días',
    ],
  },
]

export const pricingNote =
  'Solo pagas la renovación del dominio una vez al año, entre $40.000 y $60.000 COP. Si después de publicar quieres cambios o secciones nuevas, te cobro solo ese trabajo.'
