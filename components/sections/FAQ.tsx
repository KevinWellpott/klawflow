'use client';

import { Box, Container, Heading, Text, VStack, Accordion } from '@chakra-ui/react';
import AccordionItem from '../ui/AccordionItem';

const faqs = [
  {
    question: 'Wann kann ich mit Klawflow starten?',
    answer:
      'Klawflow befindet sich aktuell in der Early-Access-Phase. Wenn du dich jetzt einträgst, erhältst du bevorzugten Zugang sobald wir den nächsten Platz freigeben. Wir informieren dich per E-Mail über deinen Starttermin.',
  },
  {
    question: 'Was kostet Klawflow?',
    answer:
      'Early-Access-Mitglieder erhalten Klawflow zu einem vergünstigten Einführungspreis. Die genauen Konditionen erfährst du bei der Onboarding-Session. Keine versteckten Kosten, kein langfristiger Vertrag.',
  },
  {
    question: 'Brauche ich technische Vorkenntnisse?',
    answer:
      'Nein. Klawflow ist für Unternehmer und Vertriebsteams konzipiert, nicht für Entwickler. Das Setup dauert unter 30 Minuten – wir führen dich Schritt für Schritt durch die Einrichtung.',
  },
  {
    question: 'Welche CRM-Systeme werden unterstützt?',
    answer:
      'Klawflow lässt sich mit den gängigsten CRM-Systemen verbinden (HubSpot, Pipedrive, Salesforce u. a.) sowie über CSV-Import für alle anderen. Weitere Integrationen sind in Planung.',
  },
  {
    question: 'Kann ich Klawflow jederzeit kündigen?',
    answer:
      'Ja. Es gibt keine Mindestvertragslaufzeit. Du kannst deinen Account monatlich kündigen – ohne Angabe von Gründen, ohne Ausfallgebühren.',
  },
  {
    question: 'Wie sicher sind meine Kundendaten?',
    answer:
      'Alle Daten werden DSGVO-konform auf europäischen Servern verarbeitet und gespeichert. Wir verkaufen keine Daten an Dritte und arbeiten mit modernen Verschlüsselungsstandards.',
  },
];

export default function FAQ() {
  return (
    <Box as="section" py={{ base: '4rem', md: '6rem', lg: '8rem' }}>
      <Container maxW="1200px" px={{ base: 5, md: 8 }}>
        <VStack spacing={{ base: 10, md: 14 }}>
          {/* Header */}
          <VStack spacing={4} textAlign="center" maxW="600px" mx="auto">
            <Text fontSize="xs" color="#7C6FFF" fontWeight="semibold" letterSpacing="0.1em" textTransform="uppercase">
              FAQ
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              color="white"
              fontWeight="bold"
              letterSpacing="-0.02em"
              lineHeight={1.15}
            >
              Häufige Fragen
            </Heading>
          </VStack>

          {/* Accordion */}
          <Accordion allowToggle w="full" maxW="760px" mx="auto">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </Accordion>
        </VStack>
      </Container>
    </Box>
  );
}
