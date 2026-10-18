import { useRef } from 'react'
import { chapters, chatMessages, demoServices, demoSlots } from '@/data/content'
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion'
import { gsap, useGSAP, MOTION_OK } from '@/lib/gsap'
import { WhatsAppIcon } from './icons'

const PICKED_SLOT = '5:00'

/* ---------- Pantallas del teléfono (todo en unidades cqw: escalan con el teléfono) ---------- */

function ChatScreen() {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#120706]">
      <div className="flex items-center gap-[3cqw] border-b border-cream/10 px-[5cqw] pb-[3.5cqw] pt-[11cqw]">
        <span className="text-[5cqw] text-cream-dim">‹</span>
        <span className="h-[9cqw] w-[9cqw] rounded-full bg-gradient-to-br from-ember-500 to-flame-300" />
        <div className="flex-1 leading-tight">
          <p className="text-[4.2cqw] font-semibold text-cream">Tu negocio</p>
          <p className="text-[3.2cqw] text-cream-dim">Mensajes</p>
        </div>
        <span
          data-unread
          className="min-w-[8cqw] rounded-full bg-ember-500 px-[2cqw] py-[0.6cqw] text-center text-[3.4cqw] font-bold text-cream"
        >
          0
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-end gap-[2.6cqw] px-[4.5cqw] pb-[4cqw]">
        {chatMessages.map((message, index) => (
          <div key={message} data-msg className="flex flex-col items-start">
            <p className="max-w-[78%] rounded-[4cqw] rounded-bl-[1cqw] bg-cream/10 px-[3.6cqw] py-[2.4cqw] text-[3.7cqw] leading-snug text-cream">
              {message}
            </p>
            <span className="mt-[0.8cqw] pl-[1cqw] text-[2.6cqw] text-cream-dim/60">
              {index === chatMessages.length - 1 ? 'Visto · sin respuesta' : `${7 + index}:4${index} pm`}
            </span>
          </div>
        ))}
      </div>

      <div className="mx-[4cqw] mb-[6cqw] rounded-full border border-cream/10 px-[4cqw] py-[2.6cqw] text-[3.4cqw] text-cream-dim/50">
        Escribe un mensaje…
      </div>
    </div>
  )
}

