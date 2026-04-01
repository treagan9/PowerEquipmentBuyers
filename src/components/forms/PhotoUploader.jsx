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
import { HiPhotograph, HiX, HiCamera } from 'react-icons/hi'

const MAX_PHOTOS = 5
const MAX_SIZE_MB = 10
const ACCEPTED = 'image/jpeg,image/png,image/webp,image/heic'

function PhotoUploader({ photos, setPhotos }) {
  const inputRef = useRef(null)

  const handleFiles = (e) => {
    const files = Array.from(e.target.files)
    const remaining = MAX_PHOTOS - photos.length
    const valid = files.slice(0, remaining).filter((file) => {
      if (file.size > MAX_SIZE_MB * 1024 * 1024) return false
      return true
    })
    setPhotos((prev) => [...prev, ...valid])
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
            <Box key={i} position="relative" borderRadius="lg" overflow="hidden">
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
          border="2px dashed"
          borderColor="brand.border"
          borderRadius="xl"
          p={6}
          direction="column"
          align="center"
          justify="center"
          cursor="pointer"
          transition="all 0.2s"
          _hover={{
            borderColor: 'brand.accent',
            bg: 'brand.accentSoft'
          }}
          onClick={() => inputRef.current?.click()}
        >
          <Flex gap={2} mb={2}>
            <Icon as={HiPhotograph} boxSize={6} color="brand.textMuted" />
            <Icon as={HiCamera} boxSize={6} color="brand.textMuted" />
          </Flex>
          <Text fontSize="sm" fontWeight="600" color="brand.textSecondary" mb={1}>
            Upload equipment photos
          </Text>
          <Text fontSize="xs" color="brand.textMuted">
            Nameplate, overall condition, details ({photos.length}/{MAX_PHOTOS})
          </Text>
        </Flex>
      )}
    </Box>
  )
}

export default PhotoUploader
