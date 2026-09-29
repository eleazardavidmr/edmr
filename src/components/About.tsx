import Reveal from './Reveal'
import { aboutPoints } from '@/data/content'
import { SITE } from '@/lib/site'

// TODO(Eleazar): poner tu foto en /public (ej. /eleazar.webp, 4:5, ~800×1000) y escribir la ruta aquí.
// Mientras esté vacía se muestra un monograma como placeholder.
const PHOTO_SRC = ''

function Portrait() {
  return (
    <div className="material-card relative aspect-[4/5] w-32 shrink-0 overflow-hidden rounded-3xl border border-ember-900 sm:w-64">
      {PHOTO_SRC ? (
        <img
          src={PHOTO_SRC}
          alt={`Foto de ${SITE.owner}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          data-todo="foto-eleazar"
          className="flex h-full w-full items-center justify-center font-display text-4xl text-ember-500 sm:text-7xl"
          aria-hidden="true"
        >
          EM
        </div>
      )}
    </div>
  )
}

export default function About() {
  return (
    <section id="quien-soy" className="relative bg-ash px-6 py-24 sm:px-10 sm:py-32">
      <div className="ember-wash" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-5xl gap-10 sm:grid-cols-[auto_1fr] sm:gap-16">
        <Reveal>
          <Portrait />
        </Reveal>

        <div>
          <Reveal delay={0.05}>
            <p className="font-display text-eyebrow text-ember-500">Quién está detrás</p>
            <h2 className="mt-4 max-w-xl text-display-h2 font-medium text-cream">
              Soy Eleazar. Yo hago tu página.
            </h2>
            <p className="mt-6 max-w-xl text-lead text-cream-dim">
              Soy desarrollador web, venezolano, y vivo en Cali. Desde {SITE.since} hago páginas para
              negocios locales. EDMR no es una agencia: soy yo. Hablas conmigo en la llamada, mientras
              construyo tu página y después, si necesitas algo.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="mt-10 space-y-4 border-t border-ember-900/70 pt-8">
              {aboutPoints.map((point) => (
                <li key={point} className="flex gap-4 text-cream">
                  <span className="mt-1 font-display text-ember-500">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
