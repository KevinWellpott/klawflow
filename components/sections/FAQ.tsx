'use client';

import { Box, Heading, Text, VStack, Accordion } from '@chakra-ui/react';
import AccordionItem from '../ui/AccordionItem';
import SectionContainer from '../ui/SectionContainer';
import { sectionGapContent, sectionGapHeader, sectionHeadingProps } from '@/lib/sectionTokens';

const faqs = [
  {
    question: 'Wann ist der Launch?',
    answer:
      'Geplanter Launch Q2 2026. Early Access exklusiv für Wartelisten-Mitglieder – du erhältst den genauen Termin per E-Mail.',
  },
  {
    question: 'Was kostet das?',
    answer:
      'Geplant: Core 89 €, Growth 189 €, Elite 349 € pro Monat (zzgl. MwSt.). In der Beta sind alle Features für Wartelisten-Teilnehmer kostenlos testbar – Details vor Launch.',
  },
  {
    question: 'Brauche ich technische Vorkenntnisse?',
    answer:
      'Nein. 1-Klick-Connect zu Klaviyo, vorgebaute Flow-Templates und geführte Next-Best-Actions – ohne Entwickler.',
  },
  {
    question: 'Kann ich jederzeit kündigen?',
    answer:
      'Ja. Monatlich kündbar, keine Mindestlaufzeit, keine Kündigungsfristen aus dem Hut.',
  },
  {
    question: 'Wie sicher sind meine Daten?',
    answer:
      'DSGVO-konform, verschlüsselte Verbindung zu Klaviyo, Hosting in der EU. Kein Weiterverkauf von Daten.',
  },
  {
    question: 'Was passiert nach der Anmeldung?',
    answer:
      'Du erhältst eine Bestätigungsmail. Wir melden uns mit Launch-Datum, Early-Access-Zugang und optionalem Onboarding-Call.',
  },
];

export default function FAQ() {
  return (
    <SectionContainer>
      <VStack spacing={sectionGapContent} align="stretch" w="full">
        <VStack spacing={sectionGapHeader} align="flex-start" w="full" maxW="48rem">
          <Text
            fontSize="xs"
            color="rgba(209,254,73,0.85)"
            fontWeight="semibold"
            letterSpacing="0.1em"
            textTransform="uppercase"
          >
            FAQ
          </Text>
          <Heading as="h2" {...sectionHeadingProps}>
            Häufige Fragen
          </Heading>
        </VStack>

        <Accordion allowToggle w="full" maxW="48rem">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </Accordion>
      </VStack>
    </SectionContainer>
  );
}
