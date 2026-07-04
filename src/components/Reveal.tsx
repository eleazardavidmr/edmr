import type { ReactNode } from 'react'
import AnimatedContent from '@/react-bits/AnimatedContent'

interface RevealProps {
  children: ReactNode
  delay?: number
  distance?: number
  className?: string
}

/** Envuelve contenido con la animación de scroll estándar del sitio (fade + slide sutil). */
export default function Reveal({ children, delay = 0, distance = 40, className = '' }: RevealProps) {
  return (
    <AnimatedContent
      distance={distance}
      direction="vertical"
      duration={0.9}
      ease="power3.out"
      threshold={0.15}
      delay={delay}
      className={className}
    >
      {children}
    </AnimatedContent>
  )
}
