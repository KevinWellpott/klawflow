'use client';

import { Box, Container, Heading, Text, VStack, HStack, Icon, useDisclosure } from '@chakra-ui/react';
import { CheckIcon, PhoneIcon } from '@chakra-ui/icons';
import EmailForm from '../ui/EmailForm';
import Button from '../ui/Button';
import CalendlyModal from '../ui/CalendlyModal';

const benefits = [
  'Keine Kreditkarte nötig',
  'Kostenloser Early Access',
  'Setup in unter 30 Minuten',
];

export default function FinalCTA() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="section"
      py={{ base: '4rem', md: '6rem', lg: '8rem' }}
      bg="rgba(124,111,255,0.04)"
      borderTop="1px solid rgba(124,111,255,0.1)"
      borderBottom="1px solid rgba(124,111,255,0.1)"
      position="relative"
      overflow="hidden"
    >
      {/* Background glow */}
      <Box
        position="absolute"
        bottom="-200px"
        left="50%"
        transform="translateX(-50%)"
        w="800px"
        h="400px"
        bg="radial-gradient(ellipse, rgba(124,111,255,0.1) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="1200px" px={{ base: 5, md: 8 }} position="relative" zIndex={1}>
        <VStack spacing={{ base: 8, md: 10 }} textAlign="center" maxW="680px" mx="auto">
          <VStack spacing={4}>
            <Text fontSize="xs" color="#7C6FFF" fontWeight="semibold" letterSpacing="0.1em" textTransform="uppercase">
              Jetzt starten
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              color="white"
              fontWeight="extrabold"
              letterSpacing="-0.02em"
              lineHeight={1.1}
            >
              Bereit, deinen Bestand in Umsatz zu verwandeln?
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.400" lineHeight="relaxed">
              Trag dich jetzt ein und sichere dir kostenlosen Early Access zu Klawflow.
              Nur für eine begrenzte Anzahl an Unternehmen verfügbar.
            </Text>
          </VStack>

          {/* Benefits */}
          <HStack spacing={6} flexWrap="wrap" justify="center">
            {benefits.map((b) => (
              <HStack key={b} spacing={2}>
                <Icon as={CheckIcon} color="green.400" boxSize={3} />
                <Text fontSize="sm" color="gray.400">{b}</Text>
              </HStack>
            ))}
          </HStack>

          {/* Email Form */}
          <Box w="full" display="flex" justifyContent="center">
            <EmailForm
              placeholder="deine@email.de"
              buttonLabel="Early Access sichern"
              successMessage="Perfekt! Du bist auf der Early-Access-Liste."
            />
          </Box>

          {/* Call CTA */}
          <Button
            variant="secondary"
            size="md"
            leftIcon={<Icon as={PhoneIcon} boxSize={3} />}
            onClick={onOpen}
          >
            Lieber direkt sprechen? Session buchen
          </Button>
        </VStack>
      </Container>

      <CalendlyModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
