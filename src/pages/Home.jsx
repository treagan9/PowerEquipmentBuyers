// src/pages/Home.jsx
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import EquipmentGrid from '../components/home/EquipmentGrid'
import HowItWorks from '../components/home/HowItWorks'
import WhySellToUs from '../components/home/WhySellToUs'
import CtaBand from '../components/home/CtaBand'

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
