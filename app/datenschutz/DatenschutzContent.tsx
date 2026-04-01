'use client';

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { containerMaxW, sectionPx } from '@/lib/sectionTokens';

export default function DatenschutzContent() {
  return (
    <Box as="main" py={{ base: '3rem', sm: '4rem', md: '6rem' }}>
      <Container maxW={containerMaxW} px={sectionPx} w="full">
        <Box maxW="760px" mx="auto" w="full">
        <VStack align="flex-start" spacing={8}>
          <Heading as="h1" fontSize={{ base: '2xl', md: '3xl' }} color="white" fontWeight="bold">
            Datenschutzerklärung
          </Heading>

          <VStack align="flex-start" spacing={4} w="full">
            <Heading as="h2" fontSize="lg" color="white" fontWeight="semibold">
              1. Verantwortlicher
            </Heading>
            <Text color="gray.400" fontSize="sm" lineHeight="relaxed">
              Verantwortlicher im Sinne der DSGVO: Klawflow GmbH (Platzhalter), Musterstraße 1,
              12345 Musterstadt. E-Mail: datenschutz@klawflow.de (Platzhalter).
            </Text>
          </VStack>

          <VStack align="flex-start" spacing={4} w="full">
            <Heading as="h2" fontSize="lg" color="white" fontWeight="semibold">
              2. Erhebung und Verarbeitung von Daten
            </Heading>
            <Text color="gray.400" fontSize="sm" lineHeight="relaxed">
              Beim Besuch dieser Website werden automatisch Informationen in Server-Log-Dateien
              gespeichert. Wenn du dich für unsere Warteliste einträgst, verarbeiten wir deine
              E-Mail-Adresse ausschließlich zur Kontaktaufnahme bezüglich Klawflow.
            </Text>
          </VStack>

          <VStack align="flex-start" spacing={4} w="full">
            <Heading as="h2" fontSize="lg" color="white" fontWeight="semibold">
              3. Deine Rechte
            </Heading>
            <Text color="gray.400" fontSize="sm" lineHeight="relaxed">
              Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Datenübertragbarkeit und Widerspruch. Wende dich an
              datenschutz@klawflow.de (Platzhalter).
            </Text>
          </VStack>

          <VStack align="flex-start" spacing={4} w="full">
            <Heading as="h2" fontSize="lg" color="white" fontWeight="semibold">
              4. Cookies
            </Heading>
            <Text color="gray.400" fontSize="sm" lineHeight="relaxed">
              Diese Website verwendet ausschließlich technisch notwendige Cookies.
            </Text>
          </VStack>

          <Box
            bg="rgba(255,255,255,0.03)"
            border="1px solid rgba(255,255,255,0.07)"
            borderRadius="xl"
            p={4}
          >
            <Text color="gray.500" fontSize="xs">
              Platzhalter – bitte vor dem Launch eine rechtskonforme Datenschutzerklärung erstellen.
            </Text>
          </Box>
        </VStack>
        </Box>
      </Container>
    </Box>
  );
}
