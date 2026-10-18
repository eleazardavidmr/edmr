import { useRef } from 'react'
import { faqs } from '@/data/content'
import { gsap, SplitText, useGSAP, MOTION_OK } from '@/lib/gsap'

/**
 * <details> nativo: accesible por teclado, sin JS para abrir/cerrar y con las respuestas
 * en el HTML (Google las lee aunque estén cerradas). La altura se anima con CSS
 * (interpolate-size + ::details-content) donde el navegador lo soporta.
 */
export default function Faq() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        SplitText.create('[data-faq-title]', {
          type: 'words',
          mask: 'words',
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.words, {
              yPercent: 110,
              duration: 1,
              stagger: 0.06,
              ease: 'expo.out',
              scrollTrigger: { trigger: '[data-faq-title]', start: 'top 85%' },
            }),
        })
        gsap.from('[data-faq-item]', {
          y: 40,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: 'expo.out',
          scrollTrigger: { trigger: '[data-faq-list]', start: 'top 85%' },
        })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section id="preguntas" ref={root} className="relative bg-ash px-5 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="font-display text-eyebrow uppercase text-ember-500">Preguntas frecuentes</p>
          <h2 data-faq-title className="split-safe mt-4 text-giant text-cream">
            Lo que me preguntan antes de empezar.
          </h2>
        </div>

        <div data-faq-list className="border-t border-ember-900/70">
          {faqs.map((faq) => (
            <details key={faq.question} data-faq-item className="faq-item group border-b border-ember-900/70">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="font-heading text-xl font-semibold leading-snug text-cream transition-colors group-hover:text-flame-300 sm:text-2xl">
                  {faq.question}
                </h3>
                <span
                  aria-hidden="true"
                  className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ember-800 text-ember-500 transition-transform duration-500 group-open:rotate-45"
                >
                  <span className="absolute h-px w-4 bg-current" />
                  <span className="absolute h-4 w-px bg-current" />
                </span>
              </summary>
              <p className="max-w-xl pb-7 pr-12 text-lead text-cream-dim">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
