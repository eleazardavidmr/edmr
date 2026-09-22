interface MarqueeProps {
  items: string[]
}

/** Cinta editorial en movimiento continuo — el detalle inesperado entre el hero y el resto de la página. */
export default function Marquee({ items }: MarqueeProps) {
  const content = items.join('   ✦   ')

  return (
    <div className="relative overflow-hidden border-y border-ember-900/70 bg-ash py-3 sm:py-4">
      <div className="flex w-max animate-marquee whitespace-nowrap motion-reduce:animate-none">
        {[0, 1].map((i) => (
          <span
            key={i}
            aria-hidden={i === 1}
            className="mx-4 font-display text-xs uppercase tracking-[0.25em] text-cream-dim sm:text-sm"
          >
            {content}
            <span className="mx-4">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
