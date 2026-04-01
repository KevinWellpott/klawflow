'use client';

import { Heading, Text, VStack } from '@chakra-ui/react';
import ROICalculator from '../ui/ROICalculator';
import SectionContainer from '../ui/SectionContainer';

export default function ROICalculatorSection() {
  return (
    <SectionContainer bg="transparent" borderTop="none">
      <VStack spacing={{ base: 8, md: 10 }} textAlign="center">
        <VStack spacing={3} maxW="640px">
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            color="white"
            fontWeight="bold"
            letterSpacing="-0.04em"
            lineHeight={1.1}
          >
            Was kostet dich Klaviyo-Underperformance wirklich?
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="#A1A1AA" lineHeight="1.7">
            Basierend auf typischen Hebeln aus Daten unserer Beta-Nutzer (Schätzung, keine Finanzberatung).
          </Text>
        </VStack>
        <ROICalculator />
      </VStack>
    </SectionContainer>
  );
}
