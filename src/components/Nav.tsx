import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { callLink, contactLink } from '@/lib/site'
import { usePrefersReducedTransparency } from '@/lib/usePrefersReducedTransparency'
import Logo from './Logo'
import Button from './Button'
import { WhatsAppIcon } from './icons'

export default function Nav() {
  const { scrollY } = useScroll()
  const reducedTransparency = usePrefersReducedTransparency()

  const navOpacity = useTransform(scrollY, [0, 80], [0, 1])
  const navBlur = useTransform(scrollY, [0, 80], [0, 18])
  const navBorder = useTransform(scrollY, [0, 80], [0, 0.1])

  const background = useMotionTemplate`rgba(12, 4, 3, ${reducedTransparency ? 1 : navOpacity})`
  const backdropFilter = useMotionTemplate`blur(${reducedTransparency ? 0 : navBlur}px) saturate(160%)`
  const borderColor = useMotionTemplate`rgba(245, 239, 230, ${navBorder})`

  return (
    <header className="fixed inset-x-0 top-0 z-30 px-4 pt-4 sm:px-6 sm:pt-6">
      <motion.div
        style={{ background, backdropFilter, WebkitBackdropFilter: backdropFilter, borderColor }}
        className="mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 sm:px-6 sm:py-3"
      >
        <a href="#top" className="flex items-center gap-2 font-display text-base tracking-tight text-cream sm:text-lg">
          <Logo className="h-7 w-7" />
          EDMR<span className="text-ember-500">.</span>
        </a>

        <div className="flex items-center gap-2">
          <Button href={contactLink} variant="secondary" size="icon" external ariaLabel="Escríbeme por WhatsApp">
            <WhatsAppIcon className="h-4 w-4" />
          </Button>
          <Button href={callLink} size="sm" external>
            Agendar<span className="hidden sm:inline"> llamada</span>
          </Button>
        </div>
      </motion.div>
    </header>
  )
}
