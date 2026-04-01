// src/components/layout/Footer.jsx
import {
  Box,
  Container,
  Flex,
  Text,
  HStack,
  VStack,
  Image,
  Link as ChakraLink,
  Divider
} from '@chakra-ui/react'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box as="footer" bg="brand.gray50" borderTop="1px solid" borderColor="brand.gray200">
      <Container maxW="1200px" px={{ base: 5, md: 8 }} py={10}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'center', md: 'flex-start' }}
          gap={8}
        >
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={3}>
            <Image
              src="/logo-wide-transparent-background.png"
              alt="Power Equipment Buyers"
              h="30px"
              objectFit="contain"
            />
            <Text
              fontSize="sm"
              color="brand.gray500"
              maxW="320px"
              textAlign={{ base: 'center', md: 'left' }}
              lineHeight="1.7"
            >
              Direct buyer of surplus transformers and switchgear.
              Nationwide service. Fast offers. All major brands.
            </Text>
          </VStack>

          <VStack align={{ base: 'center', md: 'flex-end' }} spacing={2}>
            <Text
              fontSize="11px"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="0.1em"
              color="brand.accent"
            >
              Contact
            </Text>
            <ChakraLink
              href="mailto:info@powerequipmentbuyers.com"
              fontSize="sm"
              color="brand.gray500"
              _hover={{ color: 'brand.accent' }}
            >
              info@powerequipmentbuyers.com
            </ChakraLink>
          </VStack>
        </Flex>

        <Divider borderColor="brand.gray200" my={6} />

        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={3}
        >
          <Text fontSize="xs" color="brand.gray400">
            {year} Power Equipment Buyers. All rights reserved.
          </Text>
          <HStack spacing={5}>
            <ChakraLink fontSize="xs" color="brand.gray400" _hover={{ color: 'brand.gray600' }} href="#">
              Privacy Policy
            </ChakraLink>
            <ChakraLink fontSize="xs" color="brand.gray400" _hover={{ color: 'brand.gray600' }} href="#">
              Terms of Service
            </ChakraLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
