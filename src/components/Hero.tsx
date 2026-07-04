import SplitText from '@/react-bits/SplitText'
import HeroBackground from './HeroBackground'
import { whatsappLink, DEMO_MESSAGE } from '@/lib/site'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ash">
      <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen">
        <HeroBackground />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-ash/10 to-ash" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-28 pb-16 text-center sm:px-10">
        <span className="mb-6 flex max-w-xs flex-wrap items-center justify-center gap-x-2 gap-y-1.5 rounded-3xl border border-ember-800/80 px-4 py-2 text-center font-display text-[10px] uppercase tracking-[0.18em] text-cream-dim sm:max-w-none sm:rounded-full sm:py-1.5 sm:text-xs sm:tracking-[0.2em]">
          <span>Páginas web + reservas + WhatsApp</span>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500 animate-flicker" />
          <span>para negocios de Cali</span>
        </span>

        <h1 className="max-w-4xl text-4xl leading-[1.05] font-medium text-cream sm:text-6xl md:text-7xl">
          <SplitText
            text="Tu negocio. Tu página. Tus reservas."
            tag="span"
            className="block"
            splitType="words"
            delay={40}
            duration={0.9}
            from={{ opacity: 0, y: 28 }}
            to={{ opacity: 1, y: 0 }}
          />
          <span className="mt-2 block bg-gradient-to-r from-ember-500 via-ember-400 to-flame-300 bg-clip-text text-transparent">
            Resuelto.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-balance text-base text-cream-dim sm:text-lg">
          Te armamos una página que de verdad es tuya, conectada a un sistema de citas y a WhatsApp
          automático. Vos atendés clientes, nosotros nos encargamos de que todo funcione — por una
          mensualidad fija, sin enredos técnicos.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={whatsappLink(DEMO_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full bg-ember-500 px-8 py-4 text-center font-display text-sm uppercase tracking-widest text-ash transition-transform hover:scale-[1.03] hover:bg-ember-400 sm:w-auto"
          >
            Agenda una demo gratis
          </a>
          <a
            href="#como-funciona"
            className="w-full rounded-full border border-ember-800 px-8 py-4 text-center font-display text-sm uppercase tracking-widest text-cream-dim transition-colors hover:border-cream hover:text-cream sm:w-auto"
          >
            Ver cómo funciona
          </a>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-8">
        <span className="flex flex-col items-center gap-2 text-cream-dim/70">
          <span className="font-display text-[10px] uppercase tracking-[0.3em]">Desliza</span>
          <span className="h-8 w-px bg-gradient-to-b from-ember-500 to-transparent" />
        </span>
      </div>
    </section>
  )
}
