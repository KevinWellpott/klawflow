'use client';

import { Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import { FiLink, FiGrid, FiTrendingUp } from 'react-icons/fi';
import FeatureCard from '../ui/FeatureCard';
import SectionContainer from '../ui/SectionContainer';
import { sectionGapContent, sectionGapHeader, sectionHeadingProps, sectionLeadProps } from '@/lib/sectionTokens';

const STEPS = [
  {
    icon: <FiLink size={22} color="#D1FE49" />,
    title: 'Klaviyo verbinden',
    description: '1-Klick-Connect mit OAuth – keine API-Key-Fummelei, keine Doku-Marathon.',
  },
  {
    icon: <FiGrid size={22} color="#D1FE49" />,
    title: 'Flow-Templates aktivieren',
    description: 'Welcome, Abandoned Cart, Win-Back – mit einem Klick live, angepasst auf deine Marke.',
  },
  {
    icon: <FiTrendingUp size={22} color="#D1FE49" />,
    title: 'Umsatz steigt',
    description: 'Automatische Optimierung plus Next-Best-Action-Empfehlungen – du siehst, was wirkt.',
  },
];

export default function HowItWorks() {
  return (
    <SectionContainer minH={{ base: '100dvh', lg: 'auto' }} display="flex" alignItems="center" w="full">
      <VStack spacing={sectionGapContent} align="flex-start" w="full">
        <VStack spacing={sectionGapHeader} align="flex-start" w="full" maxW="48rem">
          <Heading as="h2" {...sectionHeadingProps}>
            So einfach geht&apos;s
          </Heading>
          <Text {...sectionLeadProps}>
            Von Verbindung bis live in Minuten – nicht in Wochen.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }} w="full">
          {STEPS.map((s) => (
            <FeatureCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
          ))}
        </SimpleGrid>
      </VStack>
    </SectionContainer>
  );
}
