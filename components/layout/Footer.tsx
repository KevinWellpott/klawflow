'use client';

import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { containerMaxW, sectionPx } from '@/lib/sectionTokens';

const footerLinks = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'AGB', href: '/agb' },
];

export default function Footer() {
  return (
    <Box as="footer" borderTop="none" bg="transparent" py={{ base: 10, md: 14 }} position="relative">
      <Box className="glow-divider" position="absolute" top={0} left={0} right={0} />
      <Container maxW={containerMaxW} px={sectionPx} w="full">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'flex-start', md: 'center' }}
          gap={6}
        >
          <VStack align="flex-start" spacing={2}>
            <Text fontSize="xl" fontWeight="extrabold" letterSpacing="-0.04em" color="white">
              Klawflow
            </Text>
            <Text fontSize="sm" color="#5C5C70" maxW="280px">
              Mehr Umsatz aus Klaviyo – ohne Agentur. Für ambitionierte DTC-Brands.
            </Text>
          </VStack>

          <HStack spacing={{ base: 4, md: 8 }} flexWrap="wrap" align="center">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                as={NextLink}
                href={link.href}
                fontSize="sm"
                color="#5C5C70"
                _hover={{ color: '#D1FE49', textDecoration: 'none' }}
                transition="color 0.2s"
              >
                {link.label}
              </Link>
            ))}
            <HStack spacing={3} pl={{ base: 0, md: 4 }}>
              <Link href="https://twitter.com" aria-label="Twitter" isExternal color="#5C5C70" _hover={{ color: '#D1FE49' }}>
                <FaTwitter size={18} />
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn" isExternal color="#5C5C70" _hover={{ color: '#D1FE49' }}>
                <FaLinkedinIn size={18} />
              </Link>
            </HStack>
          </HStack>
        </Flex>

        <Box className="glow-divider" my={8} />

        <Text fontSize="xs" color="#3A3A4A" textAlign="center">
          © {new Date().getFullYear()} Klawflow. Alle Rechte vorbehalten.
        </Text>
      </Container>
    </Box>
  );
}
