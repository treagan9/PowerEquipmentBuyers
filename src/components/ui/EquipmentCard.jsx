// src/components/ui/EquipmentCard.jsx
import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react'

function EquipmentCard({ icon, title, items }) {
  return (
    <Box
      bg="brand.darkSurface"
      border="1px solid"
      borderColor="brand.darkBorder"
      borderRadius="xl"
      p={6}
      transition="all 0.2s"
      _hover={{
        borderColor: 'brand.accentLight',
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
      }}
    >
      <Flex
        w={10}
        h={10}
        bg="brand.accentSoftDark"
        borderRadius="lg"
        align="center"
        justify="center"
        mb={4}
      >
        <Icon as={icon} boxSize={5} color="brand.accentLight" />
      </Flex>
      <Heading as="h3" fontFamily="heading" fontSize="md" fontWeight="700" mb={3} color="white">
        {title}
      </Heading>
      <Box as="ul" listStyleType="none" p={0} m={0}>
        {items.map((item, i) => (
          <Text
            as="li"
            key={i}
            fontSize="sm"
            color="brand.gray400"
            py={0.5}
            pl={4}
            position="relative"
            _before={{
              content: '""',
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              w: '5px',
              h: '5px',
              bg: 'brand.accentLight',
              borderRadius: 'full',
              opacity: 0.4
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
