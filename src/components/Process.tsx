import { useRef } from 'react'
import { steps } from '@/data/content'
import { gsap, ScrollTrigger, SplitText, useGSAP, MOTION_OK } from '@/lib/gsap'

const cardTone = [
  'bg-ember-950 border-ember-900',
  'bg-[#3a0f0b] border-ember-800',
  'bg-ember-900 border-ember-700',
  'bg-ember-500 border-flame-300/40',
]

const TOP = 88 // espacio para el nav fijo
const STEP_OFFSET = 18 // cuánto asoma cada tarjeta apilada

export default function Process() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        SplitText.create('[data-process-title]', {
          type: 'words',
          mask: 'words',
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.words, {
              yPercent: 110,
              duration: 1,
              stagger: 0.06,
              ease: 'expo.out',
              scrollTrigger: { trigger: '[data-process-title]', start: 'top 85%' },
            }),
        })

        const cards = gsap.utils.toArray<HTMLElement>('[data-step]')
        const last = cards[cards.length - 1]
        const lastTop = TOP + (cards.length - 1) * STEP_OFFSET

        cards.forEach((card, i) => {
          const top = TOP + i * STEP_OFFSET
          if (i < cards.length - 1) {
            ScrollTrigger.create({
              trigger: card,
              start: `top top+=${top}`,
              endTrigger: last,
              end: `top top+=${lastTop}`,
              pin: true,
              pinSpacing: false,
            })
            // Cuando llega la siguiente, esta se hunde: se achica y se oscurece.
            gsap.to(card.querySelector('[data-step-body]'), {
              scale: 0.9,
              ease: 'none',
              scrollTrigger: {
                trigger: cards[i + 1],
                start: 'top bottom',
                end: `top top+=${top + STEP_OFFSET}`,
                scrub: true,
              },
            })
            gsap.to(card.querySelector('[data-step-shade]'), {
              autoAlpha: 0.6,
              ease: 'none',
              scrollTrigger: {
                trigger: cards[i + 1],
                start: 'top bottom',
                end: `top top+=${top + STEP_OFFSET}`,
                scrub: true,
              },
            })
          }

          gsap.from(card.querySelectorAll('[data-step-reveal]'), {
            y: 60,
            autoAlpha: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: { trigger: card, start: 'top 70%' },
          })
          gsap.from(card.querySelector('[data-step-number]'), {
            xPercent: 30,
            ease: 'none',
            scrollTrigger: { trigger: card, start: 'top bottom', end: `top top+=${top}`, scrub: true },
          })
        })
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section id="proceso" ref={root} className="relative bg-ash px-5 pb-28 pt-28 sm:px-10 sm:pb-40 sm:pt-40">
      <div className="mx-auto max-w-7xl">
        <p className="font-display text-eyebrow uppercase text-ember-500">Cómo trabajo</p>
        <h2 data-process-title className="split-safe mt-4 max-w-4xl text-giant text-cream">
          De la llamada a tu página publicada.
        </h2>

        <ol className="mt-16 space-y-6 lg:mt-24">
          {steps.map((step, i) => (
            <li key={step.number} data-step className="relative">
              <div
                data-step-body
                className={`relative flex h-[64svh] min-h-[26rem] origin-top flex-col justify-between overflow-hidden rounded-[2rem] border p-6 sm:p-10 lg:h-[70vh] lg:p-14 ${cardTone[i]}`}
              >
                <span
                  data-step-number
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-[0.18em] -right-[0.04em] font-heading text-[clamp(10rem,42vw,30rem)] font-bold leading-none tracking-[-0.06em] text-cream/[0.07]"
                >
                  {step.number}
                </span>

                <p data-step-reveal className="relative font-display text-eyebrow uppercase text-cream/80">
                  Paso {step.number} / 0{steps.length}
                </p>

                <div className="relative max-w-2xl">
                  <h3 data-step-reveal className="font-heading text-[clamp(2.25rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-cream">
                    {step.title}
                  </h3>
                  <p data-step-reveal className="mt-5 max-w-lg text-lead text-cream/80">
                    {step.description}
                  </p>
                </div>

                <span data-step-shade aria-hidden="true" className="pointer-events-none invisible absolute inset-0 bg-ash opacity-0" />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
