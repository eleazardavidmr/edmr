// TODO(Eleazar): confirmar que este es el número de WhatsApp correcto.
export const WHATSAPP_NUMBER = '573155614748'

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const CONTACT_MESSAGE =
  'Hola Eleazar, vi tu página y quiero hablar sobre una web para mi negocio.'

export const CALL_MESSAGE = 'Hola Eleazar, quiero agendar la llamada de 15 minutos.'

// TODO(Eleazar): pegar aquí el link de agenda (Calendly, Cal.com, Google Calendar).
// Mientras esté vacío, "Agendar llamada" abre WhatsApp con CALL_MESSAGE.
export const BOOKING_URL = ''

export const callLink = BOOKING_URL || whatsappLink(CALL_MESSAGE)
export const contactLink = whatsappLink(CONTACT_MESSAGE)

export const SITE = {
  name: 'EDMR',
  owner: 'Eleazar Muñoz',
  city: 'Cali, Colombia',
  since: 2023,
}
