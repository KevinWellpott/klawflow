'use client';

import { Box, Container, Grid, GridItem, Heading, Text, VStack, HStack, Icon } from '@chakra-ui/react';
import { WarningIcon, CheckCircleIcon } from '@chakra-ui/icons';

const problems = [
  'Du verlierst Umsatz, weil Bestandskunden nicht reaktiviert werden.',
  'Manuelle Follow-ups kosten dein Team Stunden pro Woche.',
  'Du weißt nicht, welche Kunden gerade kaufbereit sind.',
  'Deine CRM-Daten liegen brach – ohne echte Nutzung.',
];

const solutions = [
  'Automatische Reaktivierungs-Flows starten im richtigen Moment.',
  'KI-Copywriting schreibt personalisierte Nachrichten auf Knopfdruck.',
  'Next-Best-Action zeigt dir, wer jetzt kaufbereit ist.',
  'Klawflow macht deine CRM-Daten zu echtem Umsatz.',
];

export default function ProblemSolution() {
  return (
    <Box as="section" py={{ base: '4rem', md: '6rem', lg: '8rem' }}>
      <Container maxW="1200px" px={{ base: 5, md: 8 }}>
        <VStack spacing={16}>
          {/* Header */}
          <VStack spacing={4} textAlign="center" maxW="640px" mx="auto">
            <Text fontSize="xs" color="#7C6FFF" fontWeight="semibold" letterSpacing="0.1em" textTransform="uppercase">
              Das Problem
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              color="white"
              fontWeight="bold"
              letterSpacing="-0.02em"
              lineHeight={1.15}
            >
              Dein größtes Wachstumspotenzial liegt bereits in deiner Datenbank.
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.400" lineHeight="relaxed">
              Die meisten Unternehmen fokussieren sich auf Neukundengewinnung – dabei schlummert der
              echte ROI im Bestand. Klawflow holt ihn raus.
            </Text>
          </VStack>

          {/* Grid */}
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8} w="full">
            {/* Problems */}
            <GridItem>
              <Box
                bg="rgba(239,68,68,0.04)"
                border="1px solid rgba(239,68,68,0.12)"
                borderRadius="2xl"
                p={{ base: 6, md: 8 }}
              >
                <Heading as="h3" fontSize="md" color="red.400" mb={6} fontWeight="semibold">
                  Ohne Klawflow
                </Heading>
                <VStack spacing={4} align="flex-start">
                  {problems.map((p, i) => (
                    <HStack key={i} align="flex-start" spacing={3}>
                      <Icon as={WarningIcon} color="red.500" mt="3px" flexShrink={0} boxSize={4} />
                      <Text fontSize="sm" color="gray.400" lineHeight="relaxed">
                        {p}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            </GridItem>

            {/* Solutions */}
            <GridItem>
              <Box
                bg="rgba(124,111,255,0.04)"
                border="1px solid rgba(124,111,255,0.15)"
                borderRadius="2xl"
                p={{ base: 6, md: 8 }}
              >
                <Heading as="h3" fontSize="md" color="#7C6FFF" mb={6} fontWeight="semibold">
                  Mit Klawflow
                </Heading>
                <VStack spacing={4} align="flex-start">
                  {solutions.map((s, i) => (
                    <HStack key={i} align="flex-start" spacing={3}>
                      <Icon as={CheckCircleIcon} color="green.400" mt="3px" flexShrink={0} boxSize={4} />
                      <Text fontSize="sm" color="gray.300" lineHeight="relaxed">
                        {s}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            </GridItem>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}
