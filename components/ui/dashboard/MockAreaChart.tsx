'use client';

import { Box, HStack, Text } from '@chakra-ui/react';
import { motion, useReducedMotion } from 'framer-motion';

export default function MockAreaChart() {
  const reduced = useReducedMotion();

  return (
    <Box>
      {/* Legend */}
      <HStack justify="space-between" mb={3}>
        <Text fontSize="xs" color="#9494A8" fontWeight="semibold" letterSpacing="-0.01em">
          Zusatzumsatz · letzte 30 Tage
        </Text>
        <HStack spacing={5}>
          <HStack spacing={2}>
            <Box w="18px" h="2px" bg="#D1FE49" borderRadius="full" />
            <Text fontSize="xs" color="#5C5C70">Aktuell</Text>
          </HStack>
          <HStack spacing={2}>
            <Box w="18px" h="1px" bg="rgba(209,254,73,0.28)" borderRadius="full" />
            <Text fontSize="xs" color="#5C5C70">Vormonat</Text>
          </HStack>
        </HStack>
      </HStack>

      {/* SVG chart */}
      <Box w="full" h="130px">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 600 130"
          preserveAspectRatio="none"
          aria-label="Umsatz-Chart der letzten 30 Tage"
          role="img"
        >
          <defs>
            <linearGradient id="aFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D1FE49" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#D1FE49" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="aFill2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C8F06A" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#C8F06A" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[32, 65, 98].map(y => (
            <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          ))}

          {/* Previous period fill */}
          <path
            d="M0,118 C70,112 120,106 180,96 C240,86 270,102 330,92 C390,82 440,88 510,74 L600,68 L600,130 L0,130 Z"
            fill="url(#aFill2)"
          />
          {/* Previous period line */}
          <path
            d="M0,118 C70,112 120,106 180,96 C240,86 270,102 330,92 C390,82 440,88 510,74 L600,68"
            fill="none"
            stroke="rgba(209,254,73,0.22)"
            strokeWidth="1.5"
            strokeDasharray="5 4"
          />

          {/* Current period fill */}
          <path
            d="M0,108 C70,97 110,82 170,66 C210,55 250,72 300,52 C350,34 400,46 460,22 C510,6 555,16 600,8 L600,130 L0,130 Z"
            fill="url(#aFill)"
          />

          {/* Current period line — animated draw */}
          <motion.path
            d="M0,108 C70,97 110,82 170,66 C210,55 250,72 300,52 C350,34 400,46 460,22 C510,6 555,16 600,8"
            fill="none"
            stroke="#D1FE49"
            strokeWidth="2"
            strokeLinecap="round"
            initial={reduced ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          />

          {/* Live data points */}
          {[[300, 52, 0.8], [460, 22, 0.9], [600, 8, 1.0]].map(([cx, cy, delay], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="4"
              fill="#D1FE49"
              initial={reduced ? false : { scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: delay as number, type: 'spring', stiffness: 200 }}
            />
          ))}
          {/* Pulse ring on last point */}
          <motion.circle
            cx={600}
            cy={8}
            r="8"
            fill="#D1FE49"
            initial={reduced ? false : { scale: 0.5, opacity: 0.3 }}
            animate={{ scale: [0.8, 1.6, 0.8], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          />
        </svg>
      </Box>

      {/* X-axis labels */}
      <HStack justify="space-between" mt={2} px={1}>
        {['1. Apr', '8. Apr', '15. Apr', '22. Apr', '29. Apr'].map(d => (
          <Text key={d} fontSize="10px" color="#3A3A4A">{d}</Text>
        ))}
      </HStack>
    </Box>
  );
}
