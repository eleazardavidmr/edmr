import { useRef } from 'react'
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { callLink, contactLink } from '@/lib/site'
import { usePrefersReducedTransparency } from '@/lib/usePrefersReducedTransparency'
import { gsap, useGSAP, MOTION_OK } from '@/lib/gsap'
import Logo from './Logo'
import Button from './Button'
import { WhatsAppIcon } from './icons'

export default function Nav() {
  const root = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const reducedTransparency = usePrefersReducedTransparency()

  const navOpacity = useTransform(scrollY, [0, 80], [0, 0.72])
  const navBlur = useTransform(scrollY, [0, 80], [0, 18])
  const navBorder = useTransform(scrollY, [0, 80], [0, 0.1])

  const background = useMotionTemplate`rgba(12, 4, 3, ${reducedTransparency ? 1 : navOpacity})`
  const backdropFilter = useMotionTemplate`blur(${reducedTransparency ? 0 : navBlur}px) saturate(160%)`
  const borderColor = useMotionTemplate`rgba(245, 239, 230, ${navBorder})`

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.set(root.current, { visibility: 'visible' })
        gsap.from('[data-nav-item]', {
          y: -24,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: 'expo.out',
          delay: 0.9,
        })
      })
    },
    { scope: root },
  )

  return (
    <header ref={root} data-intro className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6 sm:pt-6">
      <motion.div
        style={{ background, backdropFilter, WebkitBackdropFilter: backdropFilter, borderColor }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border px-3 py-2 sm:px-5 sm:py-2.5"
      >
        <a
          data-nav-item
          href="#top"
          className="flex items-center gap-2 font-display text-base tracking-tight text-cream sm:text-lg"
        >
          <Logo className="h-7 w-7" />
          EDMR<span className="text-ember-500">.</span>
        </a>

        <div className="flex items-center gap-2">
          <a
            data-nav-item
            href={callLink}
            target="_blank"
            rel="noreferrer"
            className="hidden px-3 font-display text-xs uppercase tracking-widest text-cream-dim transition-colors hover:text-cream sm:inline"
          >
            Agendar llamada
          </a>
          <span data-nav-item>
            <Button href={contactLink} size="sm" external>
              <WhatsAppIcon className="h-4 w-4" />
              Escríbeme
            </Button>
          </span>
        </div>
      </motion.div>
    </header>
  )
}
