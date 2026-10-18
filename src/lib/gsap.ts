import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

// Registro único de plugins: cualquier componente importa gsap desde aquí, nunca directo.
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, useGSAP)

// En móvil la barra de direcciones cambia el alto del viewport al hacer scroll;
// sin esto cada cambio dispara un refresh y los pins "saltan".
ScrollTrigger.config({ ignoreMobileResize: true })

export const MOTION_OK = '(prefers-reduced-motion: no-preference)'
export const MOTION_REDUCED = '(prefers-reduced-motion: reduce)'

export { gsap, ScrollTrigger, ScrollSmoother, SplitText, useGSAP }
