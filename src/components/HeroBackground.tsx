import { useState } from 'react'
import DarkVeil from '@/react-bits/DarkVeil'
import ErrorBoundary from './ErrorBoundary'

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

/**
 * Fondo animado del Hero. Si el navegador no soporta WebGL (o el shader falla),
 * cae de vuelta a un degradado estático en los mismos tonos: la sección nunca se rompe.
 */
export default function HeroBackground() {
  const [canRenderVeil] = useState(supportsWebGL)

  const staticFallback = (
    <div
      className="h-full w-full"
      style={{
        background:
          'radial-gradient(ellipse at top, var(--color-ember-800) 0%, var(--color-ember-950) 45%, var(--color-ash) 80%)',
      }}
    />
  )

  if (!canRenderVeil) return staticFallback

  return (
    <ErrorBoundary fallback={staticFallback}>
      <DarkVeil
        noiseIntensity={0.035}
        scanlineIntensity={0}
        speed={0.35}
        warpAmount={0.12}
        resolutionScale={1}
      />
    </ErrorBoundary>
  )
}
