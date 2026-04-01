// src/components/contact/ContactHero.jsx
import { Box, Container, Heading, Text, HStack, Icon } from '@chakra-ui/react'
import { HiClock, HiPhone, HiPhotograph } from 'react-icons/hi'

function ContactHero() {
  return (
    <Box
      position="relative"
      overflow="hidden"
      pt={{ base: 28, md: 36 }}
      pb={{ base: 10, md: 14 }}
      bg="brand.heroGradient"
    >
      <Box
        position="absolute"
        inset={0}
        opacity={0.03}
        backgroundImage="linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
        backgroundSize="60px 60px"
        pointerEvents="none"
      />

      <Container maxW="720px" px={{ base: 5, md: 8 }} position="relative" textAlign="center">
        <Text
          fontSize="xs"
          fontWeight="700"
          textTransform="uppercase"
          letterSpacing="0.14em"
          color="brand.accent"
          mb={5}
        >
          Get Your Offer
        </Text>

        <Heading
          as="h1"
          fontFamily="heading"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="800"
          lineHeight="1.1"
          letterSpacing="-0.02em"
          mb={5}
        >
          Tell Us About Your Equipment
        </Heading>

        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color="brand.textSecondary"
          lineHeight="1.7"
          maxW="520px"
          mx="auto"
          mb={8}
        >
          Share details and photos below. We typically respond with an offer
          within one hour during business hours.
        </Text>

        <HStack
          spacing={{ base: 4, md: 8 }}
          justify="center"
          flexWrap="wrap"
          fontSize="sm"
          color="brand.textMuted"
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
