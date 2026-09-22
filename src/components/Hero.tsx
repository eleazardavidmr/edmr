import { motion } from 'framer-motion'
import WordReveal from './WordReveal'
import HeroBackground from './HeroBackground'
import Button from './Button'
import { whatsappLink, DEMO_MESSAGE } from '@/lib/site'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ash">
      <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen">
        <HeroBackground />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-ash/10 to-ash" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-28 pb-16 text-center sm:px-10">
        <span className="material-chip mb-6 flex max-w-xs flex-wrap items-center justify-center gap-x-2 gap-y-1.5 rounded-3xl border border-cream/10 px-4 py-2 text-center font-display text-eyebrow text-cream-dim sm:max-w-none sm:rounded-full sm:py-1.5">
          <span>Páginas web + reservas + WhatsApp</span>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500 animate-flicker" />
          <span>para negocios de Cali</span>
        </span>

        <h1 className="max-w-4xl text-display-hero font-medium text-cream">
          <WordReveal text="Tu negocio. Tu página. Tus reservas." className="block" delayStep={0.05} />
          <span className="mt-2 block bg-gradient-to-r from-ember-500 via-ember-400 to-flame-300 bg-clip-text text-transparent">
            Resuelto.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-balance text-lead text-cream-dim">
          Te armamos una página que de verdad es tuya, conectada a un sistema de citas y a WhatsApp
          automático. Vos atendés clientes, nosotros nos encargamos de que todo funcione — por una
          mensualidad fija, sin enredos técnicos.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <Button href={whatsappLink(DEMO_MESSAGE)} external className="w-full sm:w-auto">
            Agenda una demo gratis
          </Button>
          <Button href="#como-funciona" variant="ghost" className="w-full sm:w-auto">
            Ver cómo funciona
          </Button>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-8">
        <motion.span
          className="flex flex-col items-center gap-2 text-cream-dim/70"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="font-display text-eyebrow">Desliza</span>
          <span className="h-8 w-px bg-gradient-to-b from-ember-500 to-transparent" />
        </motion.span>
      </div>
    </section>
  )
}
