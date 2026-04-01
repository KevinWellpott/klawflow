'use client';

import { Box, Container, Heading, Text, VStack, HStack, Grid } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { motion, useReducedMotion } from 'framer-motion';
import EmailForm from '../../ui/EmailForm';
import TrustBadge from '../../ui/dashboard/TrustBadge';
import { IconGlobe, IconLock, IconShield, IconTrend } from '../../ui/dashboard/DashboardIcons';
import { containerMaxW, sectionPx } from '@/lib/sectionTokens';

const STATS = [
  { value: '120+', label: 'Unternehmen auf der Warteliste' },
  { value: '€18K', label: 'Ø Zusatzumsatz in 6 Wochen' },
  { value: '99.9%', label: 'Platform-Uptime' },
  { value: '4.9 ★', label: 'Durchschnittliche Bewertung' },
];

const BADGES = [
  { icon: <IconShield />, label: 'DSGVO-konform', delay: 0 },
  { icon: <IconGlobe />, label: 'EU-Server', delay: 0.06 },
  { icon: <IconLock />, label: 'SSL-verschlüsselt', delay: 0.12 },
  { icon: <IconTrend />, label: '99.9% Uptime', delay: 0.18 },
];

export default function DashboardTrustCtaSection() {
  const reduced = useReducedMotion();

  return (
    <Box as="section" py={{ base: '5rem', md: '7rem' }} position="relative">
      <Box className="glow-divider" position="absolute" top={0} left={0} right={0} />
      <Container maxW={containerMaxW} px={sectionPx} w="full">
        <VStack spacing={14}>
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={5} w="full">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={reduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Box
                  textAlign="center"
                  p={{ base: 5, md: 6 }}
                  bg="rgba(255,255,255,0.04)"
                  borderRadius="20px"
                  transition="all 0.25s"
                  _hover={{
                    bg: 'rgba(209,254,73,0.06)',
                  }}
                >
                  <Text
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontWeight="extrabold"
                    letterSpacing="-0.04em"
                    sx={{
                      background: 'linear-gradient(135deg, #ffffff 20%, #C8F06A 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {s.value}
                  </Text>
                  <Text fontSize="xs" color="#5C5C70" mt={2} lineHeight="1.55">
                    {s.label}
                  </Text>
                </Box>
              </motion.div>
            ))}
          </Grid>

          <VStack spacing={5}>
            <Text
              fontSize="xs"
              color="#5C5C70"
              letterSpacing="0.09em"
              textTransform="uppercase"
              fontWeight="semibold"
            >
              Sicherheit & Compliance
            </Text>
            <HStack spacing={3} flexWrap="wrap" justify="center">
              {BADGES.map((b) => (
                <TrustBadge key={b.label} icon={b.icon} label={b.label} delay={b.delay} />
              ))}
            </HStack>
          </VStack>

          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: '100%' }}
          >
            <Box
              w="full"
              className="glass"
              borderRadius="28px"
              p={{ base: 8, md: 12 }}
              textAlign="center"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%,-50%)"
                w="700px"
                h="250px"
                bg="radial-gradient(ellipse, rgba(209,254,73,0.1) 0%, transparent 65%)"
                pointerEvents="none"
              />
              <VStack spacing={6} position="relative" zIndex={1}>
                <Heading
                  as="h2"
                  fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                  fontWeight="extrabold"
                  letterSpacing="-0.04em"
                  className="gradient-text"
                >
                  Bereit für dein persönliches Revenue-Dashboard?
                </Heading>
                <Text fontSize={{ base: 'sm', md: 'md' }} color="#9494A8" maxW="460px" lineHeight="1.75">
                  Trag dich jetzt ein und sichere dir kostenlosen Early Access. Limitierte Plätze.
                </Text>
                <Box w="full" display="flex" justifyContent="center">
                  <EmailForm placeholder="deine@email.de" buttonLabel="Dashboard-Zugang sichern" />
                </Box>
                <HStack spacing={2}>
                  <CheckIcon boxSize={3} color="#22C55E" />
                  <Text fontSize="xs" color="#5C5C70">
                    Keine Kreditkarte · Kündbar jederzeit · Setup in 30 Min.
                  </Text>
                </HStack>
              </VStack>
            </Box>
          </motion.div>
        </VStack>
      </Container>
    </Box>
  );
}
