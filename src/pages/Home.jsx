// src/pages/Home.jsx
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import EquipmentGrid from '../components/home/EquipmentGrid'
import HowItWorks from '../components/home/HowItWorks'
import WhySellToUs from '../components/home/WhySellToUs'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EquipmentGrid />
        <HowItWorks />
        <WhySellToUs />
      </main>
      <Footer />
    </>
  )
}

export default Home
