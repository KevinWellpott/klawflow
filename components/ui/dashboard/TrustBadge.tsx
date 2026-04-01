'use client';

import { Box, HStack, Text } from '@chakra-ui/react';
import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface TrustBadgeProps {
  icon: ReactNode;
  label: string;
  delay?: number;
}

export default function TrustBadge({ icon, label, delay = 0 }: TrustBadgeProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, scale: 0.9, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 180, damping: 20, delay }}
      whileHover={reduced ? {} : { scale: 1.04, y: -2 }}
    >
      <HStack
        spacing={2.5}
        px={{ base: 4, md: 5 }}
        py={3}
        bg="rgba(255,255,255,0.05)"
        borderRadius="12px"
        transition="all 0.2s"
        cursor="default"
        _hover={{ bg: 'rgba(209,254,73,0.08)' }}
      >
        <Box aria-hidden="true">{icon}</Box>
        <Text fontSize="sm" color="#9494A8" fontWeight="medium">{label}</Text>
      </HStack>
    </motion.div>
  );
}
