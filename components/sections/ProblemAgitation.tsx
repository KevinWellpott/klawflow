'use client';

import { Heading, Text, VStack, Grid, GridItem } from '@chakra-ui/react';
import SectionContainer from '../ui/SectionContainer';
import KlaviyoUsageGapVisual from '../ui/KlaviyoUsageGapVisual';
import { sectionGapHeader, sectionHeadingProps, sectionLeadProps } from '@/lib/sectionTokens';

export default function ProblemAgitation() {
  return (
    <SectionContainer
      minH={{ base: '100dvh', lg: 'auto' }}
      display="flex"
      alignItems="center"
      w="full"
    >
      <Grid
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        gap={{ base: 6, md: 8, lg: 10 }}
        alignItems="center"
        w="full"
      >
        <GridItem>
          <VStack align="flex-start" spacing={sectionGapHeader}>
            <Heading as="h2" {...sectionHeadingProps}>
              Du zahlst für Klaviyo – nutzt aber nur 20%
            </Heading>
            <Text {...sectionLeadProps} lineHeight={{ base: 1.5, md: 1.55 }}>
              Rund 30% deiner Kunden kaufen nie wieder. Unoptimierte Flows, fehlende Segmentierung und kein klarer
              Überblick über CLV &amp; Churn kosten dich monatlich Tausende – obwohl die Daten schon in Klaviyo liegen.
            </Text>
          </VStack>
        </GridItem>
        <GridItem>
          <KlaviyoUsageGapVisual />
        </GridItem>
      </Grid>
    </SectionContainer>
  );
}
