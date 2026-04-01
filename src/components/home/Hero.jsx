// src/components/home/Hero.jsx
import { Box, Container, Heading, Text, Button, Flex, HStack, Icon } from '@chakra-ui/react'
import { HiArrowRight, HiShieldCheck, HiClock, HiGlobe } from 'react-icons/hi'

function Hero() {
  const handleClick = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box
      position="relative"
      overflow="hidden"
      pt={{ base: 32, md: 40 }}
      pb={{ base: 20, md: 28 }}
    >
      <Box
        position="absolute"
        top="-200px"
        right="-200px"
        w="600px"
        h="600px"
        bg="radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-100px"
        left="-100px"
        w="400px"
        h="400px"
        bg="radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="1200px" px={{ base: 5, md: 8 }} position="relative">
        <Box maxW="800px">
          <Text
            fontSize="sm"
            fontWeight="700"
            textTransform="uppercase"
            letterSpacing="0.12em"
            color="brand.accent"
            mb={5}
          >
            Direct Buyer of Power Equipment
          </Text>

          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            fontWeight="800"
            lineHeight="1.1"
            mb={6}
          >
            Sell Your Transformers{' '}
            <Box as="br" display={{ base: 'none', md: 'block' }} />
            and Switchgear
          </Heading>

          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="brand.textSecondary"
            lineHeight="1.7"
            maxW="600px"
            mb={10}
          >
            Fast evaluation. Competitive offers. We handle pickup and payment.
            All brands, new or used, anywhere in the US.
          </Text>

          <Flex gap={4} mb={12} direction={{ base: 'column', sm: 'row' }}>
            <Button
              variant="primary"
              size="lg"
              rightIcon={<HiArrowRight />}
              onClick={handleClick}
              px={8}
            >
              Get Your Offer
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleClick}
              px={8}
            >
              Upload Equipment Photos
            </Button>
          </Flex>

          <HStack
            spacing={{ base: 4, md: 8 }}
            flexWrap="wrap"
            color="brand.textMuted"
            fontSize="sm"
          >
            <HStack>
              <Icon as={HiClock} color="brand.accent" />
              <Text>Offers in under 1 hour</Text>
            </HStack>
            <HStack>
              <Icon as={HiGlobe} color="brand.accent" />
              <Text>Nationwide pickup</Text>
            </HStack>
            <HStack>
              <Icon as={HiShieldCheck} color="brand.accent" />
              <Text>Fast, guaranteed payment</Text>
            </HStack>
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
