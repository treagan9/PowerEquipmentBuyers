// src/components/layout/Header.jsx
import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Flex,
  Heading,
  Button,
  IconButton,
  VStack,
  HStack,
  Text,
  Link as ChakraLink
} from '@chakra-ui/react'
import { HiMenu, HiX } from 'react-icons/hi'

const NAV_ITEMS = [
  { label: 'Equipment', href: '#equipment' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' }
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      bg={scrolled ? 'rgba(10, 15, 26, 0.92)' : 'transparent'}
      backdropFilter={scrolled ? 'blur(12px)' : 'none'}
      borderBottom={scrolled ? '1px solid' : '1px solid transparent'}
      borderColor={scrolled ? 'brand.border' : 'transparent'}
      transition="all 0.3s"
    >
      <Container maxW="1200px" px={{ base: 5, md: 8 }}>
        <Flex h="72px" align="center" justify="space-between">
          <HStack spacing={2} cursor="pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Box
              w={8}
              h={8}
              bg="brand.accent"
              borderRadius="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="sm" fontWeight="800" color="white">PE</Text>
            </Box>
            <Heading as="h1" fontSize="md" fontWeight="700" letterSpacing="-0.01em">
              Power Equipment Buyers
            </Heading>
          </HStack>

          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {NAV_ITEMS.map((item) => (
              <ChakraLink
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                fontSize="sm"
                fontWeight="500"
                color="brand.textSecondary"
                _hover={{ color: 'brand.text' }}
                cursor="pointer"
                transition="color 0.2s"
              >
                {item.label}
              </ChakraLink>
            ))}
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavClick('#contact')}
            >
              Get an Offer
            </Button>
          </HStack>

          <IconButton
            display={{ base: 'flex', md: 'none' }}
            aria-label="Toggle menu"
            icon={mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            variant="ghost"
            color="brand.text"
            onClick={() => setMobileOpen(!mobileOpen)}
          />
        </Flex>

        {mobileOpen && (
          <VStack
            display={{ base: 'flex', md: 'none' }}
            pb={6}
            spacing={4}
            align="stretch"
          >
            {NAV_ITEMS.map((item) => (
              <ChakraLink
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                fontSize="md"
                fontWeight="500"
                color="brand.textSecondary"
                _hover={{ color: 'brand.text' }}
                cursor="pointer"
                py={2}
              >
                {item.label}
              </ChakraLink>
            ))}
            <Button
              variant="primary"
              size="md"
              onClick={() => handleNavClick('#contact')}
              w="full"
            >
              Get an Offer
            </Button>
          </VStack>
        )}
      </Container>
    </Box>
  )
}

export default Header
