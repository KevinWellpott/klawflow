'use client';

import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
  Divider,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const footerLinks = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'AGB', href: '/agb' },
];

export default function Footer() {
  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor="rgba(255,255,255,0.06)"
      bg="#0A0A0A"
      py={{ base: 10, md: 14 }}
    >
      <Container maxW="1200px" px={{ base: 5, md: 8 }}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'flex-start', md: 'center' }}
          gap={6}
        >
          <VStack align="flex-start" spacing={2}>
            <Text fontSize="xl" fontWeight="extrabold" color="white" letterSpacing="-0.02em">
              Klawflow
            </Text>
            <Text fontSize="sm" color="gray.500">
              Mehr Revenue aus deinen bestehenden Kunden.
            </Text>
          </VStack>

          <HStack spacing={{ base: 4, md: 8 }} flexWrap="wrap">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                as={NextLink}
                href={link.href}
                fontSize="sm"
                color="gray.500"
                _hover={{ color: 'white', textDecoration: 'none' }}
                transition="color 0.2s"
              >
                {link.label}
              </Link>
            ))}
          </HStack>
        </Flex>

        <Divider borderColor="rgba(255,255,255,0.06)" my={8} />

        <Text fontSize="xs" color="gray.600" textAlign="center">
          © {new Date().getFullYear()} Klawflow. Alle Rechte vorbehalten.
        </Text>
      </Container>
    </Box>
  );
}
