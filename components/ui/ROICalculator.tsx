'use client';

import { useMemo, useState } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Select,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import Button from './Button';

type UsageLevel = 'basic' | 'medium' | 'optimized';

function formatEuro(n: number) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(n);
}

export default function ROICalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(100000);
  const [usageLevel, setUsageLevel] = useState<UsageLevel>('basic');

  const lossMonthly = useMemo(() => {
    const rate = usageLevel === 'basic' ? 0.15 : usageLevel === 'medium' ? 0.07 : 0.02;
    return monthlyRevenue * rate;
  }, [monthlyRevenue, usageLevel]);

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <Box className="glass-card" w="full" maxW="520px" mx="auto" p={{ base: 6, md: 8 }}>
      <VStack spacing={8} align="stretch" w="full">
      <FormControl>
        <FormLabel fontSize="sm" color="#A1A1AA" mb={3}>
          Monatlicher Shop-Umsatz (€)
        </FormLabel>
        <Text fontSize="2xl" fontWeight="extrabold" color="white" letterSpacing="-0.03em" mb={2}>
          {formatEuro(monthlyRevenue)}
        </Text>
        <Slider
          aria-label="Monatlicher Umsatz"
          min={10000}
          max={500000}
          step={5000}
          value={monthlyRevenue}
          onChange={setMonthlyRevenue}
          focusThumbOnChange={false}
        >
          <SliderTrack bg="rgba(255,255,255,0.08)" h="6px" borderRadius="full">
            <SliderFilledTrack bg="#D1FE49" />
          </SliderTrack>
          <SliderThumb boxSize={5} bg="#D1FE49" border="2px solid #000" _focus={{ boxShadow: '0 0 0 3px rgba(209,254,73,0.35)' }} />
        </Slider>
        <HStack justify="space-between" mt={2}>
          <Text fontSize="xs" color="#71717A">
            10.000 €
          </Text>
          <Text fontSize="xs" color="#71717A">
            500.000 €
          </Text>
        </HStack>
      </FormControl>

      <FormControl>
        <FormLabel fontSize="sm" color="#A1A1AA">
          Wie gut nutzt du Klaviyo heute?
        </FormLabel>
        <Select
          value={usageLevel}
          onChange={(e) => setUsageLevel(e.target.value as UsageLevel)}
          bg="rgba(255,255,255,0.08)"
          border="none"
          color="white"
          borderRadius="lg"
          _hover={{ bg: 'rgba(255,255,255,0.1)' }}
          focusBorderColor="#D1FE49"
        >
          <option value="basic" style={{ background: 'rgba(12,12,18,0.98)' }}>
            Basis – Flows &amp; Segmentierung kaum genutzt
          </option>
          <option value="medium" style={{ background: 'rgba(12,12,18,0.98)' }}>
            Mittel – einige Flows, wenig Optimierung
          </option>
          <option value="optimized" style={{ background: 'rgba(12,12,18,0.98)' }}>
            Stark – aber noch Luft nach oben
          </option>
        </Select>
      </FormControl>

      <Box
        borderRadius="xl"
        p={{ base: 5, md: 6 }}
        textAlign="center"
        bg="rgba(255,255,255,0.05)"
      >
        <Text fontSize="sm" color="#A1A1AA" mb={2}>
          Geschätzter Umsatzverlust durch Underperformance
        </Text>
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="extrabold" color="#D1FE49" letterSpacing="-0.03em">
          Du verschenkst ca. {formatEuro(lossMonthly)} / Monat
        </Text>
        <Text fontSize="xs" color="#71717A" mt={3}>
          Basierend auf typischen Hebeln aus Beta-Daten (Annahme, keine Garantie).
        </Text>
      </Box>

      <Button variant="primary" w="full" onClick={scrollToWaitlist}>
        Auf die Warteliste
      </Button>
      </VStack>
    </Box>
  );
}
