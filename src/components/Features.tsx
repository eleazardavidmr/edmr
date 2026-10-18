import { useRef, type JSX } from 'react'
import SpotlightCard from '@/react-bits/SpotlightCard'
import { features, type Feature } from '@/data/content'
import { gsap, ScrollTrigger, SplitText, useGSAP, MOTION_OK } from '@/lib/gsap'
import { WhatsAppIcon } from './icons'

/* Micro-ilustraciones: cada una tiene su propio loop que solo corre mientras se ve. */

function BookingArt() {
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {Array.from({ length: 16 }, (_, i) => (
        <span
          key={i}
          data-art-slot
          className={`rounded-xl border border-cream/10 py-3 text-center font-display text-[0.7rem] text-cream-dim sm:py-4 sm:text-xs lg:py-6 lg:text-sm ${i >= 12 ? 'hidden lg:block' : ''}`}
        >
          {`${9 + Math.floor(i / 2)}:${i % 2 ? '30' : '00'}`}
        </span>
      ))}
    </div>
  )
}

function CatalogArt() {
  return (
    <div className="space-y-2">
      {[72, 54, 64].map((w, i) => (
        <div key={i} data-art-row className="flex items-center gap-3 rounded-xl bg-cream/5 p-2.5">
          <span className="h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br from-ember-700 to-flame-300" />
          <span className="h-2 rounded-full bg-cream/20" style={{ width: `${w}%` }} />
        </div>
      ))}
    </div>
  )
}

function WhatsAppArt() {
  return (
    <div className="flex items-end gap-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
        <WhatsAppIcon className="h-6 w-6" />
      </span>
      <span className="flex gap-1.5 rounded-2xl rounded-bl-sm bg-cream/10 px-4 py-3.5">
        {[0, 1, 2].map((i) => (
          <span key={i} data-art-dot className="h-2 w-2 rounded-full bg-cream-dim" />
        ))}
      </span>
    </div>
  )
}

function DomainArt() {
  return (
    <div className="flex items-center gap-2 overflow-hidden rounded-full border border-cream/10 bg-cream/5 px-4 py-3 font-display text-sm text-cream sm:text-base">
      <span className="text-ember-500">https://</span>
      <span data-art-domain>tunegocio.com</span>
      <span data-art-caret className="h-5 w-px bg-flame-300" />
    </div>
  )
}

function ScheduleArt() {
  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 40 40" className="h-14 w-14 text-ember-500" aria-hidden="true">
        <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        <line data-art-hand x1="20" y1="20" x2="20" y2="8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </svg>
      <div className="font-display text-xs leading-relaxed text-cream-dim">
        <p className="text-cream">Lun a Sáb</p>
        <p>9:00 am a 8:00 pm</p>
      </div>
    </div>
  )
}

function MobileArt() {
  return (
    <div className="mx-auto h-24 w-14 overflow-hidden rounded-xl border-2 border-cream/20 p-1.5">
      <div data-art-feed className="space-y-1.5">
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i} className={`block h-3 rounded ${i % 3 === 0 ? 'bg-ember-500/70' : 'bg-cream/15'}`} />
        ))}
      </div>
    </div>
  )
}

const art: Record<Feature['id'], () => JSX.Element> = {
  booking: BookingArt,
  catalog: CatalogArt,
  whatsapp: WhatsAppArt,
  domain: DomainArt,
  schedule: ScheduleArt,
  mobile: MobileArt,
}

const layout: Record<Feature['id'], string> = {
  booking: 'sm:col-span-2 lg:col-span-4 lg:row-span-2',
  catalog: 'lg:col-span-2',
  whatsapp: 'lg:col-span-2',
  domain: 'sm:col-span-2 lg:col-span-2',
  schedule: 'lg:col-span-2',
  mobile: 'lg:col-span-2',
}

