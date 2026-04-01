'use client';

import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface DashboardFeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function DashboardFeatureCard({
  icon,
  title,
  description,
  index = 0,
}: DashboardFeatureCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Box
        bg="rgba(255,255,255,0.04)"
        border="none"
        borderRadius="20px"
        p={{ base: 6, md: 7 }}
        h="full"
        transition="all 0.25s ease"
        cursor="default"
        _hover={{
          bg: 'rgba(209,254,73,0.06)',
          transform: 'translateY(-2px)',
          boxShadow: '0 16px 48px rgba(209,254,73,0.1)',
        }}
      >
        <VStack align="flex-start" spacing={5}>
          <Box
            w="42px"
            h="42px"
            bg="rgba(209,254,73,0.12)"
            borderRadius="12px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            aria-hidden="true"
          >
            {icon}
          </Box>
          <Heading
            as="h3"
            fontSize={{ base: 'md', md: 'lg' }}
            color="white"
            fontWeight="semibold"
            letterSpacing="-0.02em"
          >
            {title}
          </Heading>
          <Text fontSize="sm" color="#9494A8" lineHeight="1.75">
            {description}
          </Text>
        </VStack>
      </Box>
    </motion.div>
  );
}
