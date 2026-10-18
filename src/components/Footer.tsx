import { useRef } from 'react'
import { callLink, contactLink, SITE } from '@/lib/site'
import { gsap, useGSAP, MOTION_OK } from '@/lib/gsap'

export default function Footer() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from('[data-wordmark-char]', {
          yPercent: 100,
          ease: 'none',
          stagger: 0.08,
          scrollTrigger: { trigger: '[data-wordmark]', start: 'top bottom', end: 'bottom bottom', scrub: true },
        })
      })
    },
    { scope: root },
  )

  return (
    <footer ref={root} className="relative overflow-hidden border-t border-ember-900/70 bg-ash px-5 pt-14 sm:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
        <p className="max-w-xs text-sm text-cream-dim">
          EDMR es {SITE.owner}. Páginas web para negocios locales en Cali, desde {SITE.since}.
        </p>
        <div className="flex flex-col gap-2 text-sm">
          <span className="font-display text-eyebrow uppercase text-ember-500">Contacto</span>
          <a href={contactLink} target="_blank" rel="noreferrer" className="text-cream-dim transition-colors hover:text-cream">
            WhatsApp
          </a>
          <a href={callLink} target="_blank" rel="noreferrer" className="text-cream-dim transition-colors hover:text-cream">
            Agendar llamada
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm text-cream-dim">
          <span className="font-display text-eyebrow uppercase text-ember-500">Dónde</span>
          <span>{SITE.city}</span>
          <span suppressHydrationWarning>
            © {new Date().getFullYear()} EDMR · {SITE.owner}
          </span>
        </div>
      </div>

      <div
        data-wordmark
        aria-hidden="true"
        className="mx-auto mt-12 flex max-w-7xl justify-between overflow-hidden font-heading text-[27vw] font-bold leading-[0.78] tracking-[-0.06em] text-ember-500 lg:text-[24rem]"
      >
        {'EDMR'.split('').map((char, i) => (
          <span key={i} data-wordmark-char className="inline-block">
            {char}
          </span>
        ))}
      </div>
    </footer>
  )
}
