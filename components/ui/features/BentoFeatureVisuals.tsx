'use client';

import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <VStack align="center" spacing={1} flex={1} minW={0}>
      <Text fontSize="xs" color="#71717A" letterSpacing="-0.01em" textAlign="center">
        {label}
      </Text>
      <Text
        fontSize={{ base: 'lg', md: 'xl' }}
        fontWeight="semibold"
        color="white"
        letterSpacing="-0.03em"
        lineHeight={1}
        textAlign="center"
      >
        {value}
      </Text>
    </VStack>
  );
}

/** Dashboard: KPIs kompakt, Chart deutlich höher (nutzt die linke Karte besser) */
export function DashboardChartMock() {
  return (
    <Box
      w="full"
      maxW="100%"
      borderRadius="14px"
      border="1px solid rgba(255,255,255,0.08)"
      bg="#0d0d0d"
      p={{ base: 4, md: 5 }}
      display="flex"
      flexDirection="column"
    >
      <Text fontSize="xs" fontWeight="medium" color="#A1A1AA" mb={4} textAlign="center">
        Overview
      </Text>
      <HStack spacing={{ base: 4, md: 8 }} flexWrap="wrap" align="flex-start" justify="center" mb={4} rowGap={3}>
        <Metric label="Live Visitors" value="413" />
        <Metric label="Unique Visitors" value="1.7M" />
        <Metric label="Total Pageviews" value="3.2M" />
      </HStack>
      <Box
        h={{ base: 'min(200px, 52vw)', sm: '180px', md: '200px', lg: '220px' }}
        w="full"
        position="relative"
        flexShrink={0}
      >
        <svg width="100%" height="100%" viewBox="0 0 360 200" preserveAspectRatio="none" style={{ display: 'block' }}>
          <defs>
            <linearGradient id="klawPurpleFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,145 L36,132 L72,142 L108,118 L144,125 L180,95 L216,105 L252,82 L288,92 L324,68 L360,75 L360,200 L0,200 Z"
            fill="url(#klawPurpleFill)"
          />
          <path
            d="M0,145 L36,132 L72,142 L108,118 L144,125 L180,95 L216,105 L252,82 L288,92 L324,68 L360,75"
            fill="none"
            stroke="#A855F7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            style={{ filter: 'drop-shadow(0 0 10px rgba(168,85,247,0.45))' }}
          />
        </svg>
      </Box>
    </Box>
  );
}

/** Flow-Editor: Inhalt vertikal ausgewogen */
export function FlowVariantsMock() {
  return (
    <Box borderRadius="14px" border="1px solid rgba(255,255,255,0.08)" bg="#0d0d0d" overflow="hidden" w="full">
      <HStack spacing={5} px={3} py={2.5} borderBottom="1px solid rgba(255,255,255,0.06)" justify="center">
        {['Pages', 'Layers', 'Assets'].map((t, i) => (
          <Text
            key={t}
            fontSize="xs"
            color={i === 0 ? 'white' : '#52525B'}
            fontWeight={i === 0 ? 'semibold' : 'normal'}
          >
            {t}
          </Text>
        ))}
      </HStack>
      <Flex minH={{ base: '148px', md: '160px' }} align="stretch">
        <VStack
          align="center"
          justify="center"
          py={3}
          px={2}
          w="38%"
          minW="96px"
          borderRight="1px solid rgba(255,255,255,0.06)"
          spacing={2}
        >
          <Text fontSize="xs" color="white" fontWeight="medium">
            Home
          </Text>
          <Text fontSize="xs" color="#52525B">
            Version A
          </Text>
          <Box py={1.5} px={2} borderRadius="md" bg="rgba(255,255,255,0.05)" border="1px solid rgba(255,255,255,0.08)" w="full">
            <Text fontSize="xs" color="white" textAlign="center">
              Version B
            </Text>
          </Box>
          <Text fontSize="xs" color="#52525B">
            Version C
          </Text>
        </VStack>
        <Flex flex={1} p={3} bg="#0a0a0a" align="center" justify="center" direction="column" textAlign="center">
          <Box
            display="inline-block"
            px={2}
            py={0.5}
            borderRadius="4px"
            bg="rgba(56,189,248,0.12)"
            border="1px solid rgba(56,189,248,0.25)"
            mb={3}
          >
            <Text fontSize="10px" fontWeight="medium" color="#38BDF8">
              Desktop · 1200
            </Text>
          </Box>
          <Text fontSize="sm" fontWeight="semibold" color="white" lineHeight={1.45} letterSpacing="-0.02em" maxW="220px">
            Mehr Umsatz aus Klaviyo – ohne Agentur
          </Text>
          <VStack align="center" spacing={1.5} mt={4} w="full" maxW="200px">
            <Box h="3px" borderRadius="full" bg="#262626" w="70%" />
            <Box h="3px" borderRadius="full" bg="#1f1f1f" w="100%" />
            <Box h="3px" borderRadius="full" bg="#1a1a1a" w="45%" />
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
}

/** Next-Best-Action: Metriken + Balken optisch mittig */
export function HealthGaugesMock() {
  return (
    <Box
      borderRadius="14px"
      border="1px solid rgba(255,255,255,0.08)"
      bg="#0d0d0d"
      p={{ base: 4, md: 5 }}
      w="full"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <HStack justify="center" spacing={{ base: 4, md: 8 }} flexWrap="wrap" rowGap={4} mb={5} align="flex-start">
        <Metric label="Offene To-dos" value="3" />
        <Metric label="Priorität hoch" value="1" />
        <Metric label="Erledigt (7 Tage)" value="12" />
      </HStack>
      <Box maxW="320px" mx="auto" w="full">
        <HStack justify="space-between" mb={1.5}>
          <Text fontSize="xs" color="#71717A">
            Queue erledigt
          </Text>
          <Text fontSize="xs" color="#A1A1AA">
            72%
          </Text>
        </HStack>
        <Box h="6px" w="full" borderRadius="full" bg="#262626" overflow="hidden">
          <Box h="full" w="72%" borderRadius="full" bg="linear-gradient(90deg, #D1FE49, #9FD632)" />
        </Box>
      </Box>
    </Box>
  );
}
