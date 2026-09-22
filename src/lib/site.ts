export const WHATSAPP_NUMBER = '573155614748'

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const DEMO_MESSAGE =
  '¡Hola! Vi la página de EDMR y quiero agendar una demo para mi negocio.'

export const SITE = {
  name: 'EDMR',
  city: 'Cali, Colombia',
}
