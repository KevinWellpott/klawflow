'use client';

import { Box, Container, Heading, Text, VStack, HStack, useDisclosure } from '@chakra-ui/react';
import EmailForm from '../ui/EmailForm';
import Button from '../ui/Button';
import CalendlyModal from '../ui/CalendlyModal';

export default function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="section"
      minH="100vh"
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
      py={{ base: 24, md: 0 }}
    >
      {/* Subtle radial glow */}
      <Box
        position="absolute"
        top="20%"
        left="50%"
        transform="translateX(-50%)"
        w={{ base: '600px', md: '900px' }}
        h={{ base: '600px', md: '900px' }}
        bg="radial-gradient(circle, rgba(124,111,255,0.08) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="1200px" px={{ base: 5, md: 8 }} position="relative" zIndex={1}>
        <VStack spacing={{ base: 6, md: 8 }} align="center" textAlign="center" maxW="820px" mx="auto">
          {/* Badge */}
          <HStack
            spacing={2}
            px={4}
            py={2}
            bg="rgba(124,111,255,0.1)"
            border="1px solid rgba(124,111,255,0.2)"
            borderRadius="full"
          >
            <Box w={2} h={2} bg="#7C6FFF" borderRadius="full" />
            <Text fontSize="xs" color="gray.300" fontWeight="medium" letterSpacing="0.05em">
              JETZT IN DER EARLY-ACCESS-PHASE
            </Text>
          </HStack>

          {/* Headline */}
          <Heading
            as="h1"
            fontSize={{ base: '2.8rem', md: '4rem', lg: '5rem' }}
            fontWeight="extrabold"
            color="white"
            lineHeight={1.05}
            letterSpacing="-0.03em"
          >
            Mehr Revenue aus{' '}
            <Box as="span" color="#7C6FFF">
              deinen
            </Box>{' '}
            bestehenden Kunden.
          </Heading>

          {/* Subtext */}
          <Text
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            color="gray.400"
            maxW="600px"
            lineHeight="relaxed"
          >
            Klawflow automatisiert dein Upselling & Cross-Selling mit KI-gestützten Flow-Templates –
            ohne Agentur, ohne Technik-Stress. Einfach aktivieren, Ergebnisse sehen.
          </Text>

          {/* Email Form */}
          <Box w="full" display="flex" justifyContent="center">
            <EmailForm
              placeholder="deine@email.de"
              buttonLabel="Früh­zugang sichern"
            />
          </Box>

          {/* Secondary CTA */}
          <Button variant="secondary" size="md" onClick={onOpen}>
            Kostenlose Strategie-Session buchen
          </Button>

          {/* Social proof */}
          <Text fontSize="xs" color="gray.600">
            Bereits{' '}
            <Box as="span" color="gray.400" fontWeight="semibold">
              120+ Unternehmen
            </Box>{' '}
            auf der Warteliste · Keine Kreditkarte nötig
          </Text>
        </VStack>
      </Container>

      <CalendlyModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
