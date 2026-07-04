// TODO: reemplazar por el número real de WhatsApp de EDMR (formato internacional sin "+" ni espacios).
export const WHATSAPP_NUMBER = '573001234567'

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const DEMO_MESSAGE =
  '¡Hola! Vi la página de EDMR y quiero agendar una demo para mi negocio.'

export const SITE = {
  name: 'EDMR',
  city: 'Cali, Colombia',
  email: 'hola@edmr.co',
}
