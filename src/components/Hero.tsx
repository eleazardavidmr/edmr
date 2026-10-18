import { useRef } from 'react'
import RotatingText from '@/react-bits/RotatingText'
import HeroBackground from './HeroBackground'
import Button from './Button'
import { callLink, contactLink, SITE } from '@/lib/site'
import { heroWords } from '@/data/content'
import { gsap, SplitText, useGSAP, MOTION_OK } from '@/lib/gsap'

function ScrollBadge() {
  return (
    <div data-hero-badge className="relative hidden h-28 w-28 shrink-0 xl:block" aria-hidden="true">
      <svg data-hero-badge-ring viewBox="0 0 100 100" className="h-full w-full">
        <defs>
          <path id="hero-badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-cream-dim font-display text-[8.5px] uppercase tracking-[0.32em]">
          <textPath href="#hero-badge-circle">Desliza · Desliza · Desliza ·</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xl text-ember-500">↓</span>
    </div>
  )
}

export default function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(MOTION_OK, () => {
        // El HTML pre-renderizado llega oculto por CSS (.js [data-intro]) para que no "parpadee"
        // antes de la entrada; aquí se vuelve visible justo antes de animar.
        gsap.set('[data-intro]', { visibility: 'visible' })
        const headline = SplitText.create('[data-hero-split]', { type: 'chars', mask: 'chars' })

        const intro = gsap.timeline({ defaults: { ease: 'expo.out' } })
        intro
          .from('[data-hero-bg]', { autoAlpha: 0, duration: 1.6, ease: 'power2.out' }, 0)
          .from(headline.chars, { yPercent: 110, duration: 1.2, stagger: 0.022 }, 0.15)
          .from('[data-hero-pill]', { scale: 0.4, autoAlpha: 0, duration: 1, ease: 'back.out(1.8)' }, 0.55)
          .from('[data-hero-meta]', { y: 16, autoAlpha: 0, duration: 0.9, stagger: 0.08 }, 0.6)
          .from('[data-hero-cta]', { y: 24, autoAlpha: 0, duration: 0.9, stagger: 0.1 }, 0.85)
          .from('[data-hero-badge]', { scale: 0, rotate: -90, autoAlpha: 0, duration: 1.2 }, 1)

        SplitText.create('[data-hero-copy]', {
          type: 'lines',
          mask: 'lines',
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, { yPercent: 100, duration: 1, stagger: 0.08, ease: 'expo.out', delay: 0.75 }),
        })

        gsap.to('[data-hero-badge-ring]', { rotate: 360, duration: 14, repeat: -1, ease: 'none' })

        // Al salir del hero el titular se aleja y se apaga; el fondo baja más lento (profundidad).
        const out = gsap.timeline({
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        })
        out
          .to('[data-hero-content]', { yPercent: -18, scale: 0.94, autoAlpha: 0.15, ease: 'none' }, 0)
          .to('[data-hero-bg]', { yPercent: 25, scale: 1.12, ease: 'none' }, 0)
      })

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section id="top" ref={root} className="relative min-h-[100svh] overflow-hidden bg-ash">
      <div data-hero-bg data-intro className="pointer-events-none absolute inset-0 opacity-80 mix-blend-screen">
        <HeroBackground />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ash/40 via-transparent to-ash" />
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      <div
        data-hero-content
        data-intro
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl origin-top flex-col justify-end px-5 pb-10 pt-28 sm:px-10 sm:pb-14"
      >
        <div className="mb-6 flex items-center justify-between gap-4 font-display text-eyebrow uppercase text-cream-dim sm:mb-10">
          {/* H1 con lo que la gente busca en Google; el titular grande de abajo es la frase de marca. */}
          <h1 data-hero-meta className="font-display text-eyebrow font-normal">
            Páginas web para negocios en Cali
          </h1>
          <span data-hero-meta className="hidden sm:inline">
            {SITE.owner} · desde {SITE.since}
          </span>
        </div>

        <p className="text-mega split-safe text-cream">
          <span data-hero-split className="block">
            Que tus clientes
          </span>
          <span data-hero-pill className="my-[0.08em] block origin-left text-[0.62em] leading-none">
            <RotatingText
              texts={heroWords}
              effect="slide"
              highlight
              highlightColor="#c6352e"
              rotationInterval={2800}
              staggerDuration={0.01}
              staggerFrom="last"
              splitBy="characters"
              mainClassName="rounded-[0.35em] px-[0.3em] pb-[0.08em] pt-[0.02em] overflow-hidden"
              transition={{ type: 'spring', damping: 34, stiffness: 520 }}
            />
          </span>
          <span data-hero-split className="block text-flame-300">
            sin esperar
          </span>
          <span data-hero-split className="block">
            tu respuesta<span className="text-ember-500">.</span>
          </span>
        </p>

        <div className="mt-8 grid items-end gap-8 sm:mt-12 xl:grid-cols-[1fr_auto_auto] xl:gap-12">
          <p data-hero-copy className="split-safe max-w-md text-lead text-cream-dim">
            Soy Eleazar, desarrollador web en Cali. Hago páginas para barberías, restaurantes, tiendas y
            agencias: tus clientes ven lo que ofreces, reservan y te escriben por WhatsApp.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <span data-hero-cta>
              <Button href={contactLink} external className="w-full sm:w-auto">
                Quiero mi página <span aria-hidden="true">→</span>
              </Button>
            </span>
            <span data-hero-cta>
              <Button href={callLink} variant="ghost" external className="w-full sm:w-auto">
                Agendar llamada
              </Button>
            </span>
          </div>

          <ScrollBadge />
        </div>

        <p data-hero-meta className="mt-8 flex items-center gap-2 font-display text-eyebrow uppercase text-cream-dim">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ember-500" />
          </span>
          Tomo máximo 3 clientes nuevos al mes
        </p>
      </div>
    </section>
  )
}
