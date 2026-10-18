import { useMediaQuery } from './useMediaQuery'

/** true si el usuario pidió menos transparencia en el sistema — los materiales caen a superficies sólidas. */
export function usePrefersReducedTransparency(): boolean {
  return useMediaQuery('(prefers-reduced-transparency: reduce)')
}
