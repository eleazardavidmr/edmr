import { lazy, Suspense } from 'react'
import { MotionConfig } from 'framer-motion'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'

const Marquee = lazy(() => import('@/components/Marquee'))
const ProblemSolution = lazy(() => import('@/components/ProblemSolution'))
const HowItWorks = lazy(() => import('@/components/HowItWorks'))
const ForWhom = lazy(() => import('@/components/ForWhom'))
const Pricing = lazy(() => import('@/components/Pricing'))
const FinalCta = lazy(() => import('@/components/FinalCta'))
const Footer = lazy(() => import('@/components/Footer'))

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-ash">
        <Nav />
        <main>
          <Hero />
          {/* Todo lo que está debajo del fold se divide en su propio chunk: no debe
              competir con el hero por tiempo de parseo/ejecución en la carga inicial. */}
          <Suspense fallback={null}>
            <Marquee items={['Barberías', 'Peluquerías y salones', 'Agencias de viaje']} />
            <ProblemSolution />
            <HowItWorks />
            <ForWhom />
            <Pricing />
            <FinalCta />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </MotionConfig>
  )
}

export default App
