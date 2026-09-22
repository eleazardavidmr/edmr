export const problems = [
  'Agendas por WhatsApp que se te vuelven un mar de mensajes cruzados y citas dobles.',
  'Clientes que buscan tu negocio, no encuentran dónde reservar y terminan donde sí pueden.',
  'Una página armada con plantillas gratis que no se ve ni de cerca tan bien como tu trabajo.',
  'Horas perdidas confirmando y recordando citas una por una, todos los días.',
]

export const solutions = [
  'Una página diseñada para tu negocio, no una plantilla reciclada de internet.',
  'Reservas disponibles 24/7, aunque tengas el celular guardado o estés con un cliente.',
  'Confirmaciones y recordatorios automáticos por WhatsApp, sin que nadie los escriba.',
  'Todo por una mensualidad fija: hosting, soporte y ajustes incluidos.',
]

export interface Step {
  number: string
  title: string
  description: string
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Hablamos de tu negocio',
    description:
      'Una llamada corta y sin tecnicismos para entender cómo trabajás, a quién le atendés y qué necesitás resolver primero.',
  },
  {
    number: '02',
    title: 'Te armamos tu página',
    description:
      'Diseñamos algo hecho a la medida de tu marca. Vos revisás, pedís ajustes y la aprobás antes de publicarla.',
  },
  {
    number: '03',
    title: 'Conectamos reservas y WhatsApp',
    description:
      'Tus clientes agendan solos desde la página. Reciben confirmación al instante y recordatorio automático antes de la cita.',
  },
  {
    number: '04',
    title: 'Vos te enfocás en atender',
    description:
      'Nosotros mantenemos todo funcionando de fondo: hosting, actualizaciones y soporte cuando lo necesites.',
  },
]

export interface Audience {
  label: string
  detail: string
  icon: 'scissors' | 'sparkle' | 'plane'
}

export const audiences: Audience[] = [
  {
    label: 'Barberías',
    detail: 'Reservas por corte o combo, recordatorios automáticos y menos sillas vacías.',
    icon: 'scissors',
  },
  {
    label: 'Peluquerías y salones',
    detail: 'Agenda por servicio y estilista, con confirmaciones que llegan solas por WhatsApp.',
    icon: 'sparkle',
  },
  {
    label: 'Agencias de viaje',
    detail: 'Una página que vende tus planes, con formulario de reserva y seguimiento por WhatsApp.',
    icon: 'plane',
  },
]

export interface PricingPlan {
  id: string
  name: string
  tagline: string
  setupPrice: string
  features: string[]
  highlight?: boolean
}

export const plans: PricingPlan[] = [
  {
    id: 'light',
    name: 'Light',
    tagline: 'Para tener presencia online ya.',
    setupPrice: '$150.000',
    features: [
      '1 landing page',
      'Botón de WhatsApp integrado',
      'Dominio propio incluido',
    ],
  },
  {
    id: 'core',
    name: 'Core',
    tagline: 'Para negocios que ya venden y quieren verse a la altura.',
    setupPrice: '$220.000',
    features: [
      'Sitio multi-sección (Inicio, Servicios, Nosotros, Contacto)',
      'Galería/catálogo de productos o servicios',
      'Formulario de contacto',
      'Botón de WhatsApp integrado',
      'Dominio propio incluido',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Para negocios que viven de las reservas.',
    setupPrice: '$300.000',
    highlight: true,
    features: [
      'Sitio completo multi-página',
      'Booking engine (reservas online)',
      'Botón de WhatsApp integrado',
      'Dominio propio incluido',
    ],
  },
]

export const pricingNote =
  'Sin mensualidades. Después del lanzamiento solo se cobra la renovación anual del dominio (aprox. $40.000–$60.000 COP al año) y, si más adelante querés agregar algo nuevo a tu sitio, se cobra únicamente por ese trabajo puntual — nunca como un cobro fijo recurrente.'
