// src/components/ui/StepCard.jsx
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

function StepCard({ number, title, description }) {
  return (
    <Box>
      <Flex
        w={11}
        h={11}
        bg="brand.accent"
        borderRadius="full"
        align="center"
        justify="center"
        mb={5}
        mx={{ base: 'auto', md: '0' }}
      >
        <Text fontSize="md" fontWeight="800" color="white" fontFamily="heading">
          {number}
        </Text>
      </Flex>
      <Heading
        as="h3"
        fontFamily="heading"
        fontSize="md"
        fontWeight="700"
        color="brand.gray900"
        mb={2.5}
        textAlign={{ base: 'center', md: 'left' }}
      >
        {title}
      </Heading>
      <Text
        fontSize="sm"
        color="brand.gray500"
        lineHeight="1.75"
        textAlign={{ base: 'center', md: 'left' }}
      >
        {description}
      </Text>
    </Box>
  )
}

export default StepCard
