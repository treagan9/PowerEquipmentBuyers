// src/components/layout/Section.jsx
import { Box, Container } from '@chakra-ui/react'

function Section({ id, bg, children, py, ...rest }) {
  return (
    <Box as="section" id={id} bg={bg} py={py || { base: 16, md: 24 }} {...rest}>
      <Container maxW="1200px" px={{ base: 5, md: 8 }}>
        {children}
      </Container>
    </Box>
  )
}

export default Section
