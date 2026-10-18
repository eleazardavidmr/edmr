import { Fragment, useRef } from 'react'
import { gsap, useGSAP, MOTION_OK } from '@/lib/gsap'

const lines = [
  ['Si', 'no', 'te', 'gusta,'],
  ['te', 'devuelvo', 'el', 'anticipo.'],
]

/** Garantía como frase que se "entinta" palabra por palabra mientras la lees al hacer scroll. */
export default function Guarantee() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          '[data-ink]',
          { backgroundPosition: '100% 0%' },
          {
            backgroundPosition: '0% 0%',
            ease: 'none',
            stagger: 0.25,
            scrollTrigger: { trigger: '[data-ink-block]', start: 'top 80%', end: 'bottom 45%', scrub: true },
          },
        )
        gsap.to('[data-seal]', {
          rotate: 360,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
        })
        gsap.from('[data-guarantee-copy]', {
          y: 30,
          autoAlpha: 0,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: { trigger: '[data-guarantee-copy]', start: 'top 90%' },
        })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section id="garantia" ref={root} className="relative overflow-hidden bg-ash px-5 py-28 sm:px-10 sm:py-40">
      <div className="relative mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-6">
          <p className="font-display text-eyebrow uppercase text-ember-500">Garantía</p>
          <svg
            data-seal
            viewBox="0 0 100 100"
            className="h-24 w-24 shrink-0 text-ember-500 sm:h-32 sm:w-32"
            aria-hidden="true"
          >
            <defs>
              <path id="seal-circle" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
            </defs>
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <text className="fill-current font-display text-[7.6px] uppercase tracking-[0.3em]">
              <textPath href="#seal-circle">Garantía · Anticipo de vuelta · Garantía ·</textPath>
            </text>
            <text x="50" y="57" textAnchor="middle" className="fill-cream font-heading text-[22px] font-bold">
              ✓
            </text>
          </svg>
        </div>

        <h2 data-ink-block className="mt-8 text-mega">
          {lines.map((line, li) => (
            <span key={li} className="block">
              {line.map((word, wi) => (
                // Espacio real entre palabras (no solo margen): así el texto se lee bien sin CSS.
                <Fragment key={wi}>
                  <span
                    data-ink
                    className="inline-block bg-[length:200%_100%] bg-clip-text bg-[position:0%_0%] text-transparent [background-image:linear-gradient(90deg,var(--color-cream)_50%,rgba(245,239,230,0.1)_50%)]"
                  >
                    {word}
                  </span>{' '}
                </Fragment>
              ))}
            </span>
          ))}
        </h2>

        <p data-guarantee-copy className="mt-10 max-w-xl text-lead text-cream-dim lg:ml-auto">
          Cuando tu sitio esté terminado, lo revisas. Si no te gusta, te devuelvo el anticipo completo.
        </p>
      </div>
    </section>
  )
}
