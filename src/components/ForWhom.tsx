import Reveal from './Reveal'
import SpotlightCard from '@/react-bits/SpotlightCard'
import { audiences } from '@/data/content'
import { ScissorsIcon, SparkleIcon, PlaneIcon } from './icons'

const icons = {
  scissors: ScissorsIcon,
  sparkle: SparkleIcon,
  plane: PlaneIcon,
}

export default function ForWhom() {
  return (
    <section id="para-quien" className="relative bg-ash px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-ember-500">Para quién es</p>
          <h2 className="mt-4 max-w-xl text-3xl font-medium leading-tight text-cream sm:text-5xl">
            Hecho a la medida de negocios que viven de las citas.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {audiences.map((audience, index) => {
            const Icon = icons[audience.icon]
            return (
              <Reveal key={audience.label} delay={index * 0.1}>
                <SpotlightCard
                  spotlightColor="rgba(198, 53, 46, 0.35)"
                  className="!border-ember-900 !bg-ember-950 h-full"
                >
                  <Icon className="h-8 w-8 text-ember-500" />
                  <h3 className="mt-6 font-display text-lg text-cream">{audience.label}</h3>
                  <p className="mt-3 text-sm text-cream-dim">{audience.detail}</p>
                </SpotlightCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
