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
      pt={{ base: 32, md: 44 }}
      pb={{ base: 20, md: 32 }}
      bg="brand.heroGradient"
    >
      {/* Glow orbs */}
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        w="50vw"
        h="50vw"
        maxW="700px"
        maxH="700px"
        bg="radial-gradient(circle, rgba(59, 130, 246, 0.07) 0%, transparent 65%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-15%"
        left="-5%"
        w="40vw"
        h="40vw"
        maxW="500px"
        maxH="500px"
        bg="radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, transparent 65%)"
        pointerEvents="none"
      />

      {/* Grid texture */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.03}
        backgroundImage="linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
        backgroundSize="60px 60px"
        pointerEvents="none"
      />

      <Container maxW="1200px" px={{ base: 5, md: 8 }} position="relative">
        <Box maxW="820px">

          {/* Nationwide badge */}
          <HStack
            spacing={2}
            bg="brand.accentSoft"
            border="1px solid"
            borderColor="brand.accentBorder"
            borderRadius="full"
            px={4}
            py={1.5}
            mb={8}
            w="fit-content"
          >
            <Icon as={HiGlobe} boxSize={3.5} color="brand.accent" />
            <Text fontSize="xs" fontWeight="600" color="brand.accent" letterSpacing="0.02em">
              Serving all 50 states
            </Text>
          </HStack>

          <Heading
            as="h2"
            fontFamily="heading"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            fontWeight="800"
            lineHeight="1.06"
            letterSpacing="-0.03em"
            mb={7}
          >
            Sell Your Transformers
            <Box as="br" display={{ base: 'none', md: 'block' }} />
            <Box as="span" color="brand.accent"> and Switchgear</Box>
          </Heading>

          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="brand.textSecondary"
            lineHeight="1.7"
            maxW="600px"
            mb={10}
          >
            We buy all types of electrical equipment. Fast evaluation.
            Competitive offers. We handle pickup and payment nationwide.
            All brands, any condition.
          </Text>

          <Flex gap={4} direction={{ base: 'column', sm: 'row' }}>
            <Button
              variant="primary"
              size="lg"
              rightIcon={<HiArrowRight />}
              onClick={() => navigate('/contact/')}
              px={8}
              fontFamily="heading"
              fontWeight="700"
              letterSpacing="-0.01em"
            >
              Get Your Offer
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/contact/')}
              px={8}
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
