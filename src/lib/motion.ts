import type { Transition } from 'framer-motion'

/**
 * Presets de spring compartidos. `bounce` + `duration` es la API de Motion que más se
 * acerca al par damping/response de Apple (WWDC18 "Designing Fluid Interfaces"):
 * bounce 0 = critically damped (damping 1.0), bounce > 0 = momentum/overshoot.
 */
export const springDefault: Transition = { type: 'spring', bounce: 0, duration: 0.4 }
export const springSnappy: Transition = { type: 'spring', bounce: 0, duration: 0.25 }
export const springMomentum: Transition = { type: 'spring', bounce: 0.22, duration: 0.4 }
export const springReveal: Transition = { type: 'spring', bounce: 0, duration: 0.7 }
