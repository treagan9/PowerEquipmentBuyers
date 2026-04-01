// src/components/home/HowItWorks.jsx
import { SimpleGrid } from '@chakra-ui/react'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import StepCard from '../ui/StepCard'

const STEPS = [
  {
    number: '1',
    title: 'Contact Us',
    description: 'Call, email, or fill out our form with details about your equipment. Upload photos of the nameplate, overall condition, and any specifics.'
  },
  {
    number: '2',
    title: 'Get Your Offer',
    description: 'We evaluate your equipment and provide a competitive offer, typically within one hour. For large lots or high-value items, we will visit your facility.'
  },
  {
    number: '3',
    title: 'We Handle the Rest',
    description: 'Accept the offer and we coordinate everything. We arrange pickup with our carrier network and guarantee fast payment via wire, check, or PayPal.'
  }
]

function HowItWorks() {
  return (
    <Section id="how-it-works" variant="subtle">
      <SectionHeading
        label="Simple Process"
        title="How It Works"
        subtitle="Selling your surplus equipment should not be complicated. We make it straightforward."
      />
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {STEPS.map((step) => (
          <StepCard key={step.number} {...step} />
        ))}
      </SimpleGrid>
    </Section>
  )
}

export default HowItWorks
