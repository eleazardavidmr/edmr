import { useSyncExternalStore } from 'react'

/**
 * Lee una media query del sistema. En el HTML pre-renderizado (y durante la hidratación)
 * vale `false`; en cuanto React hidrata pasa al valor real del navegador, sin desajustes.
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const list = window.matchMedia(query)
      list.addEventListener('change', onChange)
      return () => list.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}
