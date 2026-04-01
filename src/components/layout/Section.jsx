// src/components/layout/Section.jsx
import { Box, Container } from '@chakra-ui/react'

function Section({ id, variant = 'light', children, py, ...rest }) {
  const bgMap = {
    light: 'white',
    subtle: 'brand.gray50',
    dark: 'brand.dark'
  }

  return (
    <Box
      as="section"
      id={id}
      bg={bgMap[variant] || variant}
      py={py || { base: 16, md: 24 }}
      {...rest}
    >
      <Container maxW="1200px" px={{ base: 5, md: 8 }}>
        {children}
      </Container>
    </Box>
  )
}

export default Section
