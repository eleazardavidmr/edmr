import Reveal from './Reveal'
import { problems, solutions } from '@/data/content'

export default function ProblemSolution() {
  return (
    <section id="problema" className="relative bg-ash px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-display text-eyebrow text-ember-500">Lo que cambia</p>
          <h2 className="mt-4 max-w-2xl text-display-h2 font-medium text-cream">
            Tus clientes ya te buscan. Hoy no tienen dónde resolver sin escribirte.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 sm:gap-16">
          <Reveal delay={0.05}>
            <h3 className="font-display text-eyebrow text-cream-dim">Hoy</h3>
            <ul className="mt-6 space-y-5">
              {problems.map((item) => (
                <li key={item} className="flex gap-4 text-cream-dim">
                  <span className="mt-1 font-display text-ember-800">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="font-display text-eyebrow text-ember-500">Con tu página</h3>
            <ul className="mt-6 space-y-5">
              {solutions.map((item) => (
                <li key={item.text} className="flex gap-4 text-cream">
                  <span className="mt-1 font-display text-ember-500">✓</span>
                  <span>
                    {item.text}
                    {item.note && (
                      <span className="ml-2 whitespace-nowrap font-display text-eyebrow uppercase text-flame-300">
                        {item.note}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
