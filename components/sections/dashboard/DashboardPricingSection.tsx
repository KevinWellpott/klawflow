'use client';

import { useState } from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Grid } from '@chakra-ui/react';
import { motion, useReducedMotion } from 'framer-motion';
import PricingCard from '../../ui/dashboard/PricingCard';
import { containerMaxW, sectionPx } from '@/lib/sectionTokens';

export default function DashboardPricingSection() {
  const [yearly, setYearly] = useState(false);
  const reduced = useReducedMotion();

  return (
    <Box
      as="section"
      py={{ base: '5rem', md: '7rem', lg: '9rem' }}
      position="relative"
      overflow="hidden"
      bg="transparent"
    >
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        w="900px"
        h="400px"
        bg="radial-gradient(ellipse, rgba(209,254,73,0.08) 0%, transparent 65%)"
        pointerEvents="none"
      />

      <Container maxW={containerMaxW} px={sectionPx} w="full" position="relative" zIndex={1}>
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <VStack spacing={{ base: 12, md: 16 }}>
            <VStack spacing={5} textAlign="center" maxW="560px" mx="auto">
              <Text
                fontSize="xs"
                color="rgba(209,254,73,0.8)"
                fontWeight="semibold"
                letterSpacing="0.1em"
                textTransform="uppercase"
              >
                Preise
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                color="white"
                fontWeight="bold"
                letterSpacing="-0.04em"
                lineHeight={1.1}
              >
                Transparent. Ohne Überraschungen.
              </Heading>
              <Text fontSize={{ base: 'sm', md: 'md' }} color="#9494A8" lineHeight="1.75">
                Starte kostenlos und skaliere, wenn du bereit bist. Kein langfristiger Vertrag. Kein Kleingedrucktes.
              </Text>

              <HStack spacing={0} mt={2} p="5px" bg="rgba(255,255,255,0.04)" border="1px solid rgba(255,255,255,0.07)" borderRadius="full">
                <Box
                  px={5}
                  py={2}
                  borderRadius="full"
                  cursor="pointer"
                  bg={!yearly ? 'rgba(209,254,73,0.2)' : 'transparent'}
                  transition="all 0.2s ease"
                  onClick={() => setYearly(false)}
                >
                  <Text
                    fontSize="sm"
                    color={!yearly ? '#BEE890' : '#5C5C70'}
                    fontWeight={!yearly ? 'semibold' : 'normal'}
                    transition="color 0.2s"
                  >
                    Monatlich
                  </Text>
                </Box>
                <Box
                  px={5}
                  py={2}
                  borderRadius="full"
                  cursor="pointer"
                  bg={yearly ? 'rgba(209,254,73,0.2)' : 'transparent'}
                  transition="all 0.2s ease"
                  onClick={() => setYearly(true)}
                >
                  <HStack spacing={2}>
                    <Text
                      fontSize="sm"
                      color={yearly ? '#BEE890' : '#5C5C70'}
                      fontWeight={yearly ? 'semibold' : 'normal'}
                      transition="color 0.2s"
                    >
                      Jährlich
                    </Text>
                    <Box px={2} py="2px" bg="rgba(34,197,94,0.15)" borderRadius="full">
                      <Text fontSize="xs" color="#22C55E" fontWeight="semibold">
                        −20%
                      </Text>
                    </Box>
                  </HStack>
                </Box>
              </HStack>
            </VStack>

            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
              gap={5}
              w="full"
              alignItems="start"
            >
              <PricingCard
                index={0}
                tier="Starter"
                price="Kostenlos"
                period=""
                description="Für Einsteiger und kleine Teams, die unverbindlich loslegen möchten."
                features={[
                  'Bis zu 2 aktive Flows',
                  '500 Kontakte',
                  'Email-Kanal',
                  'Standard Flow-Templates',
                  'Community Support',
                ]}
                cta="Kostenlos starten"
              />
              <PricingCard
                index={1}
                tier="Growth"
                price={yearly ? '€39' : '€49'}
                period="/Monat"
                description="Für wachsende Teams, die systematisch mehr aus ihrem Bestand herausholen wollen."
                features={[
                  'Unbegrenzte aktive Flows',
                  '10.000 Kontakte',
                  'Alle Kanäle (Email, SMS, Push)',
                  'KI-Copywriting inklusive',
                  'Next-Best-Action Engine',
                  'CRM-Integrationen',
                  'Priority Support',
                ]}
                featured
                cta="Growth starten"
              />
              <PricingCard
                index={2}
                tier="Scale"
                price={yearly ? '€119' : '€149'}
                period="/Monat"
                description="Für Unternehmen mit großem Bestand und Enterprise-Anforderungen."
                features={[
                  'Unbegrenzte Kontakte',
                  'Dedizierter Account Manager',
                  'Custom-Integrationen (API)',
                  'SLA & Uptime-Garantie',
                  'Team-Rollen & Berechtigungen',
                  'White-Label Option',
                ]}
                cta="Vertrieb kontaktieren"
              />
            </Grid>

            <Text fontSize="xs" color="#5C5C70" textAlign="center">
              Alle Preise zzgl. MwSt. · Monatlich kündbar · Keine Kreditkarte beim Start nötig
            </Text>
          </VStack>
        </motion.div>
      </Container>
    </Box>
  );
}
