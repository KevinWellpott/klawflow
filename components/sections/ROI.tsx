'use client';

import { Box, Container, Grid, Heading, Text, VStack, HStack, Stat, StatNumber, StatHelpText } from '@chakra-ui/react';

const stats = [
  { value: '+34%', label: 'Ø Umsatzsteigerung', sub: 'bei Bestandskunden im ersten Quartal' },
  { value: '3h', label: 'Zeitersparnis/Woche', sub: 'durch automatisierte Follow-ups' },
  { value: '8×', label: 'Höherer ROI', sub: 'vs. klassische Neukundenakquise' },
];

const testimonials = [
  {
    quote:
      '"Mit Klawflow haben wir in den ersten 6 Wochen 18.000 € Zusatzumsatz aus unserem Bestand generiert – ohne extra Aufwand."',
    name: 'Markus T.',
    role: 'Geschäftsführer, E-Commerce',
  },
  {
    quote:
      '"Die Flow-Templates waren in 20 Minuten eingerichtet. Unsere Reaktivierungsquote hat sich mehr als verdoppelt."',
    name: 'Sarah K.',
    role: 'Head of Sales, SaaS-Startup',
  },
];

export default function ROI() {
  return (
    <Box as="section" py={{ base: '4rem', md: '6rem', lg: '8rem' }}>
      <Container maxW="1200px" px={{ base: 5, md: 8 }}>
        <VStack spacing={{ base: 14, md: 20 }}>
          {/* Header */}
          <VStack spacing={4} textAlign="center" maxW="600px" mx="auto">
            <Text fontSize="xs" color="#7C6FFF" fontWeight="semibold" letterSpacing="0.1em" textTransform="uppercase">
              Ergebnisse
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              color="white"
              fontWeight="bold"
              letterSpacing="-0.02em"
              lineHeight={1.15}
            >
              Zahlen, die für sich sprechen
            </Heading>
          </VStack>

          {/* Stats */}
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6} w="full">
            {stats.map((stat, i) => (
              <Box
                key={i}
                bg="rgba(255,255,255,0.02)"
                border="1px solid rgba(255,255,255,0.07)"
                borderRadius="2xl"
                p={{ base: 6, md: 8 }}
                textAlign="center"
              >
                <Stat>
                  <StatNumber
                    fontSize={{ base: '3xl', md: '4xl' }}
                    fontWeight="extrabold"
                    color="#7C6FFF"
                    letterSpacing="-0.02em"
                  >
                    {stat.value}
                  </StatNumber>
                  <Text color="white" fontWeight="semibold" fontSize="md" mt={2}>
                    {stat.label}
                  </Text>
                  <StatHelpText color="gray.500" fontSize="xs" mt={1}>
                    {stat.sub}
                  </StatHelpText>
                </Stat>
              </Box>
            ))}
          </Grid>

          {/* Testimonials */}
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6} w="full">
            {testimonials.map((t, i) => (
              <Box
                key={i}
                bg="rgba(255,255,255,0.02)"
                border="1px solid rgba(255,255,255,0.07)"
                borderRadius="2xl"
                p={{ base: 6, md: 8 }}
              >
                <VStack align="flex-start" spacing={4}>
                  <HStack spacing={1}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Box key={j} color="#7C6FFF" fontSize="sm">★</Box>
                    ))}
                  </HStack>
                  <Text fontSize="sm" color="gray.300" lineHeight="relaxed" fontStyle="italic">
                    {t.quote}
                  </Text>
                  <Box>
                    <Text fontSize="sm" color="white" fontWeight="semibold">{t.name}</Text>
                    <Text fontSize="xs" color="gray.500">{t.role}</Text>
                  </Box>
                </VStack>
              </Box>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}
