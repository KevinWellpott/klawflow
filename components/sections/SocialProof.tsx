'use client';

import { Heading, Text, SimpleGrid, Box, VStack } from '@chakra-ui/react';
import SectionContainer from '../ui/SectionContainer';

const BRANDS = ['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'];

export default function SocialProof() {
  return (
    <SectionContainer bg="rgba(255,255,255,0.01)" borderTop="1px solid rgba(255,255,255,0.04)" borderBottom="1px solid rgba(255,255,255,0.04)">
      <VStack spacing={{ base: 8, md: 10 }} textAlign="center">
        <Heading
          as="h2"
          fontSize={{ base: 'xl', md: '2xl' }}
          color="white"
          fontWeight="bold"
          letterSpacing="-0.03em"
        >
          Vertrauen von führenden DTC-Brands
        </Heading>

        <SimpleGrid columns={{ base: 2, md: 5 }} spacing={4} w="full">
          {BRANDS.map((name) => (
            <Box
              key={name}
              py={6}
              px={4}
              borderRadius="xl"
              border="1px solid rgba(255,255,255,0.06)"
              bg="rgba(255,255,255,0.02)"
              color="#5C5C70"
              fontSize="sm"
              fontWeight="semibold"
              letterSpacing="0.02em"
            >
              {name}
            </Box>
          ))}
        </SimpleGrid>

        <Text fontSize={{ base: 'sm', md: 'md' }} color="#A1A1AA" maxW="640px" lineHeight="1.75" fontStyle="italic">
          „Unsere Beta-Nutzer steigerten ihre Klaviyo-Conversion um 18% in 4 Wochen.“
        </Text>
      </VStack>
    </SectionContainer>
  );
}
