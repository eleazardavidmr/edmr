import { useRef } from 'react'
import { gsap, useGSAP, MOTION_OK } from '@/lib/gsap'

/** Cursor propio: un punto que sigue 1:1 y un anillo con inercia que crece sobre lo clicable. */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add(`(pointer: fine) and ${MOTION_OK}`, () => {
      document.documentElement.classList.add('has-cursor')
      gsap.set([dot.current, ring.current], { xPercent: -50, yPercent: -50, autoAlpha: 0 })

      const dotX = gsap.quickTo(dot.current, 'x', { duration: 0.08, ease: 'power3' })
      const dotY = gsap.quickTo(dot.current, 'y', { duration: 0.08, ease: 'power3' })
      const ringX = gsap.quickTo(ring.current, 'x', { duration: 0.45, ease: 'power3' })
      const ringY = gsap.quickTo(ring.current, 'y', { duration: 0.45, ease: 'power3' })

      let visible = false
      const onMove = (e: PointerEvent) => {
        if (!visible) {
          visible = true
          gsap.to([dot.current, ring.current], { autoAlpha: 1, duration: 0.3 })
        }
        dotX(e.clientX)
        dotY(e.clientY)
        ringX(e.clientX)
        ringY(e.clientY)
        const interactive = (e.target as Element | null)?.closest('a, button, [data-cursor]')
        gsap.to(ring.current, { scale: interactive ? 2.2 : 1, duration: 0.35, ease: 'power3', overwrite: 'auto' })
        gsap.to(dot.current, { scale: interactive ? 0 : 1, duration: 0.2, overwrite: 'auto' })
      }
      const onLeave = () => {
        visible = false
        gsap.to([dot.current, ring.current], { autoAlpha: 0, duration: 0.3 })
      }
      const onDown = () => gsap.to(ring.current, { scale: 0.8, duration: 0.15 })

      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerdown', onDown)
      document.addEventListener('pointerleave', onLeave)
      return () => {
        document.documentElement.classList.remove('has-cursor')
        window.removeEventListener('pointermove', onMove)
        window.removeEventListener('pointerdown', onDown)
        document.removeEventListener('pointerleave', onLeave)
      }
    })
    return () => mm.revert()
  })

  return (
    <>
      <div
        ref={ring}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-9 w-9 rounded-full border border-flame-300/70 mix-blend-difference [.has-cursor_&]:block"
      />
      <div
        ref={dot}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-1.5 w-1.5 rounded-full bg-flame-300 [.has-cursor_&]:block"
      />
    </>
  )
}
