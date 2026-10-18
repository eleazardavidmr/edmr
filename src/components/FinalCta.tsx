import { useRef } from 'react'
import ScrollFloat from '@/react-bits/ScrollFloat'
import Magnet from '@/react-bits/Magnet'
import { callLink, contactLink } from '@/lib/site'
import { gsap, useGSAP, MOTION_OK } from '@/lib/gsap'
import { WhatsAppIcon } from './icons'

export default function FinalCta() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.from('[data-cta-orb]', {
          scale: 0,
          rotate: -120,
          duration: 1.4,
          ease: 'elastic.out(1, 0.6)',
          scrollTrigger: { trigger: '[data-cta-orb]', start: 'top 90%' },
        })
        gsap.from('[data-cta-copy]', {
          y: 30,
          autoAlpha: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: { trigger: '[data-cta-copy]', start: 'top 92%' },
        })
        gsap.to('[data-cta-glow]', {
          scale: 1.25,
          opacity: 0.55,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section id="contacto" ref={root} className="relative overflow-hidden bg-ash px-5 pb-24 pt-20 sm:px-10 sm:pb-32">
      <div
        data-cta-glow
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-500/25 opacity-40 blur-[120px]"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center text-center">
        <p className="font-display text-eyebrow uppercase text-ember-500">Contacto</p>
        <ScrollFloat
          containerClassName="!my-2 w-full"
          textClassName="font-heading !text-[clamp(4rem,17vw,15rem)] !font-bold !leading-[1] tracking-[-0.05em] text-cream"
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=30%"
          stagger={0.04}
        >
          ¿Hablamos?
        </ScrollFloat>

        <p data-cta-copy className="max-w-md text-lead text-cream-dim">
          Escríbeme por WhatsApp y cuéntame de tu negocio. Te respondo yo.
        </p>

        <div data-cta-orb className="mt-12">
          <Magnet padding={120} magnetStrength={3} tilt={6}>
            <a
              href={contactLink}
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-44 w-44 flex-col items-center justify-center gap-2 rounded-full bg-ember-500 font-display text-sm uppercase tracking-widest text-cream shadow-[0_30px_100px_-20px_rgba(198,53,46,0.9)] transition-colors duration-300 hover:bg-ember-400 active:scale-95 sm:h-56 sm:w-56"
            >
              <WhatsAppIcon className="h-8 w-8 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
              Escríbeme
            </a>
          </Magnet>
        </div>

        <a
          data-cta-copy
          href={callLink}
          target="_blank"
          rel="noreferrer"
          className="mt-10 text-sm text-cream-dim underline decoration-ember-800 underline-offset-4 transition-colors hover:text-cream hover:decoration-ember-500"
        >
          o agenda una llamada de 15 minutos
        </a>
      </div>
    </section>
  )
}
