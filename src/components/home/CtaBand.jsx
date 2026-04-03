// src/components/home/CtaBand.jsx
import { Box, Container, Heading, Text, Button, Flex, Icon, HStack } from '@chakra-ui/react'
import { HiOutlineClock, HiOutlineTruck, HiOutlineShieldCheck } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

function CtaBand() {
  const navigate = useNavigate()

  return (
    <Box
      position="relative"
      overflow="hidden"
    >
      {/* Background image with heavy overlay */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="url('/hero-substation.png')"
        backgroundSize="cover"
        backgroundPosition="center bottom"
        backgroundRepeat="no-repeat"
      />
      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(135deg, rgba(26, 58, 107, 0.94) 0%, rgba(14, 165, 168, 0.85) 100%)"
      />

      <Container maxW="800px" px={{ base: 5, md: 8 }} position="relative" textAlign="center" py={{ base: 16, md: 24 }}>
        <Heading
          as="h2"
          fontFamily="heading"
          fontSize={{ base: '2xl', md: '36px' }}
          fontWeight="800"
          lineHeight="1.15"
          letterSpacing="-0.025em"
          color="white"
          mb={4}
        >
          Ready to Sell Your Equipment?
        </Heading>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color="whiteAlpha.800"
          lineHeight="1.7"
          maxW="480px"
          mx="auto"
          mb={8}
        >
          Get a competitive offer today. No obligation, no hassle.
          We handle everything from evaluation to pickup.
        </Text>

        <Flex gap={3} justify="center" direction={{ base: 'column', sm: 'row' }} mb={10}>
          <Button
            bg="white"
            color="brand.accent"
            size="lg"
            onClick={() => navigate('/contact/')}
            px={8}
            fontFamily="heading"
            fontWeight="700"
            _hover={{
              bg: 'brand.gray100',
              transform: 'translateY(-1px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
            }}
            _active={{ transform: 'translateY(0)' }}
            transition="all 0.2s"
          >
            Request an Offer
          </Button>
          <Button
            variant="unstyled"
            size="lg"
            color="white"
            border="1.5px solid"
            borderColor="whiteAlpha.400"
            px={8}
            fontFamily="heading"
            fontWeight="600"
            display="flex"
            alignItems="center"
            onClick={() => navigate('/contact/')}
            _hover={{
              bg: 'whiteAlpha.100',
              borderColor: 'whiteAlpha.600'
            }}
            transition="all 0.2s"
          >
            Upload Photos
          </Button>
        </Flex>

        <HStack
          justify="center"
          spacing={{ base: 4, md: 8 }}
          flexWrap="wrap"
          fontSize="sm"
          color="whiteAlpha.700"
        >
          <HStack spacing={2}>
            <Icon as={HiOutlineClock} boxSize={4} />
            <Text>1 hour response</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={HiOutlineTruck} boxSize={4} />
            <Text>Free pickup</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={HiOutlineShieldCheck} boxSize={4} />
            <Text>Guaranteed payment</Text>
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}

export default CtaBand
