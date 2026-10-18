import { faqs } from '@/data/content'
import { SITE, WHATSAPP_NUMBER } from '@/lib/site'

export const SITE_URL = 'https://www.edmr.dev/'

/**
 * Datos estructurados (schema.org) que lee Google. Solo hechos reales: sin dirección
 * exacta, sin reseñas ni calificaciones — Google penaliza el marcado inventado.
 */
export function structuredData() {
  const business = `${SITE_URL}#negocio`
  const person = `${SITE_URL}#eleazar`
  const cali = {
    '@type': 'PostalAddress',
    addressLocality: 'Cali',
    addressRegion: 'Valle del Cauca',
    addressCountry: 'CO',
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': business,
        name: SITE.name,
        alternateName: `${SITE.name} · ${SITE.owner}`,
        description:
          'Diseño y desarrollo de páginas web para negocios locales en Cali: reservas en línea, carta o catálogo y botón de WhatsApp.',
        url: SITE_URL,
        logo: `${SITE_URL}web-app-manifest-512x512.png`,
        image: `${SITE_URL}web-app-manifest-512x512.png`,
        telephone: `+${WHATSAPP_NUMBER}`,
        address: cali,
        areaServed: { '@type': 'City', name: 'Cali' },
        founder: { '@id': person },
        foundingDate: String(SITE.since),
        knowsLanguage: 'es',
        serviceType: 'Diseño de páginas web',
        // TODO(Eleazar): agregar aquí el link de tu Instagram y de tu perfil de Google Business.
        sameAs: [],
      },
      {
        '@type': 'Person',
        '@id': person,
        name: SITE.owner,
        jobTitle: 'Desarrollador web',
        worksFor: { '@id': business },
        address: cali,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}#sitio`,
        url: SITE_URL,
        name: SITE.name,
        inLanguage: 'es-CO',
        publisher: { '@id': business },
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}#preguntas`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  }
}
