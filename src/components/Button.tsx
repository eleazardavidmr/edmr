import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { springSnappy } from '@/lib/motion'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'sm'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: Variant
  size?: Size
  external?: boolean
  className?: string
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-ember-500 text-cream hover:bg-ember-800',
  secondary: 'material-chip border border-cream/15 text-cream hover:border-cream/30',
  ghost: 'border border-ember-800 text-cream-dim hover:border-cream hover:text-cream',
}

const sizeClasses: Record<Size, string> = {
  md: 'px-8 py-4 text-sm',
  sm: 'px-4 py-2.5 text-xs',
}

/**
 * CTA compartido: el feedback empieza en pointer-down (whileTap), no en el click,
 * y usa un spring critically-damped en vez de una transition de duración fija.
 */
export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.02 }}
      transition={springSnappy}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-display uppercase tracking-widest transition-colors duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </motion.a>
  )
}
