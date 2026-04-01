'use client';

import {
  Heading,
  Text,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Badge,
  SimpleGrid,
} from '@chakra-ui/react';
import SectionContainer from '../ui/SectionContainer';
import { sectionGapContent, sectionGapHeader, sectionHeadingProps, sectionLeadProps } from '@/lib/sectionTokens';

const ROWS = [
  { label: 'Monatliche Kosten', agentur: '2.000–5.000 €', diy: '89–349 €', klawflow: '89–349 €' },
  { label: 'Setup-Zeit', agentur: '4–8 Wochen', diy: '10+ Stunden', klawflow: '15 Minuten' },
  { label: 'Experten nötig?', agentur: 'Ja', diy: 'Ja (teuer)', klawflow: 'Nein' },
  { label: 'Automatische Optimierung', agentur: 'Monatlich', diy: 'Nie', klawflow: 'Permanent' },
];

function CompareRow({ label, agentur, diy, klawflow }: { label: string; agentur: string; diy: string; klawflow: string }) {
  return (
    <Box className="glass-card" borderRadius="16px" px={3} py={2.5}>
      <Text fontSize="xs" fontWeight="semibold" color="white" mb={2} lineHeight={1.3}>
        {label}
      </Text>
      <SimpleGrid columns={3} gap={2} fontSize="xs">
        <Box minW={0}>
          <Text color="#71717A" fontSize="10px" textTransform="uppercase" letterSpacing="0.04em" mb={0.5}>
            Agentur
          </Text>
          <Text color="#A1A1AA" lineHeight={1.35}>
            {agentur}
          </Text>
        </Box>
        <Box minW={0}>
          <Text color="#71717A" fontSize="10px" textTransform="uppercase" letterSpacing="0.04em" mb={0.5}>
            DIY
          </Text>
          <Text color="#A1A1AA" lineHeight={1.35}>
            {diy}
          </Text>
        </Box>
        <Box minW={0}>
          <Text color="#D1FE49" fontSize="10px" textTransform="uppercase" letterSpacing="0.04em" mb={0.5}>
            Klawflow
          </Text>
          <Text color="white" fontWeight="medium" lineHeight={1.35}>
            {klawflow}
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default function CompareAlternatives() {
  return (
    <SectionContainer minH={{ base: '100dvh', lg: 'auto' }} display="flex" alignItems="center" w="full">
      <VStack spacing={sectionGapContent} align="stretch" w="full">
        <VStack spacing={sectionGapHeader} align="flex-start" w="full" maxW="48rem">
          <Heading as="h2" {...sectionHeadingProps}>
            Agentur oder DIY? Wir sind der dritte Weg
          </Heading>
          <Text {...sectionLeadProps}>
            Gleiche Klaviyo-Rechnung – mehr Output pro Euro und ohne Retainer-Stress.
          </Text>
        </VStack>

        <Box display={{ base: 'block', md: 'none' }} w="full">
          <VStack spacing={2} align="stretch">
            {ROWS.map((row) => (
              <CompareRow key={row.label} {...row} />
            ))}
          </VStack>
        </Box>

        <TableContainer
          className="glass-card"
          display={{ base: 'none', md: 'block' }}
          overflowX="auto"
          borderRadius="xl"
          p={{ base: 2, md: 4 }}
        >
          <Table size="sm" variant="unstyled" sx={{ tableLayout: 'fixed' }}>
            <Thead>
              <Tr>
                <Th color="#71717A" fontSize="xs" textTransform="none" py={3} px={3} w="22%" />
                <Th color="#A1A1AA" fontSize="sm" py={3} px={3} fontWeight="semibold">
                  Agentur
                </Th>
                <Th color="#A1A1AA" fontSize="sm" py={3} px={3} fontWeight="semibold">
                  DIY mit Klaviyo
                </Th>
                <Th color="#D1FE49" fontSize="sm" py={3} px={3} fontWeight="bold">
                  Klawflow
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {ROWS.map((row) => (
                <Tr key={row.label}>
                  <Td color="#71717A" fontSize="xs" py={3} px={3} verticalAlign="top">
                    {row.label}
                  </Td>
                  <Td color="#A1A1AA" fontSize="sm" py={3} px={3}>
                    {row.agentur}
                  </Td>
                  <Td color="#A1A1AA" fontSize="sm" py={3} px={3}>
                    {row.diy}
                  </Td>
                  <Td color="white" fontSize="sm" py={3} px={3} fontWeight="medium">
                    {row.klawflow}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <Box display="flex" justifyContent="center" px={{ base: 0, md: 0 }}>
          <Badge
            px={{ base: 3, md: 4 }}
            py={{ base: 1.5, md: 2 }}
            borderRadius="full"
            bg="rgba(209,254,73,0.12)"
            color="#D1FE49"
            fontSize={{ base: 'xs', md: 'sm' }}
            fontWeight="semibold"
            textAlign="center"
            whiteSpace="normal"
            maxW="100%"
            lineHeight={1.45}
          >
            Contract Buyout: Wir übernehmen die ersten 2 Monate, wenn du von einer Agentur kommst.
          </Badge>
        </Box>
      </VStack>
    </SectionContainer>
  );
}
