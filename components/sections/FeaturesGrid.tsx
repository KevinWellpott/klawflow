'use client';

import { Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react';
import BentoFeatureCard from '../ui/features/BentoFeatureCard';
import { DashboardChartMock, FlowVariantsMock, HealthGaugesMock } from '../ui/features/BentoFeatureVisuals';
import SectionContainer from '../ui/SectionContainer';
import { sectionGapContent, sectionGapHeader, sectionHeadingProps, sectionLeadProps } from '@/lib/sectionTokens';

const BENTO_ITEMS = [
  {
    outcome: 'Sieh alle KPIs auf einen Blick',
    title: 'Revenue-Dashboard',
    description:
      'Revenue, CLV, Repurchase Rate, Deliverability Health – eine Ansicht statt zehn Tabs.',
    visual: <DashboardChartMock />,
  },
  {
    outcome: 'Steigere deine Wiederholungskäufe um 30%',
    title: 'Win-Back & Segmentierung',
    description:
      'Automatisierte Win-Back-Flows plus klare Segmentierungs-Empfehlungen – basierend auf Kaufverhalten und CLV.',
    visual: <FlowVariantsMock />,
  },
  {
    outcome: 'Spare 10+ Stunden pro Woche',
    title: 'Next-Best-Action Engine',
    description:
      'Priorisierte To-dos: Was du als Nächstes in Klaviyo anpacken solltest – ohne Rätselraten.',
    visual: <HealthGaugesMock />,
  },
] as const;

export default function FeaturesGrid() {
  const [primary, ...secondary] = BENTO_ITEMS;

  return (
    <SectionContainer>
      <VStack spacing={sectionGapContent} align="flex-start" w="full">
        <VStack spacing={sectionGapHeader} align="flex-start" w="full" maxW="48rem">
          <Heading as="h2" {...sectionHeadingProps}>
            Was du mit uns erreichst
          </Heading>
          <Text {...sectionLeadProps}>
            Outcome-first: messbarer Impact statt Feature-Sammeln.
          </Text>
        </VStack>

        <Grid
          w="full"
          maxW="100%"
          overflow="hidden"
          templateColumns={{ base: '1fr', lg: 'repeat(2, minmax(0, 1fr))' }}
          templateRows={{ lg: 'repeat(2, minmax(0, 1fr))' }}
          gap={{ base: 5, sm: 6, md: 8 }}
          alignItems="stretch"
        >
          <GridItem rowSpan={{ base: 1, lg: 2 }} minH={{ lg: 0 }}>
            <BentoFeatureCard
              outcome={primary.outcome}
              title={primary.title}
              description={primary.description}
              visual={primary.visual}
            />
          </GridItem>
          {secondary.map((item) => (
            <GridItem key={item.title} minH={{ lg: 0 }}>
              <BentoFeatureCard
                outcome={item.outcome}
                title={item.title}
                description={item.description}
                visual={item.visual}
              />
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </SectionContainer>
  );
}
