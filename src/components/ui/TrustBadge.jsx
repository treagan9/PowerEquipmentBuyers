// src/components/ui/TrustBadge.jsx
import { Flex, Icon, Text } from '@chakra-ui/react'

function TrustBadge({ icon, text }) {
  return (
    <Flex
      align="center"
      gap={3}
      bg="brand.darkSurface"
      border="1px solid"
      borderColor="brand.darkBorder"
      borderRadius="lg"
      px={5}
      py={4}
    >
      <Icon as={icon} boxSize={5} color="brand.accentLight" flexShrink={0} />
      <Text fontSize="sm" fontWeight="600" color="white">
        {text}
      </Text>
    </Flex>
  )
}

export default TrustBadge
