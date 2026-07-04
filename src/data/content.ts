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

export const pricingFeatures = [
  'Página web hecha a la medida, no una plantilla',
  'Sistema de reservas y citas online, sin límite de reservas',
  'Confirmaciones y recordatorios automáticos por WhatsApp',
  'Hosting, dominio y mantenimiento incluidos',
  'Cambios y ajustes menores incluidos cada mes',
  'Soporte directo por WhatsApp cuando lo necesites',
]
