'use client';

import type { ReactNode } from 'react';
import { Box, Container, type BoxProps } from '@chakra-ui/react';
import { sectionPy, sectionPx, containerMaxW } from '@/lib/sectionTokens';

interface SectionContainerProps extends Omit<BoxProps, 'children'> {
  children: ReactNode;
  /** Überschreibt Standard-sectionPy (z. B. kompakter) */
  py?: BoxProps['py'];
}

/**
 * Einheitliche Section-Hülle: vertikales Padding + horizontales Padding + maxWidth aus Tokens.
 */
export default function SectionContainer({ children, py, ...rest }: SectionContainerProps) {
  return (
    <Box as="section" py={py ?? sectionPy} w="full" bg="transparent" {...rest}>
      <Container maxW={containerMaxW} px={sectionPx} w="full">
        {children}
      </Container>
    </Box>
  );
}