function SiteScreen() {
  return (
    <div data-site className="absolute inset-0 flex flex-col overflow-hidden bg-cream text-ash">
      <div className="flex items-center gap-[2cqw] bg-[#ede5d9] px-[4cqw] pb-[2.5cqw] pt-[10cqw]">
        <span className="flex flex-1 items-center justify-center gap-[1.5cqw] rounded-full bg-white/80 py-[1.6cqw] text-[3.2cqw] text-ash/70">
          <svg viewBox="0 0 12 12" className="h-[2.6cqw] w-[2.6cqw]" aria-hidden="true">
            <path d="M3 5V4a3 3 0 0 1 6 0v1M2.5 5h7v5.5h-7z" fill="none" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          tunegocio.com
        </span>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <div data-site-scroll className="px-[5cqw] pb-[30cqw]">
          <div data-site-item className="mt-[4cqw] h-[34cqw] rounded-[4cqw] bg-gradient-to-br from-ember-700 via-ember-500 to-flame-300 p-[4cqw]">
            <p className="text-[3cqw] font-semibold uppercase tracking-[0.2em] text-cream/80">Barbería</p>
            <p className="mt-[1cqw] font-heading text-[8cqw] font-bold leading-none text-cream">Tu negocio</p>
          </div>
          <p data-site-item className="mt-[3cqw] flex items-center gap-[1.5cqw] text-[3.3cqw] text-ash/70">
            <span className="h-[2cqw] w-[2cqw] rounded-full bg-green-600" /> Abierto hoy · 9:00 am a 8:00 pm
          </p>

          <p data-site-item className="mt-[5cqw] text-[3cqw] font-bold uppercase tracking-[0.18em] text-ember-700">
            Servicios
          </p>
          <ul className="mt-[2cqw] divide-y divide-ash/10">
            {demoServices.map((service) => (
              <li data-site-item key={service.name} className="flex justify-between py-[2.4cqw] text-[3.8cqw]">
                <span className="font-semibold">{service.name}</span>
                <span className="text-ash/60">{service.time}</span>
              </li>
            ))}
          </ul>

          <p className="mt-[6cqw] text-[3cqw] font-bold uppercase tracking-[0.18em] text-ember-700">Reserva tu hora</p>
          <div className="mt-[2.5cqw] flex gap-[2cqw] text-[3.2cqw]">
            {['Hoy', 'Mañana', 'Sáb'].map((day, i) => (
              <span
                key={day}
                className={`rounded-full px-[3.5cqw] py-[1.5cqw] ${i === 0 ? 'bg-ash text-cream' : 'bg-ash/5 text-ash/70'}`}
              >
                {day}
              </span>
            ))}
          </div>
          <div className="mt-[3cqw] grid grid-cols-3 gap-[2cqw]">
            {demoSlots.map((slot) => (
              <span
                key={slot}
                data-slot
                {...(slot === PICKED_SLOT ? { 'data-slot-pick': true } : {})}
                className="rounded-[2.5cqw] border border-ash/15 py-[2.2cqw] text-center text-[3.4cqw] font-semibold"
              >
                {slot}
              </span>
            ))}
          </div>
          <span
            data-book-btn
            className="mt-[4cqw] block rounded-full bg-ember-500 py-[3.2cqw] text-center text-[3.8cqw] font-bold text-cream"
          >
            Reservar 5:00 pm
          </span>
        </div>

        <span className="absolute bottom-[5cqw] right-[5cqw] flex h-[12cqw] w-[12cqw] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg">
          <WhatsAppIcon className="h-[6.5cqw] w-[6.5cqw]" />
        </span>

        <div
          data-confirm
          className="absolute inset-x-[4cqw] bottom-[4cqw] flex items-center gap-[3cqw] rounded-[4cqw] bg-ash p-[4cqw] text-cream shadow-2xl"
        >
          <svg viewBox="0 0 24 24" className="h-[10cqw] w-[10cqw] shrink-0" aria-hidden="true">
            <circle cx="12" cy="12" r="11" className="fill-green-600" />
            <path
              data-check
              d="M7 12.5l3.2 3.2L17 9"
              fill="none"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="16"
            />
          </svg>
          <div className="leading-tight">
            <p className="text-[3.9cqw] font-bold">Reserva confirmada</p>
            <p className="text-[3.1cqw] text-cream-dim">Hoy · 5:00 pm · Corte clásico</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Phone() {
  return (
    <div
      data-phone
      className="relative aspect-[9/19] h-full max-h-[720px] rounded-[2.6rem] border border-cream/15 bg-[#050202] p-[0.55rem] shadow-[0_40px_120px_-30px_rgba(198,53,46,0.6)]"
    >
      <div className="@container relative h-full w-full overflow-hidden rounded-[2.1rem]">
        <ChatScreen />
        <SiteScreen />
        <span className="absolute left-1/2 top-[2.5%] z-10 h-[3.2%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  )
}

/* ---------- Sección ---------- */

export default function PhoneStory() {
  const root = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(MOTION_OK, () => {
        const unread = root.current!.querySelector<HTMLElement>('[data-unread]')!
        const counter = { n: 0 }

        const tl = gsap.timeline({
          defaults: { ease: 'power2.out', duration: 0.6 },
          scrollTrigger: {
            trigger: '[data-story-pin]',
            start: 'top top',
            end: '+=340%',
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        // 1 · Los DMs se acumulan y el teléfono "vibra".
        tl.from('[data-phone]', { y: 80, rotate: 6, scale: 0.9, duration: 0.8 }, 0)
          .from('[data-msg]', { y: 40, scale: 0.8, autoAlpha: 0, transformOrigin: '0% 100%', stagger: 0.4 }, 0.2)
          .to(counter, { n: 23, duration: 2.2, ease: 'none', onUpdate: () => (unread.textContent = String(Math.round(counter.n))) }, 0.2)
          .to('[data-phone]', { rotate: -2.5, x: -6, duration: 0.08, repeat: 5, yoyo: true, ease: 'sine.inOut' }, 2.1)
          .addLabel('site', 2.8)

          // 2 · Sube la página y tapa el chat.
          .to('[data-chapter="0"]', { autoAlpha: 0, y: -50 }, 'site')
          .fromTo('[data-chapter="1"]', { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0 }, 'site+=0.3')
          .to('[data-msg]', { y: -40, autoAlpha: 0, stagger: 0.05, duration: 0.4 }, 'site')
          .fromTo('[data-site]', { yPercent: 104 }, { yPercent: 0, duration: 1.1, ease: 'power3.inOut' }, 'site')
          .from('[data-site-item]', { y: 24, autoAlpha: 0, stagger: 0.1 }, 'site+=0.7')
          .to(
            '[data-site-scroll]',
            {
              // Desplaza hasta el final del contenido: lo que sobra por debajo del área visible.
              y: () => {
                const content = root.current!.querySelector<HTMLElement>('[data-site-scroll]')!
                return -Math.max(0, content.offsetHeight - content.parentElement!.clientHeight)
              },
              duration: 1.4,
              ease: 'power1.inOut',
            },
            'site+=1.9',
          )
          .addLabel('book', 'site+=3.2')

          // 3 · Elige su hora y reserva.
          .to('[data-chapter="1"]', { autoAlpha: 0, y: -50 }, 'book')
          .fromTo('[data-chapter="2"]', { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0 }, 'book+=0.3')
          .from('[data-slot]', { scale: 0.7, autoAlpha: 0, stagger: 0.07, duration: 0.4 }, 'book')
          .to('[data-slot-pick]', { backgroundColor: '#0c0403', color: '#f5efe6', scale: 1.08, duration: 0.35 }, 'book+=0.8')
          .to('[data-book-btn]', { scale: 0.92, duration: 0.15, yoyo: true, repeat: 1 }, 'book+=1.3')
          .fromTo('[data-confirm]', { yPercent: 140, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, ease: 'back.out(1.6)', duration: 0.7 }, 'book+=1.6')
          .fromTo('[data-check]', { strokeDashoffset: 16 }, { strokeDashoffset: 0, duration: 0.4 }, 'book+=2')
          .from('[data-toast]', { x: 60, autoAlpha: 0, stagger: 0.2, duration: 0.6 }, 'book+=1.8')
          .to({}, { duration: 0.6 })

        // Barra de progreso de la historia, sincronizada con todo el timeline.
        tl.fromTo('[data-story-progress]', { scaleY: 0 }, { scaleY: 1, ease: 'none', duration: tl.duration() }, 0)
        tl.fromTo('[data-story-progress-x]', { scaleX: 0 }, { scaleX: 1, ease: 'none', duration: tl.duration() }, 0)
      })

      return () => mm.revert()
    },
    { scope: root, dependencies: [reduced], revertOnUpdate: true },
  )

  if (reduced) {
    return (
      <section id="problema" className="bg-ash px-5 py-24 sm:px-10">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="space-y-12">
            {chapters.map((chapter) => (
              <div key={chapter.title}>
                <p className="font-display text-eyebrow uppercase text-ember-500">{chapter.eyebrow}</p>
                <h2 className="mt-3 text-display-h2 text-cream">{chapter.title}</h2>
                <p className="mt-4 max-w-md text-lead text-cream-dim">{chapter.body}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto h-[600px]">
            <Phone />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="problema" ref={root} className="relative bg-ash">
      <div data-story-pin className="relative h-[100svh] overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[62%] h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-500/20 blur-[100px] lg:left-[72%] lg:top-1/2"
        />

        <div className="relative mx-auto grid h-full max-w-7xl grid-rows-[auto_1fr] gap-4 px-5 pb-6 pt-24 sm:px-10 lg:grid-cols-[1fr_1fr] lg:grid-rows-1 lg:items-center lg:gap-16 lg:pb-8 lg:pt-24">
          {/* Texto: capítulos apilados que se cruzan con el scroll */}
          <div className="relative flex gap-6">
            <div className="relative hidden w-px self-stretch bg-cream/10 lg:block">
              <span data-story-progress className="absolute inset-0 origin-top bg-ember-500" />
            </div>
            <div className="relative min-h-[11.5rem] flex-1 sm:min-h-[13rem] lg:min-h-[22rem]">
              {chapters.map((chapter, index) => (
                <div
                  key={chapter.title}
                  data-chapter={index}
                  className={`absolute inset-x-0 top-0 lg:top-1/2 lg:-translate-y-1/2 ${index === 0 ? '' : 'invisible opacity-0'}`}
                >
                  <p className="font-display text-eyebrow uppercase text-ember-500">
                    0{index + 1} · {chapter.eyebrow}
                  </p>
                  <h2 className="mt-3 text-display-h2 text-cream">{chapter.title}</h2>
                  <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-cream-dim sm:text-lead lg:mt-5">
                    {chapter.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Teléfono */}
          <div className="relative flex min-h-0 items-center justify-center lg:h-full">
            <Phone />
            <div className="pointer-events-none absolute right-0 top-[18%] hidden flex-col gap-3 xl:flex">
              {['Nueva reserva · 5:00 pm', 'Te escribieron por WhatsApp'].map((toast) => (
                <span
                  key={toast}
                  data-toast
                  className="material-chip rounded-2xl border border-cream/10 px-4 py-3 font-display text-xs text-cream"
                >
                  {toast}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-cream/5 lg:hidden">
          <span data-story-progress-x className="absolute inset-0 origin-left bg-ember-500" />
        </div>
      </div>
    </section>
  )
}
