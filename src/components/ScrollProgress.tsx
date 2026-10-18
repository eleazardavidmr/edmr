import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

/** Hilo de brasa arriba de la pantalla que avanza con el scroll de toda la página. */
export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      bar.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
      },
    )
  })

  return (
    <div
      ref={bar}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-ember-700 via-ember-400 to-flame-300"
    />
  )
}
