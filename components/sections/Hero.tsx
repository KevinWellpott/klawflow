'use client';

import { Box, Container, Heading, Text, VStack, HStack, useDisclosure } from '@chakra-ui/react';
import EmailForm from '../ui/EmailForm';
import Button from '../ui/Button';
import CalendlyModal from '../ui/CalendlyModal';
import { sectionPx, containerMaxW, sectionPyHero, heroHeadingProps } from '@/lib/sectionTokens';

export default function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="section"
      minH={{ base: 'calc(100dvh - 72px)', md: 'calc(100dvh - 88px)' }}
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
      py={sectionPyHero}
      bg="transparent"
    >
      <Container maxW={containerMaxW} px={sectionPx} position="relative" zIndex={1}>
        <VStack spacing={{ base: 5, md: 7 }} align="center" textAlign="center" maxW="880px" mx="auto">

          <HStack spacing={2} px={4} py="7px" className="badge-gradient">
            <Box
              w="6px"
              h="6px"
              bg="#D1FE49"
              borderRadius="full"
              boxShadow="0 0 8px rgba(209,254,73,0.8)"
            />
            <Text fontSize="xs" color="rgba(255,255,255,0.65)" fontWeight="medium" letterSpacing="0.06em">
              WARTELISTE · KLAVIYO-FOKUS
            </Text>
          </HStack>

          <Heading as="h1" {...heroHeadingProps} className="gradient-text">
            Hol 20% mehr Umsatz aus Klaviyo –{' '}
            <Box
              as="span"
              sx={{
                background: 'linear-gradient(135deg, #E8FF9A 0%, #D1FE49 50%, #9FD632 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              ohne Agentur
            </Box>
          </Heading>

          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color="#A1A1AA"
            maxW="640px"
            lineHeight={1.5}
            letterSpacing="-0.01em"
          >
            Automatisierte Flows, smarte Segmentierung und ein Dashboard, das dir zeigt, wo Geld liegt.
            Alles ohne teure Experten – für E-Commerce-Brands mit 60k–5M € Jahresumsatz, die Klaviyo schon zahlen,
            aber nur einen Bruchteil ausschöpfen.
          </Text>

          <Box id="waitlist" w="full" display="flex" flexDirection="column" alignItems="center" gap={3}>
            <EmailForm placeholder="deine@firma.de" buttonLabel="Auf die Warteliste" />
            <Text fontSize="xs" color="#71717A">
              Keine Kreditkarte. Kündigung jederzeit.
            </Text>
          </Box>

          <Button variant="secondary" size="md" onClick={onOpen}>
            Kostenlose Strategie buchen
          </Button>

          <HStack spacing={3} flexWrap="wrap" justify="center">
            <Text fontSize="xs" color="#D1FE49" fontWeight="semibold" letterSpacing="0.04em">
              342 warten bereits
            </Text>
            <Text fontSize="xs" color="#5C5C70">
              ·
            </Text>
            <Text fontSize="xs" color="#71717A">
              Kein Spam · Nur Launch-Updates
            </Text>
          </HStack>
        </VStack>
      </Container>

      <CalendlyModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
