// src/components/ui/SectionHeading.jsx
import { Box, Heading, Text } from '@chakra-ui/react'

function SectionHeading({ label, title, subtitle }) {
  return (
    <Box textAlign="center" mb={12}>
      {label && (
        <Text
          fontSize="sm"
          fontWeight="700"
          textTransform="uppercase"
          letterSpacing="0.1em"
          color="brand.accent"
          mb={3}
        >
          {label}
        </Text>
      )}
      <Heading
        as="h2"
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight="800"
        lineHeight="1.2"
        mb={4}
      >
        {title}
      </Heading>
      {subtitle && (
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color="brand.textSecondary"
          maxW="640px"
          mx="auto"
        >
          {subtitle}
        </Text>
      )}
    </Box>
  )
}

export default SectionHeading