export default function Features() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        SplitText.create('[data-features-title]', {
          type: 'words',
          mask: 'words',
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.words, {
              yPercent: 110,
              duration: 1,
              stagger: 0.06,
              ease: 'expo.out',
              scrollTrigger: { trigger: '[data-features-title]', start: 'top 85%' },
            }),
        })

        // Estado inicial dentro del contexto (se revierte solo); la entrada va en lotes.
        gsap.set('[data-feature]', {
          y: 90,
          rotateX: -18,
          autoAlpha: 0,
          transformPerspective: 900,
          transformOrigin: '50% 100%',
        })
        ScrollTrigger.batch('[data-feature]', {
          start: 'top 90%',
          once: true,
          onEnter: (cards) =>
            gsap.to(cards, { y: 0, rotateX: 0, autoAlpha: 1, duration: 1.1, stagger: 0.12, ease: 'expo.out' }),
        })

        // Loops de cada ilustración: corren solo mientras la tarjeta está en pantalla.
        const loops: gsap.core.Animation[] = [
          gsap.to('[data-art-slot]', {
            backgroundColor: 'rgba(198,53,46,0.85)',
            color: '#f5efe6',
            duration: 0.35,
            stagger: { each: 0.35, from: 'random', repeat: -1, yoyo: true, repeatDelay: 1.4 },
          }),
          gsap.to('[data-art-row]', { x: 8, duration: 0.6, stagger: { each: 0.2, repeat: -1, yoyo: true }, ease: 'sine.inOut' }),
          gsap.to('[data-art-dot]', { y: -5, duration: 0.35, stagger: { each: 0.12, repeat: -1, yoyo: true }, ease: 'sine.inOut' }),
          gsap.fromTo('[data-art-domain]', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'steps(13)', repeat: -1, repeatDelay: 1.6 }),
          gsap.to('[data-art-caret]', { autoAlpha: 0, duration: 0.5, repeat: -1, yoyo: true, ease: 'steps(1)' }),
          gsap.to('[data-art-hand]', { rotate: 360, svgOrigin: '20 20', duration: 6, repeat: -1, ease: 'none' }),
          gsap.to('[data-art-feed]', { yPercent: -45, duration: 2.4, repeat: -1, yoyo: true, ease: 'sine.inOut' }),
        ]
        loops.forEach((loop) => loop.pause())
        ScrollTrigger.create({
          trigger: '[data-features-grid]',
          start: 'top bottom',
          end: 'bottom top',
          onToggle: (self) => loops.forEach((loop) => (self.isActive ? loop.play() : loop.pause())),
        })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section id="tu-pagina" ref={root} className="relative bg-ash px-5 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <p className="font-display text-eyebrow uppercase text-ember-500">Tu página</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <h2 data-features-title className="split-safe text-giant text-cream">
            Lo que puede tener la tuya.
          </h2>
          <p className="max-w-sm text-lead text-cream-dim">
            Cada página se arma según tu negocio. Me dices qué necesitas y lo hago.
          </p>
        </div>

        <div data-features-grid className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-20 lg:grid-cols-6">
          {features.map((feature, index) => {
            const Art = art[feature.id]
            return (
              <div key={feature.id} data-feature className={layout[feature.id]}>
                <SpotlightCard
                  spotlightColor="rgba(198, 53, 46, 0.3)"
                  className="material-card !border-ember-900 flex h-full flex-col justify-between gap-10 !p-6 sm:!p-8"
                >
                  <div className={feature.id === 'booking' ? 'lg:max-w-md' : ''}>
                    <Art />
                  </div>
                  <div>
                    <span className="font-display text-xs text-ember-500">0{index + 1}</span>
                    <h3
                      className={`mt-2 font-heading font-semibold text-cream ${
                        feature.id === 'booking' ? 'text-3xl sm:text-5xl' : 'text-2xl'
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-cream-dim sm:text-base">{feature.body}</p>
                  </div>
                </SpotlightCard>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
