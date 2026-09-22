import Reveal from './Reveal'
import Button from './Button'
import { whatsappLink, DEMO_MESSAGE } from '@/lib/site'

export default function FinalCta() {
  return (
    <section className="relative bg-ash px-6 py-28 text-center sm:px-10 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-display-hero font-medium text-cream">
            ¿Hablamos de{' '}
            <span className="bg-gradient-to-r from-ember-500 via-ember-400 to-flame-300 bg-clip-text text-transparent">
              tu negocio
            </span>
            ?
          </h2>
          <p className="mt-6 text-lead text-cream-dim">
            Contanos qué hacés y en 24 horas te mostramos cómo se vería tu página, tus reservas y tu
            WhatsApp funcionando solos.
          </p>
          <Button href={whatsappLink(DEMO_MESSAGE)} external className="mt-10 px-10 py-5">
            Escribinos por WhatsApp
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
