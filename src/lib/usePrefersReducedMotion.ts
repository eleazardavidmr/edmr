import { useMediaQuery } from './useMediaQuery'

/**
 * true si el usuario pidió menos movimiento en el sistema. Framer Motion (MotionConfig
 * reducedMotion="user") ya cubre sus propias animaciones; este hook es para animación
 * procedural fuera de Framer (ej. el shader WebGL del fondo) que de otro modo la ignoraría.
 */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}
