// src/components/forms/PhotoUploader.jsx
import { useRef } from 'react'
import {
  Box,
  Flex,
  Text,
  Icon,
  Image,
  IconButton,
  SimpleGrid
} from '@chakra-ui/react'
import { HiPhotograph, HiX } from 'react-icons/hi'

const MAX_PHOTOS = 5
const ACCEPTED = 'image/jpeg,image/png,image/webp,image/heic'

function PhotoUploader({ photos, setPhotos }) {
  const inputRef = useRef(null)

  const handleFiles = (e) => {
    const files = Array.from(e.target.files)
    const remaining = MAX_PHOTOS - photos.length
    setPhotos((prev) => [...prev, ...files.slice(0, remaining)])
    if (inputRef.current) inputRef.current.value = ''
  }

  const removePhoto = (index) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <Box>
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED}
        capture="environment"
        multiple
        onChange={handleFiles}
        style={{ display: 'none' }}
      />

      {photos.length > 0 && (
        <SimpleGrid columns={{ base: 3, md: 5 }} spacing={3} mb={4}>
          {photos.map((file, i) => (
            <Box
              key={i}
              position="relative"
              borderRadius="xl"
              overflow="hidden"
              border="1px solid"
              borderColor="brand.border"
            >
              <Image
                src={URL.createObjectURL(file)}
                alt={`Upload ${i + 1}`}
                w="full"
                h="80px"
                objectFit="cover"
              />
              <IconButton
                aria-label="Remove photo"
                icon={<HiX />}
                size="xs"
                position="absolute"
                top={1}
                right={1}
                bg="blackAlpha.700"
                color="white"
                borderRadius="full"
                _hover={{ bg: 'red.500' }}
                onClick={() => removePhoto(i)}
              />
            </Box>
          ))}
        </SimpleGrid>
      )}

      {photos.length < MAX_PHOTOS && (
        <Flex
          border="1px dashed"
          borderColor="brand.borderLight"
          borderRadius="xl"
          p={8}
          direction="column"
          align="center"
          justify="center"
          cursor="pointer"
          bg="brand.bgAlt"
          transition="all 0.2s"
          _hover={{
            borderColor: 'brand.accent',
            bg: 'brand.accentSoft'
          }}
          onClick={() => inputRef.current?.click()}
        >
          <Icon as={HiPhotograph} boxSize={8} color="brand.textMuted" mb={3} />
          <Text fontSize="sm" fontWeight="600" color="brand.textSecondary">
            Upload equipment photos
          </Text>
          <Text fontSize="xs" color="brand.textMuted" mt={1}>
            Nameplate, condition, details
          </Text>
        </Flex>
      )}
    </Box>
  )
}

export default PhotoUploader
