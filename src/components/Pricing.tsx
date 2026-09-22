import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { plans, pricingNote } from '@/data/content'
import { whatsappLink } from '@/lib/site'
import Button from './Button'
import { springDefault } from '@/lib/motion'

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0" aria-hidden="true">
      <circle cx="10" cy="10" r="9" className="fill-ember-500/15" />
      <path
        d="M6.5 10.2l2.2 2.2 4.8-4.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-ember-500"
      />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="precio" className="relative overflow-hidden bg-ash px-6 py-24 sm:px-10 sm:py-32">
      <div className="ember-wash" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-ember-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-[24rem] w-[24rem] rounded-full bg-flame-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <Reveal className="text-center sm:text-left">
          <p className="font-display text-eyebrow text-ember-500">Planes</p>
          <h2 className="mt-4 max-w-xl text-display-h2 font-medium text-cream sm:mx-0">
            Un plan para cada etapa de tu negocio.
          </h2>
          <p className="mt-4 max-w-lg text-lead text-cream-dim">
            Precios en pesos colombianos. Todos incluyen dominio propio y botón de WhatsApp — vos elegís
            cuánto sitio necesitás.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3 sm:items-start">
          {plans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.08} className="h-full">
              <motion.article
                whileHover={{ y: plan.highlight ? -10 : -6 }}
                transition={springDefault}
                className={`material-card relative flex h-full flex-col rounded-3xl p-8 ${
                  plan.highlight
                    ? 'border-2 border-ember-500 shadow-[0_0_60px_-15px_rgba(198,53,46,0.55)] sm:-translate-y-3'
                    : 'border border-ember-900'
                }`}
              >
                {plan.highlight && (
                  <span className="material-chip absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full border border-ember-500/40 px-4 py-1.5 font-display text-eyebrow text-flame-300">
                    Recomendado
                  </span>
                )}

                <h3 className="text-display-h3 font-display text-cream">{plan.name}</h3>
                <p className="mt-2 text-sm text-cream-dim">{plan.tagline}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-4xl text-cream">{plan.setupPrice}</span>
                  <span className="text-xs uppercase tracking-widest text-cream-dim">COP</span>
                </div>
                <p className="mt-1.5 text-sm text-cream-dim">Pago único</p>

                <ul className="mt-8 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-cream-dim">
                      <CheckIcon />
                      <span className="pt-0.5">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={whatsappLink(`¡Hola! Me interesa el plan ${plan.name} de EDMR para mi negocio.`)}
                  variant={plan.highlight ? 'primary' : 'secondary'}
                  external
                  className="mt-8 w-full"
                >
                  Quiero el plan {plan.name}
                </Button>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24} className="mt-12">
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed tracking-[0.005em] text-cream-dim">
            <span className="font-display text-[0.6875rem] uppercase tracking-[0.16em] text-ember-500">
              Sin sorpresas —{' '}
            </span>
            {pricingNote}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
