import { lazy, Suspense, useEffect, useState } from 'react'
import ErrorBoundary from './ErrorBoundary'
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion'

const DarkVeil = lazy(() => import('@/react-bits/DarkVeil'))

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

/**
 * Fondo animado del Hero. Si el navegador no soporta WebGL (o el shader falla) cae de
 * vuelta a un degradado estático en los mismos tonos, y hace lo mismo si el usuario pidió
 * menos movimiento: el shader corre en su propio loop de rAF y por eso no lo cubre
 * MotionConfig reducedMotion="user" — hay que respetar la preferencia acá explícitamente.
 *
 * ogl (~1MB) se importa de forma perezosa y solo se monta cuando el navegador está idle,
 * para que nunca compita con el parseo/render inicial del H1 y el CTA del hero.
 */
export default function HeroBackground() {
  const [canRenderVeil] = useState(supportsWebGL)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!canRenderVeil || prefersReducedMotion) return

    const win = window as Window & {
      requestIdleCallback?: (cb: IdleRequestCallback) => number
      cancelIdleCallback?: (handle: number) => void
    }

    if (win.requestIdleCallback) {
      const handle = win.requestIdleCallback(() => setReady(true), { timeout: 2000 })
      return () => win.cancelIdleCallback?.(handle)
    }

    const timeout = window.setTimeout(() => setReady(true), 300)
    return () => window.clearTimeout(timeout)
  }, [canRenderVeil, prefersReducedMotion])

  const staticFallback = (
    <div
      className="h-full w-full"
      style={{
        background:
          'radial-gradient(ellipse at top, var(--color-ember-800) 0%, var(--color-ember-950) 45%, var(--color-ash) 80%)',
      }}
    />
  )

  if (!canRenderVeil || prefersReducedMotion || !ready) return staticFallback

  return (
    <ErrorBoundary fallback={staticFallback}>
      <Suspense fallback={staticFallback}>
        <DarkVeil
          noiseIntensity={0.035}
          scanlineIntensity={0}
          speed={0.35}
          warpAmount={0.12}
          resolutionScale={0.6}
        />
      </Suspense>
    </ErrorBoundary>
  )
}
