'use client';

import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface BentoFeatureCardProps {
  outcome: string;
  title: string;
  description: string;
  visual: ReactNode;
}

/**
 * Oben: Überschriften links. Darunter: Mockup-Bereich vertikal zentriert in der restlichen Kartenhöhe.
 */
export default function BentoFeatureCard({ outcome, title, description, visual }: BentoFeatureCardProps) {
  return (
    <Box
      className="glass-card"
      display="flex"
      flexDirection="column"
      h="full"
      minH="0"
      borderRadius="16px"
      p={{ base: 6, md: 10 }}
      sx={{
        '&:hover': {
          boxShadow: '0 28px 56px rgba(0,0,0,0.42), 0 0 48px rgba(209,254,73,0.07)',
        },
      }}
    >
      <VStack align="flex-start" spacing={3} w="full" flexShrink={0}>
        <Text
          fontSize="sm"
          color="#EDEDED"
          fontWeight="semibold"
          letterSpacing="0.04em"
          textTransform="uppercase"
          lineHeight={1.4}
        >
          {outcome}
        </Text>
        <Heading
          as="h3"
          fontSize={{ base: 'xl', md: '2xl' }}
          color="white"
          fontWeight="bold"
          letterSpacing="-0.03em"
          lineHeight={1.15}
        >
          {title}
        </Heading>
        <Text fontSize="md" color="#888888" lineHeight={1.5} maxW="42ch">
          {description}
        </Text>
      </VStack>

      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        justifyContent="center"
        w="full"
        minH="0"
        mt={{ base: 6, md: 8 }}
      >
        <Box w="full" display="flex" alignItems="center" justifyContent="center">
          {visual}
        </Box>
      </Box>
    </Box>
  );
}
