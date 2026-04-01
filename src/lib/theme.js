// src/lib/theme.js
import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    bg: '#0a0f1a',
    surface: '#141b2d',
    surfaceLight: '#1a2340',
    accent: '#3b82f6',
    accentHover: '#2563eb',
    accentSoft: 'rgba(59, 130, 246, 0.12)',
    text: '#f1f5f9',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',
    border: '#1e293b',
    success: '#22c55e',
    warning: '#f59e0b'
  }
}

const fonts = {
  heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
}

const styles = {
  global: {
    'html, body': {
      bg: 'brand.bg',
      color: 'brand.text',
      scrollBehavior: 'smooth'
    },
    '::selection': {
      bg: 'brand.accentSoft',
      color: 'brand.accent'
    }
  }
}

const components = {
  Button: {
    variants: {
      primary: {
        bg: 'brand.accent',
        color: 'white',
        fontWeight: '600',
        _hover: {
          bg: 'brand.accentHover',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 20px rgba(59, 130, 246, 0.35)'
        },
        _active: {
          transform: 'translateY(0)'
        },
        transition: 'all 0.2s'
      },
      outline: {
        borderColor: 'brand.accent',
        color: 'brand.accent',
        _hover: {
          bg: 'brand.accentSoft'
        }
      }
    }
  },
  Input: {
    variants: {
      filled: {
        field: {
          bg: 'brand.surface',
          borderColor: 'brand.border',
          color: 'brand.text',
          _hover: {
            bg: 'brand.surfaceLight'
          },
          _focus: {
            bg: 'brand.surfaceLight',
            borderColor: 'brand.accent'
          },
          _placeholder: {
            color: 'brand.textMuted'
          }
        }
      }
    },
    defaultProps: {
      variant: 'filled'
    }
  },
  Textarea: {
    variants: {
      filled: {
        bg: 'brand.surface',
        borderColor: 'brand.border',
        color: 'brand.text',
        _hover: {
          bg: 'brand.surfaceLight'
        },
        _focus: {
          bg: 'brand.surfaceLight',
          borderColor: 'brand.accent'
        },
        _placeholder: {
          color: 'brand.textMuted'
        }
      }
    },
    defaultProps: {
      variant: 'filled'
    }
  },
  Select: {
    variants: {
      filled: {
        field: {
          bg: 'brand.surface',
          borderColor: 'brand.border',
          color: 'brand.text',
          _hover: {
            bg: 'brand.surfaceLight'
          },
          _focus: {
            bg: 'brand.surfaceLight',
            borderColor: 'brand.accent'
          }
        }
      }
    },
    defaultProps: {
      variant: 'filled'
    }
  }
}

const theme = extendTheme({
  colors,
  fonts,
  styles,
  components,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  }
})

export default theme
