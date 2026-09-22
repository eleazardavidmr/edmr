import { useEffect, useState } from 'react'

function getInitial(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * true si el usuario pidió menos movimiento en el sistema. Framer Motion (MotionConfig
 * reducedMotion="user") ya cubre sus propias animaciones; este hook es para animación
 * procedural fuera de Framer (ej. el shader WebGL del fondo) que de otro modo la ignoraría.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(getInitial)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const listener = (event: MediaQueryListEvent) => setReduced(event.matches)
    query.addEventListener('change', listener)
    return () => query.removeEventListener('change', listener)
  }, [])

  return reduced
}
