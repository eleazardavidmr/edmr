import Reveal from './Reveal'
import { pricingFeatures } from '@/data/content'
import { whatsappLink, DEMO_MESSAGE } from '@/lib/site'

export default function Pricing() {
  return (
    <section id="precio" className="relative overflow-hidden bg-ember-950 px-6 py-24 sm:px-10 sm:py-32">
      <div className="pointer-events-none absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-ember-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-ember-500">Cómo funciona el pago</p>
          <h2 className="mt-4 max-w-xl text-3xl font-medium leading-tight text-cream sm:text-5xl">
            Un plan. Todo incluido. Sin letra pequeña.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 sm:grid-cols-[1fr_1.2fr] sm:gap-16">
          <Reveal delay={0.05}>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl text-cream sm:text-6xl">$249.000</span>
              <span className="font-display text-sm uppercase tracking-widest text-cream-dim">COP / mes</span>
            </div>
            <p className="mt-4 max-w-sm text-cream-dim">
              Sin costo de instalación. Cancelás cuando quieras, sin contratos forzosos ni cobros
              escondidos: lo que ves es lo que pagás.
            </p>
            <a
              href={whatsappLink(DEMO_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-ember-500 px-8 py-4 font-display text-sm uppercase tracking-widest text-ash transition-transform hover:scale-[1.03] hover:bg-ember-400"
            >
              Quiero mi página
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="space-y-4 border-t border-ember-900/70 pt-8 sm:border-t-0 sm:border-l sm:pl-16 sm:pt-0">
              {pricingFeatures.map((feature) => (
                <li key={feature} className="flex gap-4 text-cream-dim">
                  <span className="mt-1 font-display text-ember-500">＋</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
