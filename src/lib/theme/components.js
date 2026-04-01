// src/lib/theme/components.js
export const components = {
  Button: {
    baseStyle: {
      fontFamily: 'heading',
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
          boxShadow: '0 4px 16px rgba(30, 64, 175, 0.3)'
        },
        _active: {
          transform: 'translateY(0)'
        }
      },
      primaryLight: {
        bg: 'white',
        color: 'brand.accent',
        _hover: {
          bg: 'brand.gray100',
          transform: 'translateY(-1px)'
        }
      },
      outline: {
        bg: 'transparent',
        color: 'brand.accent',
        border: '1.5px solid',
        borderColor: 'brand.accent',
        _hover: {
          bg: 'brand.accentSoft'
        }
      },
      outlineLight: {
        bg: 'transparent',
        color: 'white',
        border: '1.5px solid',
        borderColor: 'whiteAlpha.400',
        _hover: {
          bg: 'whiteAlpha.100',
          borderColor: 'whiteAlpha.600'
        }
      },
      ghost: {
        color: 'brand.gray600',
        _hover: {
          bg: 'brand.gray100',
          color: 'brand.gray900'
        }
      }
    }
  },
  Input: {
    variants: {
      filled: {
        field: {
          bg: 'brand.gray50',
          border: '1.5px solid',
          borderColor: 'brand.gray200',
          borderRadius: 'lg',
          color: 'brand.gray900',
          fontSize: 'sm',
          _hover: {
            borderColor: 'brand.gray300'
          },
          _focus: {
            borderColor: 'brand.accent',
            bg: 'white',
            boxShadow: '0 0 0 3px rgba(30, 64, 175, 0.08)'
          },
          _placeholder: {
            color: 'brand.gray400'
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
        bg: 'brand.gray50',
        border: '1.5px solid',
        borderColor: 'brand.gray200',
        borderRadius: 'lg',
        color: 'brand.gray900',
        fontSize: 'sm',
        _hover: {
          borderColor: 'brand.gray300'
        },
        _focus: {
          borderColor: 'brand.accent',
          bg: 'white',
          boxShadow: '0 0 0 3px rgba(30, 64, 175, 0.08)'
        },
        _placeholder: {
          color: 'brand.gray400'
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
          bg: 'brand.gray50',
          border: '1.5px solid',
          borderColor: 'brand.gray200',
          borderRadius: 'lg',
          color: 'brand.gray900',
          fontSize: 'sm',
          _hover: {
            borderColor: 'brand.gray300'
          },
          _focus: {
            borderColor: 'brand.accent',
            bg: 'white'
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
      color: 'brand.gray700',
      mb: 1.5
    }
  }
}
