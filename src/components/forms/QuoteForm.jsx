// src/components/forms/QuoteForm.jsx
import { useState } from 'react'
import {
  Box,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  Text
} from '@chakra-ui/react'
import { HiArrowRight } from 'react-icons/hi'
import toast from 'react-hot-toast'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import PhotoUploader from './PhotoUploader'

const EQUIPMENT_TYPES = [
  'Padmount Transformer',
  'Substation Transformer',
  'Dry Type Transformer',
  'Low Voltage Switchgear',
  'Medium Voltage Switchgear',
  'High Voltage Switchgear',
  'Mixed Lot / Multiple Items',
  'Other'
]

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  equipment_type: '',
  description: ''
}

function QuoteForm() {
  const [form, setForm] = useState(INITIAL)
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone || !form.equipment_type) {
      toast.error('Please fill in all required fields.')
      return
    }

    setLoading(true)

    try {
      const formData = new FormData()
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('phone', form.phone)
      formData.append('equipment_type', form.equipment_type)
      formData.append('description', form.description)
      photos.forEach((photo) => formData.append('photos', photo))

      const res = await fetch('/.netlify/functions/submit-lead', {
        method: 'POST',
        body: formData
      })

      if (!res.ok) throw new Error('Submission failed')

      toast.success('Submission received. We will be in touch shortly.')
      setForm(INITIAL)
      setPhotos([])
    } catch (err) {
      console.error(err)
      toast.error('Something went wrong. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section id="contact">
      <SectionHeading
        label="Get Started"
        title="Request an Offer"
        subtitle="Tell us about your equipment and upload photos. We respond fast."
      />

      <Box
        maxW="720px"
        mx="auto"
        bg="brand.surface"
        border="1px solid"
        borderColor="brand.border"
        borderRadius="2xl"
        p={{ base: 6, md: 10 }}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mb={5}>
          <FormControl isRequired>
            <FormLabel fontSize="sm" fontWeight="600">Name</FormLabel>
            <Input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize="sm" fontWeight="600">Phone</FormLabel>
            <Input
              name="phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={form.phone}
              onChange={handleChange}
            />
          </FormControl>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mb={5}>
          <FormControl isRequired>
            <FormLabel fontSize="sm" fontWeight="600">Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize="sm" fontWeight="600">Equipment Type</FormLabel>
            <Select
              name="equipment_type"
              placeholder="Select type"
              value={form.equipment_type}
              onChange={handleChange}
            >
              {EQUIPMENT_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </Select>
          </FormControl>
        </SimpleGrid>

        <FormControl mb={5}>
          <FormLabel fontSize="sm" fontWeight="600">
            Description
          </FormLabel>
          <Textarea
            name="description"
            placeholder="Brand, model, kVA/voltage ratings, age, condition, quantity, location..."
            rows={4}
            value={form.description}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={8}>
          <FormLabel fontSize="sm" fontWeight="600">
            Photos (optional, up to 5)
          </FormLabel>
          <PhotoUploader photos={photos} setPhotos={setPhotos} />
        </FormControl>

        <Button
          variant="primary"
          size="lg"
          w="full"
          rightIcon={<HiArrowRight />}
          onClick={handleSubmit}
          isLoading={loading}
          loadingText="Submitting..."
        >
          Submit for Offer
        </Button>

        <Text fontSize="xs" color="brand.textMuted" textAlign="center" mt={4}>
          We typically respond within one hour during business hours.
        </Text>
      </Box>
    </Section>
  )
}

export default QuoteForm
