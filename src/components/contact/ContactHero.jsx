// src/components/contact/ContactHero.jsx
import { Box, Container, Heading, Text, HStack, Icon } from '@chakra-ui/react'
import { HiClock, HiPhone, HiPhotograph } from 'react-icons/hi'

function ContactHero() {
  return (
    <Box
      position="relative"
      pt={{ base: 28, md: 36 }}
      pb={{ base: 8, md: 12 }}
      bg="white"
    >
      <Container maxW="680px" px={{ base: 5, md: 8 }} textAlign="center">
        <Text
          fontSize="11px"
          fontWeight="700"
          textTransform="uppercase"
          letterSpacing="0.1em"
          color="brand.accent"
          mb={4}
        >
          Get Your Offer
        </Text>

        <Heading
          as="h1"
          fontFamily="heading"
          fontSize={{ base: '2xl', md: '36px' }}
          fontWeight="800"
          lineHeight="1.12"
          letterSpacing="-0.025em"
          color="brand.gray900"
          mb={4}
        >
          Tell Us About Your Equipment
        </Heading>

        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color="brand.gray500"
          lineHeight="1.7"
          maxW="480px"
          mx="auto"
          mb={7}
        >
          Share details and photos below. We typically respond with an offer
          within one hour during business hours.
        </Text>

        <HStack
          spacing={{ base: 4, md: 7 }}
          justify="center"
          flexWrap="wrap"
          fontSize="sm"
          color="brand.gray400"
        >
          <HStack>
            <Icon as={HiClock} color="brand.accent" boxSize={4} />
            <Text>1 hour response</Text>
          </HStack>
          <HStack>
            <Icon as={HiPhone} color="brand.accent" boxSize={4} />
            <Text>Direct to buyer</Text>
          </HStack>
          <HStack>
            <Icon as={HiPhotograph} color="brand.accent" boxSize={4} />
            <Text>Photo upload</Text>
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}

export default ContactHero
