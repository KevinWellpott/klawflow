'use client';

import { Heading, Text, VStack, SimpleGrid, Box, HStack } from '@chakra-ui/react';
import { FiLock, FiZap, FiLayers } from 'react-icons/fi';
import SectionContainer from '../ui/SectionContainer';
import { sectionGapContent, sectionHeadingProps } from '@/lib/sectionTokens';

const COLS = [
  {
    icon: FiLock,
    title: 'DSGVO & Sicherheit',
    body: 'DSGVO-konform. Ende-zu-Ende-verschlüsselte Verbindung zu Klaviyo.',
  },
  {
    icon: FiZap,
    title: 'Schnelles Onboarding',
    body: 'Setup in unter 24h. Dedizierter Onboarding-Support für Wartelisten-Mitglieder.',
  },
  {
    icon: FiLayers,
    title: 'Stack-ready',
    body: 'Konzipiert für Klaviyo, Shopify & WooCommerce – Integrationen Schritt für Schritt.',
  },
];

export default function TrustLayer() {
  return (
    <SectionContainer>
      <VStack spacing={sectionGapContent} align="flex-start" w="full">
        <Heading as="h2" {...sectionHeadingProps}>
          Deine Daten sind sicher
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 3, md: 5 }} w="full">
          {COLS.map(({ icon: Icon, title, body }) => (
            <Box key={title} className="glass-card" p={{ base: 8, md: 10 }} borderRadius="16px">
              <VStack align="flex-start" spacing={4}>
                <HStack
                  justify="center"
                  w={10}
                  h={10}
                  borderRadius="lg"
                  bg="rgba(209,254,73,0.1)"
                >
                  <Icon color="#D1FE49" size={20} />
                </HStack>
                <Text fontWeight="semibold" color="white" fontSize="md">
                  {title}
                </Text>
                <Text fontSize="sm" color="#A1A1AA" lineHeight="1.75">
                  {body}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </SectionContainer>
  );
}
