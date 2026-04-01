// src/lib/theme/styles.js
export const styles = {
  global: {
    'html, body': {
      bg: 'brand.bg',
      color: 'brand.text',
      scrollBehavior: 'smooth',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    },
    '::selection': {
      bg: 'brand.accentSoft',
      color: 'brand.accent'
    },
    '::-webkit-scrollbar': {
      width: '8px'
    },
    '::-webkit-scrollbar-track': {
      bg: 'brand.bg'
    },
    '::-webkit-scrollbar-thumb': {
      bg: 'brand.surfaceRaised',
      borderRadius: '4px'
    },
    '::-webkit-scrollbar-thumb:hover': {
      bg: 'brand.borderLight'
    }
  }
}
