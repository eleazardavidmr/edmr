import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { springReveal } from '@/lib/motion'

interface RevealProps {
  children: ReactNode
  delay?: number
  distance?: number
  className?: string
}

/** Fade + slide sutil al entrar en viewport, con spring critically-damped (no easing de duración fija). */
export default function Reveal({ children, delay = 0, distance = 28, className = '' }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...springReveal, delay }}
    >
      {children}
    </motion.div>
  )
}
