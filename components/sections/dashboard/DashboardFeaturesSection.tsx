'use client';

import { Box, Container, Heading, Text, VStack, Grid } from '@chakra-ui/react';
import DashboardFeatureCard from '../../ui/dashboard/DashboardFeatureCard';
import {
  IconAI,
  IconDashboard,
  IconFlow,
  IconIntegration,
  IconShield,
  IconTeam,
} from '../../ui/dashboard/DashboardIcons';
import { containerMaxW, sectionPx } from '@/lib/sectionTokens';

const FEATURES = [
  {
    icon: <IconDashboard />,
    title: 'Live-Dashboard',
    description:
      'Echtzeit-Einblick in aktive Flows, Kundenreaktionen und generierten Zusatzumsatz – übersichtlich auf einem Blick.',
  },
  {
    icon: <IconAI />,
    title: 'KI-Analyse & Scoring',
    description:
      'Unser Algorithmus analysiert deine Kundendaten kontinuierlich und berechnet automatisch den nächsten besten Schritt.',
  },
  {
    icon: <IconFlow />,
    title: 'Flow-Automatisierung',
    description:
      'Bewährte Upselling- und Cross-Selling-Sequenzen – einfach aktivieren, KI passt Texte und Timing automatisch an.',
  },
  {
    icon: <IconIntegration />,
    title: 'CRM-Integration',
    description:
      'Verbinde HubSpot, Pipedrive, Salesforce u. v. m. in wenigen Minuten. Kein Entwickler, kein Aufwand.',
  },
  {
    icon: <IconTeam />,
    title: 'Team-Collaboration',
    description:
      'Flows zuweisen, Segmente kommentieren, gemeinsam mit dem Sales-Team an einer Quelle arbeiten.',
  },
  {
    icon: <IconShield />,
    title: 'DSGVO & Sicherheit',
    description:
      'Alle Daten auf EU-Servern, DSGVO-konform seit Tag 1. Enterprise-Verschlüsselung und Role-based Access inklusive.',
  },
];

export default function DashboardFeaturesSection() {
  return (
    <Box as="section" py={{ base: '5rem', md: '7rem', lg: '9rem' }}>
      <Container maxW={containerMaxW} px={sectionPx} w="full">
        <VStack spacing={{ base: 14, md: 18 }}>
          <VStack spacing={4} textAlign="center" maxW="600px" mx="auto">
            <Text
              fontSize="xs"
              color="rgba(209,254,73,0.8)"
              fontWeight="semibold"
              letterSpacing="0.1em"
              textTransform="uppercase"
            >
              Funktionen
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              color="white"
              fontWeight="bold"
              letterSpacing="-0.04em"
              lineHeight={1.1}
            >
              Alles, was du brauchst. In einer Plattform.
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }} color="#9494A8" lineHeight="1.75">
              Klawflow vereint alle Werkzeuge für systematisches Bestandskunden-Wachstum – sauber integriert,
              sofort einsatzbereit.
            </Text>
          </VStack>

          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={5}
            w="full"
          >
            {FEATURES.map((f, i) => (
              <DashboardFeatureCard
                key={f.title}
                icon={f.icon}
                title={f.title}
                description={f.description}
                index={i}
              />
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}
