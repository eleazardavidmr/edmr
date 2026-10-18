import { useRef } from 'react'
import ScrollReveal from '@/react-bits/ScrollReveal'
import CountUp from '@/react-bits/CountUp'
import { aboutText, facts } from '@/data/content'
import { SITE } from '@/lib/site'
import { gsap, useGSAP, MOTION_OK } from '@/lib/gsap'

// TODO(Eleazar): poner tu foto en /public (ej. /eleazar.webp, 4:5, ~800×1000) y escribir la ruta aquí.
// Mientras esté vacía se muestra un monograma como placeholder.
const PHOTO_SRC = ''

function Portrait() {
  return (
    <figure data-portrait className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-ember-900">
      <div data-portrait-inner className="absolute inset-[-12%]">
        {PHOTO_SRC ? (
          <img
            src={PHOTO_SRC}
            alt={`Foto de ${SITE.owner}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            data-todo="foto-eleazar"
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ember-950 via-ember-900 to-ember-700"
          >
            <span className="font-heading text-[clamp(6rem,22vw,14rem)] font-bold leading-none tracking-[-0.06em] text-ember-500/80">
              EM
            </span>
          </div>
        )}
      </div>
      <figcaption className="absolute inset-x-4 bottom-4 flex justify-between font-display text-eyebrow uppercase text-cream">
        <span>{SITE.owner}</span>
        <span className="text-cream-dim">Cali</span>
      </figcaption>
    </figure>
  )
}

export default function About() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        // La foto se "abre" desde abajo y su contenido se mueve más lento que la página.
        gsap.fromTo(
          '[data-portrait]',
          { clipPath: 'inset(35% 0% 0% 0% round 2rem)' },
          {
            clipPath: 'inset(0% 0% 0% 0% round 2rem)',
            ease: 'none',
            scrollTrigger: { trigger: '[data-portrait]', start: 'top 95%', end: 'top 35%', scrub: true },
          },
        )
        gsap.fromTo(
          '[data-portrait-inner]',
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: { trigger: '[data-portrait]', start: 'top bottom', end: 'bottom top', scrub: true },
          },
        )
        gsap.from('[data-fact]', {
          y: 40,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: { trigger: '[data-facts]', start: 'top 85%' },
        })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section id="quien-soy" ref={root} className="relative bg-ash px-5 py-28 sm:px-10 sm:py-40">
      <div className="ember-wash" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div className="mx-auto w-full max-w-[22rem] lg:max-w-none">
            <Portrait />
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-display text-eyebrow uppercase text-ember-500">Quién está detrás</p>
            <ScrollReveal
              baseOpacity={0.12}
              enableBlur
              blurStrength={6}
              baseRotation={2}
              stagger={0.04}
              highlightColor="#f2895a"
              containerClassName="!my-6"
              textClassName="font-heading !text-[clamp(1.65rem,3.4vw,3.25rem)] !leading-[1.12] !font-medium tracking-[-0.025em] text-cream"
              wordAnimationEnd="bottom 55%"
            >
              {aboutText}
            </ScrollReveal>
          </div>
        </div>

        <dl data-facts className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ember-900/70 pt-10 lg:mt-28 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} data-fact>
              <dt className="sr-only">{fact.label}</dt>
              <dd>
                <CountUp
                  to={fact.value}
                  from={fact.value > 100 ? 2000 : 0}
                  mode="roll"
                  duration={2.2}
                  className="font-heading text-[clamp(3.25rem,8vw,6rem)] font-bold leading-none tracking-[-0.05em] text-cream"
                />
                <p className="mt-3 max-w-[14rem] text-sm text-cream-dim">{fact.label}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
