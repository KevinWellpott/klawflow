'use client';

import { Box, Text, VStack, HStack, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

/**
 * Ein Balken 20 % „genutzt“ vs. 80 % „noch nicht gehoben“ – klar lesbar, mit Motion-Einstieg.
 */
export default function KlaviyoUsageGapVisual() {
  return (
    <Box
      className="glass-card"
      w="full"
      borderRadius="28px"
      p={{ base: 8, md: 10 }}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        bottom={-20}
        right={-40}
        w="200px"
        h="200px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(209,254,73,0.12) 0%, transparent 70%)"
        pointerEvents="none"
        aria-hidden
      />

      <Text fontSize="xs" color="#71717A" mb={3} letterSpacing="0.04em" textTransform="uppercase">
        Typische Klaviyo-Auslastung
      </Text>

      <Box position="relative" mb={4}>
        <Box
          position="relative"
          h={{ base: '48px', md: '56px' }}
          borderRadius="lg"
          overflow="hidden"
          bg="rgba(0,0,0,0.25)"
        >
          <MotionBox
            position="absolute"
            left={0}
            top={0}
            bottom={0}
            w="20%"
            bg="linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.08) 100%)"
            initial={{ width: '0%' }}
            animate={{ width: '20%' }}
            transition={{ type: 'spring', stiffness: 72, damping: 18 }}
          />
          <MotionBox
            position="absolute"
            left="20%"
            top={0}
            bottom={0}
            w="80%"
            bg="linear-gradient(135deg, rgba(209,254,73,0.45) 0%, #D1FE49 55%, rgba(159,214,50,0.95) 100%)"
            boxShadow="inset 0 1px 0 rgba(255,255,255,0.25), 0 0 48px rgba(209,254,73,0.2)"
            initial={{ width: '0%' }}
            animate={{ width: '80%' }}
            transition={{ type: 'spring', stiffness: 72, damping: 18, delay: 0.06 }}
          />
          <HStack
            position="relative"
            zIndex={1}
            h="full"
            w="full"
            spacing={0}
            align="stretch"
            pointerEvents="none"
          >
            <Box flex="0 0 20%" display="flex" alignItems="center" justifyContent="center" px={1}>
              <Text
                fontSize={{ base: 'xs', md: 'sm' }}
                fontWeight="bold"
                color="white"
                textAlign="center"
                lineHeight="1.2"
                textShadow="0 1px 8px rgba(0,0,0,0.6)"
              >
                20%
                <Box as="span" display={{ base: 'none', sm: 'block' }} fontSize="10px" fontWeight="normal" color="#E4E4E7">
                  {' '}
                  genutzt
                </Box>
              </Text>
            </Box>
            <Box flex="1" minW={0} display="flex" alignItems="center" justifyContent="center" px={2}>
              <Text
                fontSize={{ base: 'xs', md: 'sm' }}
                fontWeight="bold"
                color="#0a0a0a"
                textAlign="center"
                lineHeight="1.2"
              >
                80%
                <Box as="span" display={{ base: 'none', sm: 'block' }} fontSize="10px" fontWeight="semibold" opacity={0.88}>
                  {' '}
                  noch nicht gehoben
                </Box>
              </Text>
            </Box>
          </HStack>
        </Box>
        <Text fontSize="xs" color="#52525B" mt={2} lineHeight="1.45">
          Die Fläche steht für dein gesamtes Klaviyo-Potenzial (Flows, Segmente, Automatisierung). Die meisten Shops
          nutzen nur den schmalen linken Teil – der Rest bleibt ungenutzt, obwohl du bereits zahlst.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, sm: 2 }} gap={3}>
        <VStack align="flex-start" spacing={1} p={{ base: 2.5, md: 3 }} borderRadius="lg" bg="rgba(255,255,255,0.04)">
          <Text fontSize="xs" fontWeight="semibold" color="#E4E4E7">
            Genutzt
          </Text>
          <Text fontSize={{ base: 'xs', md: 'sm' }} color="#A1A1AA" lineHeight={1.5}>
            Ein paar Flows, Basis-Segmente – oft ohne klare Priorität.
          </Text>
        </VStack>
        <VStack align="flex-start" spacing={1} p={{ base: 2.5, md: 3 }} borderRadius="lg" bg="rgba(209,254,73,0.08)">
          <Text fontSize="xs" fontWeight="semibold" color="#D1FE49">
            Ungenutztes Potenzial
          </Text>
          <Text fontSize={{ base: 'xs', md: 'sm' }} color="#A1A1AA" lineHeight="1.5">
            Umsatz, den du mit besserer Nutzung derselben Daten holen könntest.
          </Text>
        </VStack>
      </SimpleGrid>
    </Box>
  );
}
