import Reveal from './Reveal'
import { whatsappLink, DEMO_MESSAGE } from '@/lib/site'

export default function FinalCta() {
  return (
    <section className="relative bg-ash px-6 py-28 text-center sm:px-10 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-4xl font-medium leading-tight text-cream sm:text-6xl">
            ¿Hablamos de{' '}
            <span className="bg-gradient-to-r from-ember-500 via-ember-400 to-flame-300 bg-clip-text text-transparent">
              tu negocio
            </span>
            ?
          </h2>
          <p className="mt-6 text-lg text-cream-dim">
            Contanos qué hacés y en 24 horas te mostramos cómo se vería tu página, tus reservas y tu
            WhatsApp funcionando solos.
          </p>
          <a
            href={whatsappLink(DEMO_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-ember-500 px-10 py-5 font-display text-sm uppercase tracking-widest text-ash transition-transform hover:scale-[1.03] hover:bg-ember-400"
          >
            Escribinos por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}
