import { MotionConfig } from 'framer-motion'
import Nav from '@/components/Nav'
import Cursor from '@/components/Cursor'
import ScrollProgress from '@/components/ScrollProgress'
import SmoothScroll from '@/components/SmoothScroll'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import PhoneStory from '@/components/PhoneStory'
import Features from '@/components/Features'
import About from '@/components/About'
import Process from '@/components/Process'
import Guarantee from '@/components/Guarantee'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'

/*
 * Sin lazy() por sección: con ScrollSmoother y pins, la altura total de la página tiene
 * que existir desde el primer render o los ScrollTriggers calculan posiciones falsas.
 * Lo pesado (el shader WebGL del hero) sigue cargándose diferido dentro de HeroBackground.
 */
function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* Elementos fijos van fuera del wrapper de ScrollSmoother (que usa transform). */}
      <ScrollProgress />
      <Nav />
      <Cursor />
      <SmoothScroll>
        <main className="overflow-x-clip bg-ash">
          <Hero />
          <Marquee />
          <PhoneStory />
          <Features />
          <About />
          {/* TODO(Eleazar): sección de proyectos oculta hasta confirmar cuáles se pueden mostrar. */}
          <Process />
          <Guarantee />
          <FinalCta />
        </main>
        <Footer />
      </SmoothScroll>
    </MotionConfig>
  )
}

export default App
