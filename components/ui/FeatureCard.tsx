'use client';

import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  glass?: boolean;
}

export default function FeatureCard({
  icon,
  title,
  description,
  glass = false,
}: FeatureCardProps) {
  return (
    <Box
      className={glass ? 'glass' : undefined}
      bg={glass ? undefined : 'rgba(255,255,255,0.03)'}
      border={glass ? undefined : '1px solid rgba(255,255,255,0.07)'}
      borderRadius="2xl"
      p={{ base: 6, md: 8 }}
      transition="all 0.3s ease"
      _hover={{
        borderColor: 'rgba(255,255,255,0.15)',
        bg: 'rgba(255,255,255,0.05)',
        transform: 'translateY(-4px)',
      }}
      h="full"
    >
      <VStack align="flex-start" spacing={4}>
        <Box
          fontSize="2xl"
          bg="rgba(124,111,255,0.12)"
          border="1px solid rgba(124,111,255,0.2)"
          borderRadius="xl"
          p={3}
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
        >
          {icon}
        </Box>
        <Heading as="h3" fontSize={{ base: 'md', md: 'lg' }} color="white" fontWeight="semibold">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.400" lineHeight="relaxed">
          {description}
        </Text>
      </VStack>
    </Box>
  );
}
