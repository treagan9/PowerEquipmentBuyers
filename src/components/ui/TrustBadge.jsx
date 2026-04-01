// src/components/ui/TrustBadge.jsx
import { Flex, Icon, Text } from '@chakra-ui/react'

function TrustBadge({ icon, text }) {
  return (
    <Flex
      align="center"
      gap={3}
      bg="white"
      border="1px solid"
      borderColor="brand.gray200"
      borderRadius="xl"
      px={5}
      py={4}
      transition="all 0.15s"
      _hover={{
        borderColor: 'brand.accentBorder',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
      }}
    >
      <Flex
        w={9}
        h={9}
        bg="brand.accentSoft"
        borderRadius="lg"
        align="center"
        justify="center"
        flexShrink={0}
      >
        <Icon as={icon} boxSize={4.5} color="brand.accent" />
      </Flex>
      <Text fontSize="sm" fontWeight="600" color="brand.gray800">
        {text}
      </Text>
    </Flex>
  )
}

export default TrustBadge
