// src/lib/theme/styles.js
export const styles = {
  global: {
    'html, body': {
      bg: 'brand.white',
      color: 'brand.gray900',
      scrollBehavior: 'smooth',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    },
    '::selection': {
      bg: 'brand.accentSoft',
      color: 'brand.accent'
    }
  }
}
