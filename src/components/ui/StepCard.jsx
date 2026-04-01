// src/components/ui/StepCard.jsx
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

function StepCard({ number, title, description }) {
  return (
    <Box>
      <Flex
        w={12}
        h={12}
        bg="brand.accentSoft"
        border="1.5px solid"
        borderColor="brand.accentBorder"
        borderRadius="full"
        align="center"
        justify="center"
        mb={5}
        mx={{ base: 'auto', md: '0' }}
      >
        <Text fontSize="lg" fontWeight="800" color="brand.accent" fontFamily="heading">
          {number}
        </Text>
      </Flex>
      <Heading
        as="h3"
        fontFamily="heading"
        fontSize="md"
        fontWeight="700"
        color="brand.gray900"
        mb={2}
        textAlign={{ base: 'center', md: 'left' }}
      >
        {title}
      </Heading>
      <Text
        fontSize="sm"
        color="brand.gray500"
        lineHeight="1.7"
        textAlign={{ base: 'center', md: 'left' }}
      >
        {description}
      </Text>
    </Box>
  )
}

export default StepCard
