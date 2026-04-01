// src/lib/theme/colors.js

// Primary palette — dark industrial with electric blue accents
// Inspired by substation control rooms and industrial monitoring interfaces
export const colors = {
  brand: {
    // Backgrounds
    bg: '#080c16',
    bgAlt: '#0c1221',
    surface: '#111827',
    surfaceHover: '#162033',
    surfaceLight: '#1a2540',
    surfaceRaised: '#1e293b',

    // Accent — electric blue
    accent: '#3b82f6',
    accentHover: '#2563eb',
    accentPressed: '#1d4ed8',
    accentSoft: 'rgba(59, 130, 246, 0.10)',
    accentBorder: 'rgba(59, 130, 246, 0.25)',
    accentGlow: '0 0 20px rgba(59, 130, 246, 0.15)',

    // Secondary accent — amber/warning (equipment category highlights)
    amber: '#f59e0b',
    amberSoft: 'rgba(245, 158, 11, 0.10)',
    amberBorder: 'rgba(245, 158, 11, 0.25)',

    // Success — green (confirmations, badges)
    success: '#22c55e',
    successSoft: 'rgba(34, 197, 94, 0.10)',

    // Error
    error: '#ef4444',
    errorSoft: 'rgba(239, 68, 68, 0.10)',

    // Text
    text: '#f1f5f9',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',
    textDim: '#475569',

    // Borders
    border: '#1e293b',
    borderLight: '#334155',
    borderAccent: 'rgba(59, 130, 246, 0.3)',

    // Gradients (use as CSS values)
    heroGradient: 'linear-gradient(135deg, #080c16 0%, #0c1a3a 50%, #080c16 100%)',
    cardGradient: 'linear-gradient(180deg, #111827 0%, #0f172a 100%)',
    accentGradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
  }
}
