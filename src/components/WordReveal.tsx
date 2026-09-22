import { motion, useReducedMotion } from 'framer-motion'
import { springReveal } from '@/lib/motion'

interface WordRevealProps {
  text: string
  className?: string
  delayStep?: number
}

/**
 * Entrada del titular palabra por palabra: reemplaza el SplitText de React Bits (GSAP,
 * easing de duración fija 'power3.out', sin manejo de reduced-motion) por springs
 * critically-damped consistentes con el resto del sitio, e interruptibles por diseño.
 */
export default function WordReveal({ text, className = '', delayStep = 0.05 }: WordRevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const words = text.split(' ')

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden align-top pb-1">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springReveal, delay: index * delayStep }}
          >
            {word}
            {index < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
