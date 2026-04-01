// src/components/home/EquipmentGrid.jsx
import { SimpleGrid } from '@chakra-ui/react'
import { HiLightningBolt, HiCube, HiChip, HiServer, HiViewGrid, HiDatabase } from 'react-icons/hi'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import EquipmentCard from '../ui/EquipmentCard'

const EQUIPMENT = [
  {
    icon: HiCube,
    title: 'Padmount Transformers',
    items: ['Single phase', 'Three phase', 'All kVA ratings', 'New and used']
  },
  {
    icon: HiDatabase,
    title: 'Substation Transformers',
    items: ['Power transformers', 'All voltage classes', 'Oil-filled units', 'Any condition']
  },
  {
    icon: HiChip,
    title: 'Dry Type Transformers',
    items: ['Low voltage', 'Medium voltage', 'Cast coil', 'VPI/VPE encapsulated']
  },
  {
    icon: HiLightningBolt,
    title: 'Low Voltage Switchgear',
    items: ['Circuit breakers', 'Motor control centers', 'All manufacturers', 'Complete lineups']
  },
  {
    icon: HiServer,
    title: 'Medium Voltage Switchgear',
    items: ['Metal-clad', 'Metal-enclosed', 'Pad-mounted', '5kV to 38kV']
  },
  {
    icon: HiViewGrid,
    title: 'High Voltage Switchgear',
    items: ['Transmission class', 'SF6 and vacuum', 'All vintages', 'Complete substations']
  }
]

function EquipmentGrid() {
  return (
    <Section id="equipment">
      <SectionHeading
        label="What We Buy"
        title="Transformers and Switchgear"
        subtitle="We purchase all major brands, any condition, any size. If it handles power, we want to hear about it."
      />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {EQUIPMENT.map((item) => (
          <EquipmentCard key={item.title} {...item} />
        ))}
      </SimpleGrid>
    </Section>
  )
}

export default EquipmentGrid
