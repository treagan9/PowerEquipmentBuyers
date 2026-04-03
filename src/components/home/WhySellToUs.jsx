// src/components/home/WhySellToUs.jsx
import { SimpleGrid, Flex, Icon, Text } from '@chakra-ui/react'
import {
  HiCurrencyDollar,
  HiTruck,
  HiClock,
  HiShieldCheck,
  HiBadgeCheck,
  HiPhone
} from 'react-icons/hi'
import Section from '../layout/Section'
import SectionHeading from '../layout/SectionHeading'

function TrustBadge({ icon, text }) {
  return (
    <Flex
      align="center"
      gap={3}
      bg="white"
      border="1px solid"
      borderColor="brand.gray200"
      borderRadius="xl"
      px={5}
      py={4}
      transition="all 0.15s"
      _hover={{
        borderColor: 'brand.accentBorder',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
      }}
    >
      <Flex
        w={9}
        h={9}
        bg="brand.accentSoft"
        borderRadius="lg"
        align="center"
        justify="center"
        flexShrink={0}
      >
        <Icon as={icon} boxSize={4.5} color="brand.accent" />
      </Flex>
      <Text fontSize="sm" fontWeight="600" color="brand.gray800">
        {text}
      </Text>
    </Flex>
  )
}

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
    <Section id="why-us" variant="subtle">
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
