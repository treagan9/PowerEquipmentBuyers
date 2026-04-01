// src/components/layout/Header.jsx
import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Flex,
  Button,
  IconButton,
  VStack,
  HStack,
  Image,
  Link as ChakraLink
} from '@chakra-ui/react'
import { HiMenu, HiX } from 'react-icons/hi'
import { useNavigate, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Equipment', href: '#equipment', homeOnly: true },
  { label: 'How It Works', href: '#how-it-works', homeOnly: true },
  { label: 'Why Us', href: '#why-us', homeOnly: true },
  { label: 'Contact', href: '/contact/', isRoute: true }
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (item) => {
    setMobileOpen(false)
    if (item.isRoute) {
      navigate(item.href)
      return
    }
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        const el = document.querySelector(item.href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return
    }
    const el = document.querySelector(item.href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const visibleItems = NAV_ITEMS.filter((item) => {
    if (item.homeOnly && !isHome) return false
    return true
  })

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      bg={scrolled ? 'rgba(8, 12, 22, 0.95)' : 'transparent'}
      backdropFilter={scrolled ? 'blur(16px) saturate(1.2)' : 'none'}
      borderBottom="1px solid"
      borderColor={scrolled ? 'brand.border' : 'transparent'}
      transition="all 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
    >
      <Container maxW="1200px" px={{ base: 5, md: 8 }}>
        <Flex h={{ base: '68px', md: '76px' }} align="center" justify="space-between">

          <Flex
            align="center"
            cursor="pointer"
            onClick={() => navigate('/')}
            flexShrink={0}
          >
            <Image
              src="/logo-wide-transparent-background.png"
              alt="Power Equipment Buyers"
              h={{ base: '32px', md: '38px' }}
              objectFit="contain"
            />
          </Flex>

          <HStack spacing={1} display={{ base: 'none', md: 'flex' }}>
            {visibleItems.map((item) => (
              <ChakraLink
                key={item.href}
                onClick={() => handleNavClick(item)}
                fontSize="sm"
                fontWeight="500"
                color="brand.textSecondary"
                px={4}
                py={2}
                borderRadius="lg"
                _hover={{
                  color: 'brand.text',
                  bg: 'whiteAlpha.50'
                }}
                cursor="pointer"
                transition="all 0.2s"
              >
                {item.label}
              </ChakraLink>
            ))}
            <Button
              variant="primary"
              size="sm"
              ml={3}
              onClick={() => navigate('/contact/')}
              fontFamily="heading"
              letterSpacing="-0.01em"
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
            _hover={{ bg: 'whiteAlpha.100' }}
          />
        </Flex>

        {mobileOpen && (
          <Box
            display={{ base: 'block', md: 'none' }}
            pb={6}
            borderTop="1px solid"
            borderColor="brand.border"
            mt={-1}
          >
            <VStack spacing={1} align="stretch" pt={4}>
              {visibleItems.map((item) => (
                <ChakraLink
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  fontSize="md"
                  fontWeight="500"
                  color="brand.textSecondary"
                  _hover={{ color: 'brand.text', bg: 'whiteAlpha.50' }}
                  cursor="pointer"
                  py={3}
                  px={4}
                  borderRadius="lg"
                >
                  {item.label}
                </ChakraLink>
              ))}
              <Button
                variant="primary"
                size="lg"
                onClick={() => { setMobileOpen(false); navigate('/contact/') }}
                w="full"
                mt={2}
                fontFamily="heading"
              >
                Get an Offer
              </Button>
            </VStack>
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default Header
