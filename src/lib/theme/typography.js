// src/lib/theme/typography.js

// Plus Jakarta Sans — geometric, professional, modern display face
// DM Sans — clean, highly legible body text
export const fonts = {
  heading: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  body: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
}

export const textStyles = {
  heroTitle: {
    fontSize: { base: '3xl', md: '5xl', lg: '56px' },
    fontWeight: '800',
    lineHeight: '1.08',
    letterSpacing: '-0.035em',
    fontFamily: 'heading'
  },
  sectionTitle: {
    fontSize: { base: '2xl', md: '36px' },
    fontWeight: '700',
    lineHeight: '1.15',
    letterSpacing: '-0.025em',
    fontFamily: 'heading'
  },
  cardTitle: {
    fontSize: 'md',
    fontWeight: '700',
    lineHeight: '1.3',
    fontFamily: 'heading'
  },
  label: {
    fontSize: '11px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.1em'
  }
}
