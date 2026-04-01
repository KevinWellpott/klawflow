'use client';

import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  outcome?: string;
}

export default function FeatureCard({ icon, title, description, outcome }: FeatureCardProps) {
  return (
    <Box
      className="glass-card"
      h="full"
      p={{ base: 8, md: 10 }}
      sx={{
        '&:hover': {
          boxShadow: '0 28px 52px rgba(0,0,0,0.4), 0 0 40px rgba(209,254,73,0.08)',
        },
      }}
    >
      <VStack align="flex-start" spacing={4}>
        <Box
          fontSize="xl"
          bg="rgba(209,254,73,0.1)"
          borderRadius="16px"
          p="10px"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
        >
          {icon}
        </Box>
        {outcome && (
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
        )}
        <Heading
          as="h3"
          fontSize="md"
          color="white"
          fontWeight="semibold"
          letterSpacing="-0.02em"
          lineHeight={1.25}
        >
          {title}
        </Heading>
        <Text fontSize="sm" color="#A1A1AA" lineHeight={1.5}>
          {description}
        </Text>
      </VStack>
    </Box>
  );
}
