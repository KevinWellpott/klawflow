'use client';

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { containerMaxW, sectionPx } from '@/lib/sectionTokens';

export default function AGBContent() {
  return (
    <Box as="main" py={{ base: '3rem', sm: '4rem', md: '6rem' }}>
      <Container maxW={containerMaxW} px={sectionPx} w="full">
        <Box maxW="760px" mx="auto" w="full">
        <VStack align="flex-start" spacing={8}>
          <Heading as="h1" fontSize={{ base: '2xl', md: '3xl' }} color="white" fontWeight="bold">
            Allgemeine Geschäftsbedingungen
          </Heading>

          <VStack align="flex-start" spacing={4} w="full">
            <Heading as="h2" fontSize="lg" color="white" fontWeight="semibold">
              § 1 Geltungsbereich
            </Heading>
            <Text color="gray.400" fontSize="sm" lineHeight="relaxed">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen Klawflow
              (Platzhalter) und seinen Kunden.
            </Text>
          </VStack>

          <VStack align="flex-start" spacing={4} w="full">
            <Heading as="h2" fontSize="lg" color="white" fontWeight="semibold">
              § 2 Leistungen
            </Heading>
            <Text color="gray.400" fontSize="sm" lineHeight="relaxed">
              Klawflow stellt eine SaaS-Plattform zur Automatisierung von Upselling- und
              Cross-Selling-Maßnahmen bereit.
            </Text>
          </VStack>

          <VStack align="flex-start" spacing={4} w="full">
            <Heading as="h2" fontSize="lg" color="white" fontWeight="semibold">
              § 3 Kündigung
            </Heading>
            <Text color="gray.400" fontSize="sm" lineHeight="relaxed">
              Der Vertrag kann monatlich zum Monatsende gekündigt werden per E-Mail an
              hallo@klawflow.de (Platzhalter).
            </Text>
          </VStack>

          <Box
            bg="rgba(255,255,255,0.03)"
            border="1px solid rgba(255,255,255,0.07)"
            borderRadius="xl"
            p={4}
          >
            <Text color="gray.500" fontSize="xs">
              Platzhalter – bitte vor dem Launch rechtskonforme AGB mit einem Anwalt erstellen.
            </Text>
          </Box>
        </VStack>
        </Box>
      </Container>
    </Box>
  );
}
