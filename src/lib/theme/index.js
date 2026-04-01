// src/lib/theme/index.js
import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { fonts, textStyles } from './typography'
import { styles } from './styles'
import { components } from './components'

const theme = extendTheme({
  colors,
  fonts,
  textStyles,
  styles,
  components,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  }
})

export default theme
