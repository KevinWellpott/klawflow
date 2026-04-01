'use client';

import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { motion, useReducedMotion } from 'framer-motion';
import KpiCard from './KpiCard';
import MockAreaChart from './MockAreaChart';

export default function DashboardPreviewShell() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 40, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      style={{ perspective: 1200 }}
    >
      <Box
        mt={{ base: 14, md: 16 }}
        w="full"
        maxW="940px"
        className="glass"
        borderRadius="24px"
        p={{ base: 5, md: 7 }}
        position="relative"
        overflow="hidden"
        sx={{
          transformStyle: 'preserve-3d',
        }}
      >
        <Box
          position="absolute"
          top="-100px"
          left="50%"
          transform="translateX(-50%)"
          w="500px"
          h="250px"
          bg="radial-gradient(ellipse, rgba(209,254,73,0.07) 0%, transparent 70%)"
          pointerEvents="none"
        />

        <HStack mb={5} justify="space-between" position="relative" zIndex={1}>
          <HStack spacing={2}>
            <Box w="10px" h="10px" bg="#EF4444" borderRadius="full" opacity={0.6} />
            <Box w="10px" h="10px" bg="#F59E0B" borderRadius="full" opacity={0.6} />
            <Box w="10px" h="10px" bg="#22C55E" borderRadius="full" opacity={0.6} />
          </HStack>
          <Text fontSize="xs" color="#5C5C70" letterSpacing="0.02em">
            Klawflow · Revenue Dashboard
          </Text>
          <HStack spacing={1}>
            {['1W', '1M', '3M', '1J'].map((p) => (
              <Box
                key={p}
                px={2}
                py="3px"
                borderRadius="6px"
                cursor="pointer"
                bg={p === '1M' ? 'rgba(209,254,73,0.18)' : 'transparent'}
              >
                <Text
                  fontSize="xs"
                  color={p === '1M' ? '#BEE890' : '#5C5C70'}
                  fontWeight={p === '1M' ? 'semibold' : 'normal'}
                >
                  {p}
                </Text>
              </Box>
            ))}
          </HStack>
        </HStack>

        <Flex gap={3} mb={6} flexWrap="wrap" position="relative" zIndex={1}>
          <KpiCard value="+34%" label="Umsatz" change="+12%" positive delay={0} />
          <KpiCard value="18" label="Aktive Flows" change="+3" positive delay={0.12} />
          <KpiCard value="8.2×" label="ROI" change="+1.4×" positive delay={0.24} />
          <Box display={{ base: 'none', md: 'flex' }} flex="1">
            <KpiCard value="2.4h" label="Zeit gespart/Wo" change="+40min" positive delay={0.36} />
          </Box>
        </Flex>

        <Box position="relative" zIndex={1}>
          <MockAreaChart />
        </Box>
      </Box>
    </motion.div>
  );
}
