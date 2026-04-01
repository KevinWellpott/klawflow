'use client';

import { Box, Container, Heading, Text, VStack, HStack, Grid } from '@chakra-ui/react';
import { motion, useReducedMotion } from 'framer-motion';
import MockChannelChart from '../../ui/dashboard/MockChannelChart';
import { containerMaxW, sectionPx } from '@/lib/sectionTokens';

const STATS = [
  { value: '2.3×', label: 'Mehr Conversions' },
  { value: '68%', label: 'Ø Öffnungsrate' },
];

export default function DashboardChannelSection() {
  const reduced = useReducedMotion();

  return (
    <Box
      as="section"
      py={{ base: '5rem', md: '7rem' }}
      bg="transparent"
      borderTop="1px solid rgba(255,255,255,0.04)"
      borderBottom="1px solid rgba(255,255,255,0.04)"
    >
      <Container maxW={containerMaxW} px={sectionPx} w="full">
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 12, lg: 20 }} alignItems="center">
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <VStack align="flex-start" spacing={7}>
              <Text
                fontSize="xs"
                color="rgba(209,254,73,0.8)"
                fontWeight="semibold"
                letterSpacing="0.1em"
                textTransform="uppercase"
              >
                Kanal-Performance
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                color="white"
                fontWeight="bold"
                letterSpacing="-0.04em"
                lineHeight={1.1}
              >
                Sieh, welcher Kanal deinen ROI maximiert.
              </Heading>
              <Text fontSize={{ base: 'sm', md: 'md' }} color="#9494A8" lineHeight="1.75">
                Klawflow misst die Conversion-Rate jedes Kanals in Echtzeit und verteilt deine Flows automatisch
                dorthin, wo sie am meisten wirken.
              </Text>
              <HStack spacing={8}>
                {STATS.map((s) => (
                  <Box key={s.label}>
                    <Text
                      fontSize={{ base: '2xl', md: '3xl' }}
                      fontWeight="extrabold"
                      letterSpacing="-0.04em"
                      sx={{
                        background: 'linear-gradient(135deg, #C8F06A 0%, #D1FE49 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {s.value}
                    </Text>
                    <Text fontSize="xs" color="#5C5C70" mt={1}>
                      {s.label}
                    </Text>
                  </Box>
                ))}
              </HStack>
            </VStack>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Box className="glass" borderRadius="24px" p={{ base: 6, md: 8 }}>
              <HStack justify="space-between" mb={6}>
                <Text fontSize="sm" color="white" fontWeight="semibold" letterSpacing="-0.01em">
                  Kanal-Übersicht
                </Text>
                <Box px={3} py="4px" bg="rgba(255,255,255,0.05)" borderRadius="full">
                  <Text fontSize="xs" color="#5C5C70">
                    Letzte 30 Tage
                  </Text>
                </Box>
              </HStack>
              <MockChannelChart />
              <Box mt={6} pt={5} borderTop="1px solid rgba(255,255,255,0.06)">
                <HStack justify="space-between" align="center">
                  <Text fontSize="xs" color="#5C5C70">
                    KI-Empfehlung
                  </Text>
                  <Box
                    px={3}
                    py="5px"
                    bg="rgba(209,254,73,0.14)"
                    border="1px solid rgba(209,254,73,0.22)"
                    borderRadius="full"
                    cursor="pointer"
                    transition="all 0.2s"
                    _hover={{ bg: 'rgba(209,254,73,0.22)' }}
                  >
                    <Text fontSize="xs" color="#BEE890" fontWeight="semibold">
                      Email stärker priorisieren →
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Container>
    </Box>
  );
}
