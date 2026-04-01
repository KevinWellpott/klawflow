'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import tokens from '../styles/design-tokens.json';

const A = tokens.colors.accent;
const AH = tokens.colors.accentHover;
const G = tokens.glassmorphism;
const glassBlur = `blur(${G.backdropBlur})`;
const glassBlurMobile = `blur(${G.backdropBlurMobile})`;

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  breakpoints: tokens.breakpoints,
  colors: {
    brand: {
      50: '#f7ffe8',
      100: '#e8ffc8',
      200: '#d4f88a',
      300: '#c8f06a',
      400: '#c4f855',
      500: A,
      600: AH,
      700: '#9FD632',
      800: '#7FB828',
      900: '#5a8a1a',
    },
    gray: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      850: '#18181b',
      900: '#0a0a0a',
      950: '#000000',
    },
  },
  fonts: {
    body: tokens.typography.fontFamily,
    heading: tokens.typography.fontFamily,
  },
  fontSizes: tokens.typography.fontSizes,
  fontWeights: tokens.typography.fontWeights,
  lineHeights: tokens.typography.lineHeights,
  radii: tokens.radii,
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'transparent',
        color: tokens.colors.textBody,
        fontFamily: tokens.typography.fontFamily,
        scrollBehavior: 'smooth',
        WebkitTapHighlightColor: 'transparent',
      },
      '::selection': {
        backgroundColor: 'rgba(209, 254, 73, 0.35)',
        color: '#000000',
      },
      '.glass': {
        WebkitBackdropFilter: `${glassBlur} saturate(100%)`,
        backdropFilter: `${glassBlur} saturate(100%)`,
        backgroundColor: G.background,
        border: 'none',
        boxShadow: G.boxShadow,
        transition: G.transition,
        '&:hover': {
          backgroundColor: G.hoverBackground,
          boxShadow: G.boxShadowHover,
        },
      },
      '.glass-card': {
        WebkitBackdropFilter: `${glassBlur} saturate(100%)`,
        backdropFilter: `${glassBlur} saturate(100%)`,
        backgroundColor: G.background,
        border: 'none',
        boxShadow: G.boxShadow,
        transition: G.transition,
        borderRadius: tokens.radii.card,
        padding: '1rem',
        '@media screen and (min-width: 48em)': {
          padding: '1.5rem',
        },
        '&:hover': {
          transform: 'translateY(-4px)',
          backgroundColor: G.hoverBackground,
          boxShadow: G.boxShadowHover,
        },
      },
      '.glass.glass-nav': {
        borderRadius: '0',
        '&:hover': {
          transform: 'none',
        },
      },
      '@media screen and (max-width: 47.99em)': {
        '.glass:not(.glass-nav), .glass-card': {
          WebkitBackdropFilter: glassBlurMobile,
          backdropFilter: glassBlurMobile,
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: tokens.typography.fontWeights.semibold,
        borderRadius: tokens.radii.full,
        transition: 'all 0.2s ease',
        _focus: { boxShadow: 'none' },
      },
      variants: {
        primary: {
          bg: A,
          color: '#000000',
          letterSpacing: '-0.02em',
          _hover: {
            bg: '#E4FF70',
            transform: 'translateY(-1px)',
            boxShadow: '0 8px 32px rgba(209, 254, 73, 0.25)',
          },
          _active: { bg: AH, transform: 'translateY(0)' },
        },
        secondary: {
          bg: 'rgba(255,255,255,0.06)',
          color: 'rgba(255,255,255,0.9)',
          border: 'none',
          letterSpacing: '-0.02em',
          _hover: {
            color: '#ffffff',
            bg: 'rgba(255,255,255,0.1)',
          },
        },
        ghost: {
          bg: 'transparent',
          color: tokens.colors.textBody,
          _hover: { color: tokens.colors.primary, bg: 'transparent' },
        },
        accent: {
          bg: A,
          color: '#000000',
          letterSpacing: '-0.02em',
          _hover: {
            bg: '#E4FF70',
            transform: 'translateY(-1px)',
            boxShadow: '0 8px 32px rgba(209, 254, 73, 0.3)',
          },
          _active: { bg: AH, transform: 'translateY(0)' },
        },
      },
      sizes: {
        lg: { h: '52px', px: '28px', fontSize: 'md' },
        md: { h: '44px', px: '22px', fontSize: 'sm' },
        sm: { h: '36px', px: '16px', fontSize: 'sm' },
      },
      defaultProps: { variant: 'primary', size: 'lg' },
    },
    Input: {
      variants: {
        filled: {
          field: {
            bg: 'rgba(255,255,255,0.08)',
            border: 'none',
            borderRadius: tokens.radii.full,
            color: tokens.colors.primary,
            transition: 'all 0.2s ease',
            _hover: {
              bg: 'rgba(255,255,255,0.12)',
            },
            _focus: {
              bg: 'rgba(12,12,12,0.92)',
              boxShadow: `0 0 0 2px ${A}`,
            },
            _placeholder: { color: tokens.colors.textMuted },
          },
        },
      },
      defaultProps: { variant: 'filled' },
    },
    Heading: {
      baseStyle: { color: tokens.colors.textHeading, lineHeight: 1.1 },
    },
    Modal: {
      baseStyle: {
        dialog: {
          bg: G.background,
          border: 'none',
          borderRadius: tokens.radii.xl,
          backdropFilter: `${glassBlur} saturate(100%)`,
          WebkitBackdropFilter: `${glassBlur} saturate(100%)`,
          boxShadow: G.boxShadow,
        },
        header: { color: tokens.colors.textHeading },
        closeButton: { color: tokens.colors.textBody },
      },
    },
    Accordion: {
      baseStyle: {
        container: { border: 'none' },
        button: {
          color: tokens.colors.textHeading,
          fontWeight: tokens.typography.fontWeights.medium,
          letterSpacing: '-0.01em',
          _hover: { bg: 'transparent', color: '#fff' },
          _focus: { boxShadow: 'none' },
          py: 6,
        },
        panel: { color: tokens.colors.textBody, pb: 6, lineHeight: 1.7 },
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
