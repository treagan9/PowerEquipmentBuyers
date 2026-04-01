// src/lib/theme/components.js
export const components = {
  Button: {
    baseStyle: {
      fontWeight: '600',
      borderRadius: 'lg',
      transition: 'all 0.2s'
    },
    variants: {
      primary: {
        bg: 'brand.accent',
        color: 'white',
        _hover: {
          bg: 'brand.accentHover',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 20px rgba(59, 130, 246, 0.35)'
        },
        _active: {
          bg: 'brand.accentPressed',
          transform: 'translateY(0)'
        }
      },
      secondary: {
        bg: 'brand.surface',
        color: 'brand.text',
        border: '1px solid',
        borderColor: 'brand.border',
        _hover: {
          bg: 'brand.surfaceHover',
          borderColor: 'brand.borderLight'
        }
      },
      outline: {
        bg: 'transparent',
        color: 'brand.accent',
        border: '1px solid',
        borderColor: 'brand.accent',
        _hover: {
          bg: 'brand.accentSoft'
        }
      },
      ghost: {
        color: 'brand.textSecondary',
        _hover: {
          bg: 'brand.surface',
          color: 'brand.text'
        }
      }
    }
  },
  Input: {
    variants: {
      filled: {
        field: {
          bg: 'brand.surface',
          border: '1px solid',
          borderColor: 'brand.border',
          borderRadius: 'lg',
          color: 'brand.text',
          fontSize: 'sm',
          _hover: {
            bg: 'brand.surfaceHover',
            borderColor: 'brand.borderLight'
          },
          _focus: {
            bg: 'brand.surfaceHover',
            borderColor: 'brand.accent',
            boxShadow: '0 0 0 1px var(--chakra-colors-brand-accent)'
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
        border: '1px solid',
        borderColor: 'brand.border',
        borderRadius: 'lg',
        color: 'brand.text',
        fontSize: 'sm',
        _hover: {
          bg: 'brand.surfaceHover',
          borderColor: 'brand.borderLight'
        },
        _focus: {
          bg: 'brand.surfaceHover',
          borderColor: 'brand.accent',
          boxShadow: '0 0 0 1px var(--chakra-colors-brand-accent)'
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
          border: '1px solid',
          borderColor: 'brand.border',
          borderRadius: 'lg',
          color: 'brand.text',
          fontSize: 'sm',
          _hover: {
            bg: 'brand.surfaceHover',
            borderColor: 'brand.borderLight'
          },
          _focus: {
            bg: 'brand.surfaceHover',
            borderColor: 'brand.accent'
          }
        }
      }
    },
    defaultProps: {
      variant: 'filled'
    }
  },
  FormLabel: {
    baseStyle: {
      fontSize: 'sm',
      fontWeight: '600',
      color: 'brand.textSecondary',
      mb: 1.5
    }
  }
}
