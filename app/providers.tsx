'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import tokens from '../styles/design-tokens.json';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  breakpoints: tokens.breakpoints,
  colors: {
    brand: {
      50: '#f0f0ff',
      100: '#e0e0ff',
      200: '#c7c6ff',
      300: '#a8a5ff',
      400: '#8a84ff',
      500: tokens.colors.accent,
      600: tokens.colors.accentHover,
      700: '#5649e0',
      800: '#4238b8',
      900: '#312890',
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
      850: '#1a1a1a',
      900: '#111111',
      950: '#0a0a0a',
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
        backgroundColor: tokens.colors.background,
        color: tokens.colors.textBody,
        fontFamily: tokens.typography.fontFamily,
        scrollBehavior: 'smooth',
      },
      '::selection': {
        backgroundColor: tokens.colors.accent,
        color: '#fff',
      },
      '.glass': {
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        backgroundColor: tokens.colors.glass.background,
        border: `1px solid ${tokens.colors.glass.border}`,
        boxShadow: tokens.colors.glass.shadow,
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
          bg: tokens.colors.primary,
          color: tokens.colors.primaryForeground,
          _hover: { bg: 'rgba(255,255,255,0.88)', transform: 'translateY(-1px)' },
          _active: { bg: 'rgba(255,255,255,0.75)', transform: 'translateY(0)' },
        },
        secondary: {
          bg: 'transparent',
          color: tokens.colors.primary,
          border: `1px solid rgba(255,255,255,0.2)`,
          _hover: { borderColor: 'rgba(255,255,255,0.5)', bg: 'rgba(255,255,255,0.04)' },
        },
        ghost: {
          bg: 'transparent',
          color: tokens.colors.textBody,
          _hover: { color: tokens.colors.primary, bg: 'transparent' },
        },
        accent: {
          bg: tokens.colors.accent,
          color: '#fff',
          _hover: { bg: tokens.colors.accentHover, transform: 'translateY(-1px)' },
          _active: { bg: tokens.colors.accentHover, transform: 'translateY(0)' },
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
            bg: tokens.colors.surface,
            border: `1px solid ${tokens.colors.border}`,
            borderRadius: tokens.radii.full,
            color: tokens.colors.primary,
            _hover: { bg: tokens.colors.surfaceElevated, borderColor: 'rgba(255,255,255,0.15)' },
            _focus: { bg: tokens.colors.surfaceElevated, borderColor: tokens.colors.accent, boxShadow: 'none' },
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
          bg: tokens.colors.surface,
          border: `1px solid ${tokens.colors.border}`,
          borderRadius: tokens.radii.xl,
        },
        header: { color: tokens.colors.textHeading },
        closeButton: { color: tokens.colors.textBody },
      },
    },
    Accordion: {
      baseStyle: {
        container: { border: 'none', borderBottom: `1px solid ${tokens.colors.border}` },
        button: {
          color: tokens.colors.textHeading,
          fontWeight: tokens.typography.fontWeights.medium,
          _hover: { bg: 'transparent', color: tokens.colors.primary },
          _focus: { boxShadow: 'none' },
          py: 5,
        },
        panel: { color: tokens.colors.textBody, pb: 5 },
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
