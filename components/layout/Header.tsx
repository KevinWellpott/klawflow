'use client';

import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { containerMaxW } from '@/lib/sectionTokens';

const navLinks = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'AGB', href: '/agb' },
];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      className="glass glass-nav"
      position="sticky"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      w="full"
    >
      <Container maxW={containerMaxW} px={{ base: 4, md: 8 }} w="full">
        <Flex
          align="center"
          justify="space-between"
          gap={{ base: 3, md: 6 }}
          minH={{ base: '64px', md: '72px' }}
          py={{ base: 2.5, md: 3 }}
        >
          <Link
            as={NextLink}
            href="/"
            display="flex"
            alignItems="center"
            _hover={{ opacity: 0.9 }}
            flexShrink={0}
          >
            <Box
              as="img"
              src="/logo.svg"
              alt="Klawflow"
              h={{ base: '44px', sm: '48px', md: '52px' }}
              w="auto"
              maxW={{ base: 'min(78vw, 280px)', md: '320px' }}
              objectFit="contain"
              objectPosition="left center"
              draggable={false}
            />
          </Link>

          <HStack
            as="nav"
            spacing={{ base: 0, md: 1 }}
            display={{ base: 'none', lg: 'flex' }}
            flex="1"
            justify="center"
            aria-label="Rechtliches"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                as={NextLink}
                href={link.href}
                px={3}
                py={2}
                fontSize="sm"
                fontWeight="medium"
                color="gray.400"
                letterSpacing="-0.01em"
                transition="color 0.2s ease"
                _hover={{ color: 'white', textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            ))}
          </HStack>

          <HStack spacing={3} flexShrink={0}>
            <Link
              as={NextLink}
              href="/warteliste"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              minH="42px"
              px={{ base: 4, md: 5 }}
              py={2}
              borderRadius="full"
              bg="#D1FE49"
              color="#0a0a0a"
              fontSize="sm"
              fontWeight="bold"
              letterSpacing="-0.02em"
              lineHeight={1}
              _hover={{
                bg: '#c5f030',
                textDecoration: 'none',
                boxShadow: '0 0 20px rgba(209,254,73,0.28)',
              }}
              transition="all 0.2s ease"
            >
              Warteliste
            </Link>

            <IconButton
              aria-label="Menü öffnen"
              icon={<HamburgerIcon boxSize={5} />}
              variant="ghost"
              color="gray.400"
              display={{ base: 'flex', lg: 'none' }}
              minW="44px"
              minH="44px"
              borderRadius="lg"
              onClick={onOpen}
              _hover={{ color: 'white', bg: 'rgba(255,255,255,0.06)' }}
            />
          </HStack>
        </Flex>
      </Container>

      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay bg="blackAlpha.700" backdropFilter="blur(6px)" />
        <DrawerContent className="glass" bg="transparent" boxShadow="none" maxW="320px">
          <DrawerCloseButton color="white" top={4} right={4} />
          <DrawerBody pt={16} px={6} pb={10}>
            <Text fontSize="xs" color="#71717A" textTransform="uppercase" letterSpacing="0.12em" mb={6}>
              Navigation
            </Text>
            <VStack spacing={1} align="stretch">
              <Link
                as={NextLink}
                href="/warteliste"
                display="block"
                py={3}
                fontSize="lg"
                fontWeight="semibold"
                color="white"
                _hover={{ color: '#D1FE49', textDecoration: 'none' }}
                onClick={onClose}
              >
                Warteliste
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  as={NextLink}
                  href={link.href}
                  display="block"
                  py={3}
                  fontSize="md"
                  color="gray.400"
                  fontWeight="medium"
                  _hover={{ color: '#D1FE49', textDecoration: 'none' }}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
