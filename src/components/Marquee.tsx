import ScrollVelocity from '@/react-bits/ScrollVelocity'
import { businessRows } from '@/data/content'

// Sin contorno (text-stroke): en fuentes variables deja ver los contornos internos superpuestos.
const rows = businessRows.map((row, i) => (
  <span key={row} className={i % 2 ? 'text-ember-500' : 'text-cream'}>
    {row}
  </span>
))

/** Rubros en dos cintas opuestas: se aceleran y se inclinan con la velocidad del scroll. */
export default function Marquee() {
  return (
    <section aria-label="Tipos de negocio" className="relative overflow-hidden border-y border-ember-900/70 bg-ash py-8 sm:py-12">
      <ScrollVelocity
        texts={rows}
        velocity={40}
        numCopies={4}
        gap={32}
        skewWithVelocity={8}
        fadeEdges
        draggable
        className="font-heading"
        scrollerClassName="!font-heading !text-[clamp(2.75rem,9vw,7rem)] !leading-[1.05] !font-bold !tracking-[-0.04em]"
        parallaxClassName="py-1"
      />
    </section>
  )
}
