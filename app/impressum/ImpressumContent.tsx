'use client';

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';

export default function ImpressumContent() {
  return (
    <Box as="main" py={{ base: '4rem', md: '6rem' }}>
      <Container maxW="760px" px={{ base: 5, md: 8 }}>
        <VStack align="flex-start" spacing={8}>
          <Heading as="h1" fontSize={{ base: '2xl', md: '3xl' }} color="white" fontWeight="bold">
            Impressum
          </Heading>

          <VStack align="flex-start" spacing={4} w="full">
            <Heading as="h2" fontSize="lg" color="white" fontWeight="semibold">
              Angaben gemäß § 5 TMG
            </Heading>
            <VStack align="flex-start" spacing={1}>
              <Text color="gray.400" fontSize="sm">Klawflow GmbH (Platzhalter)</Text>
              <Text color="gray.400" fontSize="sm">Musterstraße 1</Text>
              <Text color="gray.400" fontSize="sm">12345 Musterstadt</Text>
              <Text color="gray.400" fontSize="sm">Deutschland</Text>
            </VStack>
          </VStack>

          <VStack align="flex-start" spacing={4} w="full">
            <Heading as="h2" fontSize="lg" color="white" fontWeight="semibold">
              Kontakt
            </Heading>
            <VStack align="flex-start" spacing={1}>
              <Text color="gray.400" fontSize="sm">E-Mail: hallo@klawflow.de (Platzhalter)</Text>
              <Text color="gray.400" fontSize="sm">Telefon: +49 000 0000000 (Platzhalter)</Text>
            </VStack>
          </VStack>

          <VStack align="flex-start" spacing={4} w="full">
            <Heading as="h2" fontSize="lg" color="white" fontWeight="semibold">
              Verantwortlich für den Inhalt
            </Heading>
            <Text color="gray.400" fontSize="sm">
              Max Mustermann (Platzhalter) – Adresse wie oben
            </Text>
          </VStack>

          <Box
            bg="rgba(255,255,255,0.03)"
            border="1px solid rgba(255,255,255,0.07)"
            borderRadius="xl"
            p={4}
          >
            <Text color="gray.500" fontSize="xs">
              Platzhalter – bitte vor dem Launch durch reale Unternehmensdaten ersetzen.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
