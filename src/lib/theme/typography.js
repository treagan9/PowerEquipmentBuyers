// src/lib/theme/typography.js

// Space Grotesk — geometric, technical feel for headings
// Inter — clean, highly legible for body text
// Both loaded via Google Fonts in index.html

export const fonts = {
  heading: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', monospace"
}

export const textStyles = {
  heroTitle: {
    fontSize: { base: '3xl', md: '5xl', lg: '6xl' },
    fontWeight: '800',
    lineHeight: '1.08',
    letterSpacing: '-0.03em',
    fontFamily: 'heading'
  },
  sectionTitle: {
    fontSize: { base: '2xl', md: '4xl' },
    fontWeight: '700',
    lineHeight: '1.15',
    letterSpacing: '-0.02em',
    fontFamily: 'heading'
  },
  cardTitle: {
    fontSize: 'lg',
    fontWeight: '700',
    lineHeight: '1.3',
    fontFamily: 'heading'
  },
  label: {
    fontSize: 'xs',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: 'brand.accent'
  },
  body: {
    fontSize: { base: 'md', md: 'lg' },
    lineHeight: '1.7',
    color: 'brand.textSecondary'
  }
}
