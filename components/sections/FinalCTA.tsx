'use client';

import { Box, Heading, Text, VStack, HStack, Progress } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import EmailForm from '../ui/EmailForm';
import SectionContainer from '../ui/SectionContainer';
import { sectionGapContent, sectionHeadingProps } from '@/lib/sectionTokens';

export default function FinalCTA() {
  return (
    <SectionContainer>
      <VStack spacing={sectionGapContent} align="stretch" textAlign="left" maxW="640px" mx="auto" w="full">
        <Heading
          as="h2"
          {...sectionHeadingProps}
          fontWeight="extrabold"
          className="gradient-text"
        >
          Werde einer der ersten 500 Nutzer
        </Heading>

        <Box w="full">
          <HStack justify="space-between" mb={2}>
            <Text fontSize="sm" color="#A1A1AA">
              Plätze Early Access
            </Text>
            <Text fontSize="sm" color="#D1FE49" fontWeight="semibold">
              342 / 500 vergeben
            </Text>
          </HStack>
          <Progress
            value={68.4}
            size="sm"
            borderRadius="full"
            bg="rgba(255,255,255,0.08)"
            sx={{
              '& > div': { bg: '#D1FE49' },
            }}
          />
        </Box>

        <Text fontSize={{ base: 'sm', md: 'md' }} color="#A1A1AA" lineHeight={1.5}>
          Frühe Nutzer erhalten{' '}
          <Box as="span" color="white" fontWeight="semibold">
            3 Monate kostenlos
          </Box>{' '}
          + persönlichen Onboarding-Call.
        </Text>

        <Box w="full" display="flex" justifyContent="center">
          <EmailForm placeholder="deine@firma.de" buttonLabel="Jetzt vormerken" />
        </Box>

        <HStack spacing={2} justify="flex-start" flexWrap="wrap">
          <CheckIcon boxSize={3} color="#D1FE49" />
          <Text fontSize="xs" color="#71717A">
            Keine Kreditkarte. Kein Spam. Jederzeit kündbar.
          </Text>
        </HStack>
      </VStack>
    </SectionContainer>
  );
}
