/**
 * Einheitliche Section-Abstände & Container – aus design-tokens.json.
 * Import: import { sectionPy, sectionPx, containerMaxW } from '@/lib/sectionTokens';
 */
import tokens from '@/styles/design-tokens.json';

export const sectionPy = tokens.section.py;
export const sectionPx = tokens.section.px;
export const sectionPyHero = tokens.section.pyHero;
export const containerMaxW = tokens.spacing.container;

/** Abstand Titel ↔ Untertitel in Section-Headern (Chakra-Spacing-Skala) */
export const sectionGapHeader = { base: 2, md: 3 } as const;

/** Abstand zwischen Header-Block und Hauptinhalt (Cards, Tabellen, …) */
export const sectionGapContent = { base: 6, md: 8 } as const;

/**
 * Section-H2 wie Referenz (Framer/Enterprise): ~48–56px Desktop, tight tracking.
 * Spreads auf Chakra <Heading as="h2" />
 */
export const sectionHeadingProps = {
  fontSize: { base: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
  fontWeight: 'bold' as const,
  letterSpacing: '-0.03em',
  lineHeight: 1.05,
  color: 'white',
  textAlign: 'left' as const,
};

/** Lead unter Section-H2: ~14–16px, Zeilenhöhe 1.5 */
export const sectionLeadProps = {
  fontSize: { base: 'sm', md: 'md' },
  color: '#A1A1AA',
  lineHeight: 1.5,
  textAlign: 'left' as const,
  maxW: '42rem',
};

/** Hero H1: eine Stufe größer als Section-H2 */
export const heroHeadingProps = {
  fontSize: { base: '2.625rem', md: '3.5rem', lg: '4.25rem' },
  fontWeight: 'extrabold' as const,
  letterSpacing: '-0.035em',
  lineHeight: 1.05,
};

