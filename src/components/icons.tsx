import type { SVGProps } from 'react'

export function ScissorsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="6" cy="6" r="2.75" />
      <circle cx="6" cy="18" r="2.75" />
      <line x1="20" y1="4" x2="8.2" y2="15.8" />
      <line x1="8.2" y1="8.2" x2="20" y2="20" />
    </svg>
  )
}

export function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3.5c.6 3.2 1.7 4.3 4.9 4.9-3.2.6-4.3 1.7-4.9 4.9-.6-3.2-1.7-4.3-4.9-4.9 3.2-.6 4.3-1.7 4.9-4.9Z" />
      <path d="M18.5 14.5c.32 1.7.9 2.28 2.6 2.6-1.7.32-2.28.9-2.6 2.6-.32-1.7-.9-2.28-2.6-2.6 1.7-.32 2.28-.9 2.6-2.6Z" />
    </svg>
  )
}

export function PlaneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 12 3.6 5.6c-.5-.2-1 .3-.8.8L6 12l-3.2 5.6c-.2.5.3 1 .8.8L21 12Z" />
      <line x1="6" y1="12" x2="21" y2="12" />
    </svg>
  )
}
