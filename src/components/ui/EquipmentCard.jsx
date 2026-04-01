// src/components/ui/EquipmentCard.jsx
import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react'

function EquipmentCard({ icon, title, items }) {
  return (
    <Box
      bg="brand.surface"
      border="1px solid"
      borderColor="brand.border"
      borderRadius="xl"
      p={6}
      transition="all 0.25s"
      _hover={{
        borderColor: 'brand.accent',
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 30px rgba(59, 130, 246, 0.12)'
      }}
    >
      <Flex
        w={12}
        h={12}
        bg="brand.accentSoft"
        borderRadius="lg"
        align="center"
        justify="center"
        mb={4}
      >
        <Icon as={icon} boxSize={6} color="brand.accent" />
      </Flex>
      <Heading as="h3" fontSize="lg" fontWeight="700" mb={3}>
        {title}
      </Heading>
      <Box as="ul" listStyleType="none" p={0} m={0}>
        {items.map((item, i) => (
          <Text
            as="li"
            key={i}
            fontSize="sm"
            color="brand.textSecondary"
            py={1}
            pl={4}
            position="relative"
            _before={{
              content: '""',
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              w: '6px',
              h: '6px',
              bg: 'brand.accent',
              borderRadius: 'full',
              opacity: 0.5
            }}
          >
            {item}
          </Text>
        ))}
      </Box>
    </Box>
  )
}

export default EquipmentCard
