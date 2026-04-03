// src/pages/Home.jsx
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { Hero, HowItWorks, EquipmentGrid, WhySellToUs, CtaBand } from '../components/home'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <EquipmentGrid />
        <WhySellToUs />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}

export default Home
