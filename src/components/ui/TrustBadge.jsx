// src/components/ui/TrustBadge.jsx
import { Flex, Icon, Text } from '@chakra-ui/react'

function TrustBadge({ icon, text }) {
  return (
    <Flex
      align="center"
      gap={3}
      bg="brand.surface"
      border="1px solid"
      borderColor="brand.border"
      borderRadius="lg"
      px={5}
      py={4}
    >
      <Icon as={icon} boxSize={5} color="brand.accent" flexShrink={0} />
      <Text fontSize="sm" fontWeight="600">
        {text}
      </Text>
    </Flex>
  )
}

export default TrustBadge
