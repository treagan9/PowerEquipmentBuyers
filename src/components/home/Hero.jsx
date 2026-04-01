// src/components/home/Hero.jsx
import { Box, Container, Heading, Text, Button, Flex, HStack, Icon } from '@chakra-ui/react'
import { HiArrowRight, HiGlobe } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate()

  return (
    <Box
      position="relative"
      overflow="hidden"
      pt={{ base: 28, md: 40 }}
      pb={{ base: 16, md: 24 }}
      bg="white"
    >
      {/* Subtle gradient accent */}
      <Box
        position="absolute"
        top="-30%"
        right="-15%"
        w="60vw"
        h="60vw"
        maxW="800px"
        maxH="800px"
        bg="radial-gradient(circle, rgba(30, 64, 175, 0.04) 0%, transparent 60%)"
        pointerEvents="none"
      />

      <Container maxW="1200px" px={{ base: 5, md: 8 }} position="relative">
        <Box maxW="680px">

          {/* Nationwide badge */}
          <HStack
            spacing={2}
            bg="brand.accentSoft"
            border="1px solid"
            borderColor="brand.accentBorder"
            borderRadius="full"
            px={3.5}
            py={1}
            mb={7}
            w="fit-content"
          >
            <Icon as={HiGlobe} boxSize={3.5} color="brand.accent" />
            <Text fontSize="11px" fontWeight="600" color="brand.accent" letterSpacing="0.01em">
              Serving all 50 states
            </Text>
          </HStack>

          <Heading
            as="h2"
            fontFamily="heading"
            fontSize={{ base: '32px', md: '48px', lg: '56px' }}
            fontWeight="800"
            lineHeight="1.08"
            letterSpacing="-0.035em"
            color="brand.gray900"
            mb={6}
          >
            Sell Your Transformers{' '}
            <Box as="br" display={{ base: 'none', lg: 'block' }} />
            and Switchgear
          </Heading>

          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color="brand.gray500"
            lineHeight="1.75"
            maxW="540px"
            mb={9}
          >
            We buy all types of electrical equipment. Fast evaluation.
            Competitive offers. We handle pickup and payment nationwide.
            All brands, any condition.
          </Text>

          <Flex gap={3} direction={{ base: 'column', sm: 'row' }}>
            <Button
              variant="primary"
              size="lg"
              rightIcon={<HiArrowRight />}
              onClick={() => navigate('/contact/')}
              px={7}
            >
              Get Your Offer
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/contact/')}
              px={7}
            >
              Upload Equipment Photos
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
