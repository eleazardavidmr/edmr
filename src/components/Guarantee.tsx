import Reveal from './Reveal'

export default function Guarantee() {
  return (
    <section id="garantia" className="relative bg-ash px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="material-card rounded-3xl border border-ember-900 p-8 sm:p-12">
            <p className="font-display text-eyebrow text-ember-500">Garantía</p>
            <h2 className="mt-4 max-w-2xl text-display-h2 font-medium text-cream">
              Si no te gusta, te devuelvo el anticipo.
            </h2>
            <p className="mt-6 max-w-xl text-lead text-cream-dim">
              Cuando tu sitio esté terminado, lo revisas. Si no te gusta, te devuelvo el anticipo
              completo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
