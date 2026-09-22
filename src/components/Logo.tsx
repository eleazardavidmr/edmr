interface LogoProps {
  className?: string
}

export default function Logo({ className = 'h-8 w-8' }: LogoProps) {
  return (
    <img
      src="/logo-mark.webp"
      alt="EDMR"
      width={64}
      height={64}
      className={`select-none ${className}`}
      draggable={false}
    />
  )
}
