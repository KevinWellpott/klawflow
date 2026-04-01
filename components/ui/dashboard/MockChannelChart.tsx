'use client';

import { Box, Text, HStack, VStack } from '@chakra-ui/react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CHANNELS = [
  { label: 'Email', pct: 68, color: '#D1FE49' },
  { label: 'WhatsApp', pct: 45, color: '#BEE890' },
  { label: 'SMS', pct: 32, color: '#9FD632' },
  { label: 'Push', pct: 24, color: '#8BC91A' },
];

export default function MockChannelChart() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduced = useReducedMotion();

  return (
    <VStack ref={ref} spacing={4} w="full" aria-label="Kanal-Performance">
      {CHANNELS.map((ch, i) => (
        <Box key={ch.label} w="full">
          <HStack justify="space-between" mb="6px">
            <Text fontSize="xs" color="#9494A8" fontWeight="medium">{ch.label}</Text>
            <motion.span
              initial={reduced ? false : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.15 + 0.4 }}
            >
              <Text as="span" fontSize="xs" color="white" fontWeight="semibold">
                {ch.pct}%
              </Text>
            </motion.span>
          </HStack>
          <Box
            w="full" h="6px"
            bg="rgba(255,255,255,0.05)"
            borderRadius="full"
            overflow="hidden"
            role="progressbar"
            aria-valuenow={ch.pct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${ch.label} ${ch.pct}%`}
          >
            <motion.div
              style={{
                height: '100%',
                borderRadius: 9999,
                background: ch.color,
                boxShadow: `0 0 10px ${ch.color}55`,
              }}
              initial={{ width: 0 }}
              animate={inView ? { width: `${reduced ? ch.pct : ch.pct}%` } : { width: 0 }}
              transition={{
                duration: reduced ? 0 : 1,
                delay: reduced ? 0 : i * 0.15 + 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </Box>
        </Box>
      ))}
    </VStack>
  );
}
