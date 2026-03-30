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
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      borderBottom="1px solid"
      borderColor="rgba(255,255,255,0.06)"
      bg="rgba(10,10,10,0.85)"
      sx={{
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <Container maxW="1200px" px={{ base: 5, md: 8 }}>
        <Flex h="64px" align="center" justify="space-between">
          <Link as={NextLink} href="/" _hover={{ textDecoration: 'none' }}>
            <Text
              fontSize="xl"
              fontWeight="extrabold"
              color="white"
              letterSpacing="-0.02em"
            >
              Klawflow
            </Text>
          </Link>

          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                as={NextLink}
                href={link.href}
                fontSize="sm"
                color="gray.400"
                fontWeight="medium"
                _hover={{ color: 'white', textDecoration: 'none' }}
                transition="color 0.2s"
              >
                {link.label}
              </Link>
            ))}
          </HStack>

          <IconButton
            aria-label="Menü öffnen"
            icon={<HamburgerIcon />}
            variant="ghost"
            color="gray.400"
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            _hover={{ color: 'white', bg: 'transparent' }}
          />
        </Flex>
      </Container>

      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent bg="#111111" borderLeft="1px solid rgba(255,255,255,0.08)">
          <DrawerCloseButton color="white" />
          <DrawerBody pt={16}>
            <VStack spacing={6} align="flex-start">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  as={NextLink}
                  href={link.href}
                  fontSize="lg"
                  color="gray.300"
                  fontWeight="medium"
                  _hover={{ color: 'white', textDecoration: 'none' }}
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
