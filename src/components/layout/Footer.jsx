// src/components/layout/Footer.jsx
import { Box, Container, Flex, Text, HStack, Link as ChakraLink, Divider } from '@chakra-ui/react'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box as="footer" bg="brand.surface" borderTop="1px solid" borderColor="brand.border">
      <Container maxW="1200px" px={{ base: 5, md: 8 }} py={10}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'center', md: 'flex-start' }}
          gap={8}
        >
          <Box textAlign={{ base: 'center', md: 'left' }}>
            <Text fontWeight="700" fontSize="lg" mb={2}>
              Power Equipment Buyers
            </Text>
            <Text fontSize="sm" color="brand.textSecondary" maxW="320px">
              Direct buyer of surplus transformers and switchgear. Nationwide service, fast offers, all major brands.
            </Text>
          </Box>
          <Box textAlign={{ base: 'center', md: 'right' }}>
            <Text fontSize="sm" fontWeight="600" mb={2}>
              Contact
            </Text>
            <Text fontSize="sm" color="brand.textSecondary">
              info@powerequipmentbuyers.com
            </Text>
          </Box>
        </Flex>
        <Divider borderColor="brand.border" my={8} />
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text fontSize="xs" color="brand.textMuted">
            {year} Power Equipment Buyers. All rights reserved.
          </Text>
          <HStack spacing={6}>
            <ChakraLink fontSize="xs" color="brand.textMuted" _hover={{ color: 'brand.text' }} href="#">
              Privacy Policy
            </ChakraLink>
            <ChakraLink fontSize="xs" color="brand.textMuted" _hover={{ color: 'brand.text' }} href="#">
              Terms of Service
            </ChakraLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
