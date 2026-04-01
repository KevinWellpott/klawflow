'use client';

import { Box, Text, HStack } from '@chakra-ui/react';
import { motion, useReducedMotion } from 'framer-motion';

interface KpiCardProps {
  value: string;
  label: string;
  change: string;
  positive?: boolean;
  delay?: number;
}

export default function KpiCard({ value, label, change, positive = true, delay = 0 }: KpiCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 18,
        delay,
      }}
      style={{ flex: 1, minWidth: 140 }}
    >
      {/* Continuous float */}
      <motion.div
        animate={reduced ? {} : { y: [0, -5, 0] }}
        transition={{
          duration: 4 + delay,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay * 0.8,
        }}
      >
        <Box
          className="glass"
          borderRadius="16px"
          p={{ base: 4, md: 5 }}
          cursor="default"
          transition="box-shadow 0.2s"
          _hover={{ boxShadow: '0 0 32px rgba(209,254,73,0.12)' }}
        >
          <Text
            fontSize="10px"
            color="#5C5C70"
            letterSpacing="0.07em"
            textTransform="uppercase"
            fontWeight="semibold"
            mb={2}
          >
            {label}
          </Text>
          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight="extrabold"
            letterSpacing="-0.03em"
            sx={{
              background: 'linear-gradient(135deg, #ffffff 40%, #C8F06A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {value}
          </Text>
          <HStack spacing={1} mt={1}>
            <Text fontSize="xs" color={positive ? '#22C55E' : '#EF4444'} fontWeight="semibold">
              {change}
            </Text>
            <Text fontSize="xs" color="#5C5C70">vs. Vormonat</Text>
          </HStack>
        </Box>
      </motion.div>
    </motion.div>
  );
}
