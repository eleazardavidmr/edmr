interface LogoProps {
  className?: string
}

export default function Logo({ className = 'h-8 w-8' }: LogoProps) {
  return <img src="/logo-mark.png" alt="EDMR" className={`select-none ${className}`} draggable={false} />
}
