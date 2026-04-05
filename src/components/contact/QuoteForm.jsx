// src/components/contact/QuoteForm.jsx
import { useState, useRef } from 'react'
import {
  Box,
  Container,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  Text,
  Heading,
  Divider,
  HStack,
  Icon,
  Spinner
} from '@chakra-ui/react'
import { HiOutlineShieldCheck } from 'react-icons/hi'
import toast from 'react-hot-toast'
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

// Format phone as (xxx) xxx-xxxx while typing
// Handles +1 country code from browser autofill
const formatPhone = (value) => {
  let digits = value.replace(/\D/g, '')
  if (digits.length === 11 && digits.startsWith('1')) {
    digits = digits.slice(1)
  }
  digits = digits.slice(0, 10)
  if (digits.length === 0) return ''
  if (digits.length <= 3) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

// Basic email check
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

function QuoteForm() {
  const [form, setForm] = useState(INITIAL)
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Spam protection - timestamp when form mounts
  const loadedAt = useRef(Date.now())

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'phone') {
      setForm((prev) => ({ ...prev, phone: formatPhone(value) }))
      return
    }
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone || !form.equipment_type) {
      toast.error('Please fill in all required fields.')
      return
    }

    if (!isValidEmail(form.email)) {
      toast.error('Please enter a valid email address.')
      return
    }

    const digits = form.phone.replace(/\D/g, '')
    if (digits.length < 10) {
      toast.error('Please enter a valid 10-digit phone number.')
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

      // Spam protection fields
      formData.append('_loaded', loadedAt.current.toString())

      const res = await fetch('/.netlify/functions/submit-lead', {
        method: 'POST',
        body: formData
      })

      if (!res.ok) throw new Error('Submission failed')

      toast.success('Submission received. We will be in touch shortly.')
      setForm(INITIAL)
      setPhotos([])
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      toast.error('Something went wrong. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <Box py={{ base: 8, md: 14 }} bg="brand.gray50">
        <Container maxW="720px" px={{ base: 5, md: 8 }}>
          <Box
            bg="white"
            border="1px solid"
            borderColor="brand.gray200"
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 30px rgba(0, 0, 0, 0.06)"
            textAlign="center"
            py={{ base: 12, md: 16 }}
            px={{ base: 6, md: 10 }}
          >
            <Icon as={HiOutlineShieldCheck} boxSize={12} color="brand.teal" mb={4} />
            <Heading
              fontFamily="heading"
              fontSize="xl"
              fontWeight="700"
              color="brand.gray900"
              mb={3}
            >
              Submission Received
            </Heading>
            <Text fontSize="sm" color="brand.gray500" maxW="400px" mx="auto" mb={6} lineHeight="1.7">
              Thank you for your submission. Our buyer will review your equipment details and respond with an offer, typically within one hour during business hours.
            </Text>
            <Button
              variant="outline"
              size="md"
              onClick={() => setSubmitted(false)}
            >
              Submit Another
            </Button>
          </Box>
        </Container>
      </Box>
    )
  }

  return (
    <Box py={{ base: 8, md: 14 }} bg="brand.gray50">
      <Container maxW="720px" px={{ base: 5, md: 8 }}>
        <Box
          bg="white"
          border="1px solid"
          borderColor="brand.gray200"
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 30px rgba(0, 0, 0, 0.06)"
        >
          {/* Form header */}
          <Box px={{ base: 6, md: 10 }} pt={{ base: 6, md: 8 }} pb={0}>
            <Heading
              fontFamily="heading"
              fontSize="lg"
              fontWeight="700"
              color="brand.gray900"
              mb={1}
            >
              Equipment Details
            </Heading>
            <Text fontSize="sm" color="brand.gray500">
              The more detail you share, the faster we can get you an offer.
            </Text>
          </Box>

          <Divider borderColor="brand.gray100" my={5} />

          {/* Contact info section */}
          <Box px={{ base: 6, md: 10 }}>
            <Text fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em" color="brand.teal" mb={4}>
              Your Information
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={6}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  placeholder="Full name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Phone</FormLabel>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel-national"
                  inputMode="numeric"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Equipment Type</FormLabel>
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

            {/* Honeypot - hidden from real users, only bots fill this */}
            <Box
              position="absolute"
              left="-9999px"
              aria-hidden="true"
              tabIndex={-1}
            >
              <Input
                name="website_url"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </Box>
          </Box>

          <Divider borderColor="brand.gray100" />

          {/* Equipment details section */}
          <Box px={{ base: 6, md: 10 }} py={6}>
            <Text fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em" color="brand.teal" mb={4}>
              Equipment Information
            </Text>
            <FormControl mb={5}>
              <FormLabel>Description</FormLabel>
              <Textarea
                name="description"
                placeholder="Brand, model, kVA/voltage ratings, age, condition, quantity, location..."
                rows={4}
                value={form.description}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Photos</FormLabel>
              <PhotoUploader photos={photos} setPhotos={setPhotos} />
              <Text fontSize="xs" color="brand.gray400" mt={2}>
                Nameplate, overall condition, and any damage or details
              </Text>
            </FormControl>
          </Box>

          <Divider borderColor="brand.gray100" />

          {/* Submit section */}
          <Box px={{ base: 6, md: 10 }} py={{ base: 5, md: 6 }} bg="brand.gray50">
            <Button
              variant="primary"
              size="lg"
              w="full"
              onClick={handleSubmit}
              isDisabled={loading}
              mb={3}
              opacity={loading ? 0.85 : 1}
              _active={{
                transform: 'translateY(0)',
                opacity: 0.9
              }}
            >
              {loading ? (
                <HStack spacing={3}>
                  <Spinner size="sm" color="white" speed="0.8s" />
                  <Text>Submitting...</Text>
                </HStack>
              ) : (
                'Submit for Offer'
              )}
            </Button>
            <HStack justify="center" spacing={1.5}>
              <Icon as={HiOutlineShieldCheck} boxSize={3.5} color="brand.gray400" />
              <Text fontSize="xs" color="brand.gray400">
                We typically respond within one hour during business hours
              </Text>
            </HStack>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default QuoteForm