import Reveal from './Reveal'
import Button from './Button'
import { callLink, contactLink } from '@/lib/site'

export default function FinalCta() {
  return (
    <section id="contacto" className="relative bg-ash px-6 py-28 text-center sm:px-10 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-display-hero font-medium text-cream">
            ¿Hablamos{' '}
            <span className="bg-gradient-to-r from-ember-500 via-ember-400 to-flame-300 bg-clip-text text-transparent">
              15 minutos
            </span>
            ?
          </h2>
          <p className="mt-6 text-lead text-cream-dim">
            Agenda una llamada por Meet o escríbeme por WhatsApp. Te respondo yo.
          </p>
          <Button href={callLink} external className="mt-10 px-10 py-5">
            Agendar llamada
          </Button>
          <p className="mt-6 text-sm text-cream-dim">
            <a
              href={contactLink}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-ember-800 underline-offset-4 transition-colors hover:text-cream hover:decoration-ember-500"
            >
              o escríbeme por WhatsApp
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
