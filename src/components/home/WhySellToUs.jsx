// src/components/home/WhySellToUs.jsx
import { SimpleGrid } from '@chakra-ui/react'
import {
  HiCurrencyDollar,
  HiTruck,
  HiClock,
  HiShieldCheck,
  HiBadgeCheck,
  HiPhone
} from 'react-icons/hi'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import TrustBadge from '../ui/TrustBadge'

const BADGES = [
  { icon: HiCurrencyDollar, text: 'Competitive, fair offers on every piece' },
  { icon: HiTruck, text: 'We handle all freight and logistics' },
  { icon: HiClock, text: 'Offers typically within one hour' },
  { icon: HiShieldCheck, text: 'Guaranteed fast payment' },
  { icon: HiBadgeCheck, text: 'All brands, new or used, any condition' },
  { icon: HiPhone, text: 'Direct access to our buyer, no runaround' }
]

function WhySellToUs() {
  return (
    <Section id="why-us">
      <SectionHeading
        label="The Advantage"
        title="Why Sell to Us"
        subtitle="We are a direct buyer, not a broker. That means faster decisions, better offers, and zero hassle for you."
      />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {BADGES.map((badge) => (
          <TrustBadge key={badge.text} {...badge} />
        ))}
      </SimpleGrid>
    </Section>
  )
}

export default WhySellToUs
