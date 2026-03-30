'use client';

import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import FeatureCard from '../ui/FeatureCard';

const steps = [
  {
    icon: '🔗',
    step: '01',
    title: 'Account verbinden',
    description:
      'Verbinde dein CRM oder deine bestehenden Kundendaten in wenigen Minuten. Keine technischen Vorkenntnisse nötig – wir führen dich Schritt für Schritt.',
  },
  {
    icon: '⚡',
    step: '02',
    title: 'Flow-Templates aktivieren',
    description:
      'Wähle aus bewährten Upselling- und Cross-Selling-Flows. KI passt Texte und Timing automatisch an deine Kunden und Branche an.',
  },
  {
    icon: '📈',
    step: '03',
    title: 'Revenue steigt automatisch',
    description:
      'Deine Flows laufen im Hintergrund. Du siehst im Dashboard, welche Kunden reagieren, und optimierst mit einem Klick.',
  },
];

export default function HowItWorks() {
  return (
    <Box as="section" py={{ base: '4rem', md: '6rem', lg: '8rem' }}>
      <Container maxW="1200px" px={{ base: 5, md: 8 }}>
        <VStack spacing={{ base: 12, md: 16 }}>
          {/* Header */}
          <VStack spacing={4} textAlign="center" maxW="600px" mx="auto">
            <Text fontSize="xs" color="#7C6FFF" fontWeight="semibold" letterSpacing="0.1em" textTransform="uppercase">
              So funktioniert es
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              color="white"
              fontWeight="bold"
              letterSpacing="-0.02em"
              lineHeight={1.15}
            >
              In 3 Schritten zu mehr Umsatz
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.400" lineHeight="relaxed">
              Kein kompliziertes Setup. Kein Entwickler nötig. Einfach starten.
            </Text>
          </VStack>

          {/* Steps */}
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
            gap={6}
            w="full"
            position="relative"
          >
            {steps.map((step, i) => (
              <Box key={i} position="relative">
                <Box
                  position="absolute"
                  top={6}
                  right={6}
                  fontSize="3xl"
                  fontWeight="extrabold"
                  color="rgba(124,111,255,0.15)"
                  lineHeight={1}
                  zIndex={0}
                >
                  {step.step}
                </Box>
                <FeatureCard
                  icon={<span style={{ fontSize: '1.25rem' }}>{step.icon}</span>}
                  title={step.title}
                  description={step.description}
                />
              </Box>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}
