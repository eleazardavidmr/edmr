import Reveal from './Reveal'
import { steps } from '@/data/content'

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative bg-ember-950 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-ember-500">Cómo funciona</p>
          <h2 className="mt-4 max-w-xl text-3xl font-medium leading-tight text-cream sm:text-5xl">
            Cuatro pasos, sin vueltas.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-ember-900/70 border-t border-ember-900/70">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08}>
              <div className="group grid gap-4 py-8 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-10 sm:py-10">
                <span className="font-display text-4xl text-ember-800 transition-colors group-hover:text-ember-500 sm:text-5xl">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-medium text-cream sm:text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-lg text-cream-dim">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
