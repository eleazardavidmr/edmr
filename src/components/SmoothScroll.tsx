import type { ReactNode } from 'react'
import { gsap, ScrollSmoother, ScrollTrigger, useGSAP, MOTION_OK } from '@/lib/gsap'

/**
 * Inercia de scroll solo en escritorio con mouse. En touch dejamos el scroll nativo:
 * es el que la gente espera en el celular y evita peleas con la barra del navegador.
 *
 * Init va como PRIMER hijo del contenido: los layout effects de React corren en orden
 * de hermanos, así el smoother existe antes de que las secciones creen sus ScrollTriggers.
 */
function Init() {
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add(`(pointer: fine) and (min-width: 1024px) and ${MOTION_OK}`, () => {
      const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.1,
        effects: true,
        normalizeScroll: false,
      })
      return () => smoother.kill()
    })
    // Las fuentes cambian alturas de texto: recalcular triggers cuando terminan de cargar.
    document.fonts?.ready.then(() => ScrollTrigger.refresh())
    return () => mm.revert()
  })
  return null
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Init />
        {children}
      </div>
    </div>
  )
}
