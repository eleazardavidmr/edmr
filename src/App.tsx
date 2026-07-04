import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import ProblemSolution from '@/components/ProblemSolution'
import HowItWorks from '@/components/HowItWorks'
import ForWhom from '@/components/ForWhom'
import Pricing from '@/components/Pricing'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-ash">
      <Nav />
      <Hero />
      <Marquee items={['Barberías', 'Peluquerías y salones', 'Agencias de viaje']} />
      <ProblemSolution />
      <HowItWorks />
      <ForWhom />
      <Pricing />
      <FinalCta />
      <Footer />
    </div>
  )
}

export default App
