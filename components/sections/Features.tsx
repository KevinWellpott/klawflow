'use client';

import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import FeatureCard from '../ui/FeatureCard';

const features = [
  {
    icon: '📊',
    title: 'Live-Dashboard',
    description:
      'Sieh auf einen Blick, welche Flows aktiv sind, welche Kunden reagieren und wie hoch dein generierter Zusatzumsatz ist – in Echtzeit.',
  },
  {
    icon: '🔄',
    title: 'Flow-Templates',
    description:
      'Vorgefertigte, bewährte Upselling- und Cross-Selling-Sequenzen für verschiedene Branchen. Aktivieren, anpassen, fertig.',
  },
  {
    icon: '✍️',
    title: 'AI Copywriting',
    description:
      'KI schreibt personalisierte E-Mails und Nachrichten basierend auf dem Kaufverhalten deiner Kunden – kein Texter nötig.',
  },
  {
    icon: '🎯',
    title: 'Next-Best-Action',
    description:
      'Klawflow analysiert deine Kundendaten und zeigt dir automatisch, wer jetzt die höchste Kaufwahrscheinlichkeit hat.',
  },
];

export default function Features() {
  return (
    <Box
      as="section"
      py={{ base: '4rem', md: '6rem', lg: '8rem' }}
      bg="rgba(255,255,255,0.01)"
      borderTop="1px solid rgba(255,255,255,0.05)"
      borderBottom="1px solid rgba(255,255,255,0.05)"
    >
      <Container maxW="1200px" px={{ base: 5, md: 8 }}>
        <VStack spacing={{ base: 12, md: 16 }}>
          {/* Header */}
          <VStack spacing={4} textAlign="center" maxW="600px" mx="auto">
            <Text fontSize="xs" color="#7C6FFF" fontWeight="semibold" letterSpacing="0.1em" textTransform="uppercase">
              Features
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              color="white"
              fontWeight="bold"
              letterSpacing="-0.02em"
              lineHeight={1.15}
            >
              Alles, was du für mehr Revenue brauchst
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.400" lineHeight="relaxed">
              Klawflow bündelt alle Werkzeuge für systematisches Bestandskunden-Wachstum in einer Plattform.
            </Text>
          </VStack>

          {/* Feature Grid */}
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
            gap={6}
            w="full"
          >
            {features.map((feature, i) => (
              <FeatureCard
                key={i}
                icon={<span style={{ fontSize: '1.25rem' }}>{feature.icon}</span>}
                title={feature.title}
                description={feature.description}
                glass={i === 0}
              />
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}
