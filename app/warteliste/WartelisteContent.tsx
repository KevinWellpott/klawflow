'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Button from '../../components/ui/Button';
import { containerMaxW, sectionPx } from '@/lib/sectionTokens';

interface Props {
  email: string;
  isVerified: boolean;
  hasParams: boolean;
}

const nextSteps = [
  {
    step: '01',
    title: 'Wir bereiten deinen Zugang vor',
    description:
      'Wir richten deinen personalisierten Klawflow-Account vor und melden uns, sobald dein Platz frei ist.',
  },
  {
    step: '02',
    title: 'Du bekommst eine Onboarding-Mail',
    description:
      'Wir senden dir alle nötigen Infos: Setup-Anleitung, erste Flow-Templates und deinen persönlichen Onboarding-Link.',
  },
  {
    step: '03',
    title: 'Erster Umsatz in unter 30 Minuten',
    description:
      'Verbinde dein CRM, aktiviere deinen ersten Flow – und sieh wie Klawflow für dich arbeitet.',
  },
];

export default function WartelisteContent({ email, isVerified, hasParams }: Props) {
  if (hasParams && !isVerified) {
    return (
      <Box as="main" minH="80vh" display="flex" alignItems="center">
        <Container maxW={containerMaxW} px={sectionPx} w="full">
          <Box maxW="560px" mx="auto" w="full">
          <VStack spacing={6} textAlign="center">
            <Box
              bg="rgba(239,68,68,0.1)"
              border="1px solid rgba(239,68,68,0.2)"
              borderRadius="2xl"
              p={10}
              w="full"
            >
              <Icon as={WarningIcon} color="red.400" boxSize={10} mb={4} />
              <Heading as="h1" fontSize="xl" color="white" mb={3}>
                Link ungültig oder abgelaufen
              </Heading>
              <Text color="gray.400" fontSize="sm" lineHeight="relaxed">
                Dieser Bestätigungslink ist nicht mehr gültig (Links laufen nach 24 Stunden ab).
                Bitte trage dich erneut auf der Startseite ein.
              </Text>
            </Box>
            <NextLink href="/" passHref>
              <Button variant="secondary" size="md">
                Zurück zur Startseite
              </Button>
            </NextLink>
          </VStack>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box as="main" py={{ base: '3rem', sm: '4rem', md: '6rem' }}>
      <Container maxW={containerMaxW} px={sectionPx} w="full">
        <Box maxW="680px" mx="auto" w="full">
        <VStack spacing={12}>

          {/* Success Header */}
          <VStack spacing={5} textAlign="center">
            <Box
              bg="rgba(34,197,94,0.1)"
              border="1px solid rgba(34,197,94,0.2)"
              borderRadius="full"
              p={4}
              display="inline-flex"
            >
              <Icon as={CheckCircleIcon} color="green.400" boxSize={8} />
            </Box>

            <VStack spacing={3}>
              <Heading
                as="h1"
                fontSize={{ base: '2xl', md: '3xl' }}
                color="white"
                fontWeight="extrabold"
                letterSpacing="-0.02em"
              >
                {isVerified
                  ? 'Alles bestätigt – du bist auf der Liste!'
                  : 'Du bist auf der Warteliste!'}
              </Heading>

              {email && (
                <Text fontSize="sm" color="gray.500">
                  Bestätigt für{' '}
                  <Box as="span" color="gray.300" fontWeight="medium">
                    {email}
                  </Box>
                </Text>
              )}

              <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.400" maxW="500px" lineHeight="relaxed">
                {isVerified
                  ? 'Deine E-Mail-Adresse wurde erfolgreich bestätigt. Wir informieren dich als einer der Ersten, sobald dein Zugang bereit ist.'
                  : 'Wir haben dir eine Bestätigungsmail geschickt. Bitte klicke auf den Link in der Mail, um deine Anmeldung abzuschließen.'}
              </Text>
            </VStack>
          </VStack>

          <Divider borderColor="rgba(255,255,255,0.06)" />

          {/* Next Steps */}
          <VStack spacing={8} w="full" align="flex-start">
            <Heading as="h2" fontSize="lg" color="white" fontWeight="semibold">
              So geht es weiter
            </Heading>

            <VStack spacing={6} w="full">
              {nextSteps.map((s) => (
                <HStack key={s.step} align="flex-start" spacing={5} w="full">
                  <Box
                    flexShrink={0}
                    w="40px"
                    h="40px"
                    bg="rgba(209,254,73,0.1)"
                    border="1px solid rgba(209,254,73,0.2)"
                    borderRadius="xl"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="xs"
                    fontWeight="extrabold"
                    color="#D1FE49"
                  >
                    {s.step}
                  </Box>
                  <VStack align="flex-start" spacing={1}>
                    <Text color="white" fontWeight="semibold" fontSize="sm">
                      {s.title}
                    </Text>
                    <Text color="gray.400" fontSize="sm" lineHeight="relaxed">
                      {s.description}
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>
          </VStack>

          <Divider borderColor="rgba(255,255,255,0.06)" />

          {/* CTA Back */}
          <VStack spacing={3} textAlign="center">
            <Text fontSize="xs" color="gray.600">
              Keine Kreditkarte nötig · Kündigung jederzeit möglich · DSGVO-konform
            </Text>
            <NextLink href="/" passHref>
              <Button variant="ghost" size="sm">
                ← Zurück zur Startseite
              </Button>
            </NextLink>
          </VStack>

        </VStack>
        </Box>
      </Container>
    </Box>
  );
}
