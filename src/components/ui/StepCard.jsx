// src/components/ui/StepCard.jsx
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

function StepCard({ number, title, description }) {
  return (
    <Box position="relative">
      <Flex
        w={14}
        h={14}
        bg="brand.accentSoft"
        border="2px solid"
        borderColor="brand.accent"
        borderRadius="full"
        align="center"
        justify="center"
        mb={5}
        mx={{ base: 'auto', md: '0' }}
      >
        <Text fontSize="xl" fontWeight="800" color="brand.accent">
          {number}
        </Text>
      </Flex>
      <Heading
        as="h3"
        fontSize="lg"
        fontWeight="700"
        mb={2}
        textAlign={{ base: 'center', md: 'left' }}
      >
        {title}
      </Heading>
      <Text
        fontSize="sm"
        color="brand.textSecondary"
        lineHeight="1.7"
        textAlign={{ base: 'center', md: 'left' }}
      >
        {description}
      </Text>
    </Box>
  )
}

export default StepCard
