import { useEffect, useState } from 'react'

function getInitial(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-transparency: reduce)').matches
}

/** true si el usuario pidió menos transparencia en el sistema — los materiales caen a superficies sólidas. */
export function usePrefersReducedTransparency(): boolean {
  const [reduced, setReduced] = useState(getInitial)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-transparency: reduce)')
    const listener = (event: MediaQueryListEvent) => setReduced(event.matches)
    query.addEventListener('change', listener)
    return () => query.removeEventListener('change', listener)
  }, [])

  return reduced
}
