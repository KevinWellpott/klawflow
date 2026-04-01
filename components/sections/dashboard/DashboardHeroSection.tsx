'use client';

import { Box, Container, Heading, Text, VStack, HStack } from '@chakra-ui/react';
import { motion, useReducedMotion } from 'framer-motion';
import NextLink from 'next/link';
import Button from '../../ui/Button';
import DashboardPreviewShell from '../../ui/dashboard/DashboardPreviewShell';
import { containerMaxW, sectionPx } from '@/lib/sectionTokens';

export default function DashboardHeroSection() {
  const reduced = useReducedMotion();

  return (
    <Box
      as="section"
      minH="100vh"
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
      py={{ base: 24, md: 20 }}
      bg="transparent"
    >
      <Box
        position="absolute"
        top="-8%"
        left="50%"
        transform="translateX(-50%)"
        w={{ base: '600px', md: '1100px' }}
        h={{ base: '600px', md: '1100px' }}
        bg="radial-gradient(circle, rgba(209,254,73,0.1) 0%, rgba(209,254,73,0.02) 50%, transparent 70%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="0"
        right="-5%"
        w="500px"
        h="500px"
        bg="radial-gradient(circle, rgba(255,255,255,0.035) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW={containerMaxW} px={sectionPx} w="full" position="relative" zIndex={1}>
        <VStack spacing={0} align="center">
          <motion.div
            style={{ width: '100%', maxWidth: 800 }}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <VStack spacing={{ base: 6, md: 8 }} align="center" textAlign="center" maxW="800px" mx="auto">
              <HStack spacing={2} px={4} py="7px" className="badge-gradient">
                <Box
                  w="6px"
                  h="6px"
                  bg="#D1FE49"
                  borderRadius="full"
                  boxShadow="0 0 8px rgba(209,254,73,0.9)"
                />
                <Text fontSize="xs" color="rgba(255,255,255,0.6)" fontWeight="medium" letterSpacing="0.07em">
                  LIVE DASHBOARD · JETZT IN BETA
                </Text>
              </HStack>

              <Heading
                as="h1"
                fontSize={{ base: '2.6rem', md: '3.8rem', lg: '4.8rem' }}
                fontWeight="extrabold"
                lineHeight={1.03}
                letterSpacing="-0.04em"
                className="gradient-text"
              >
                Dein Revenue-Dashboard.{' '}
                <Box
                  as="span"
                  display={{ base: 'block', md: 'inline' }}
                  sx={{
                    background: 'linear-gradient(135deg, #C8F06A 0%, #D1FE49 50%, #8BC91A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  In Echtzeit.
                </Box>
              </Heading>

              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="#9494A8"
                maxW="560px"
                lineHeight="1.75"
                letterSpacing="-0.01em"
              >
                Sieh auf einen Blick, welche Kunden kaufbereit sind, welche Flows performen und wie viel
                Zusatzumsatz du gerade generierst.
              </Text>

              <HStack spacing={3} flexWrap="wrap" justify="center">
                <Box as={NextLink} href="/">
                  <Button variant="primary" size="md">
                    Früh­zugang sichern
                  </Button>
                </Box>
                <Button variant="secondary" size="md">
                  Demo ansehen
                </Button>
              </HStack>
            </VStack>
          </motion.div>

          <DashboardPreviewShell />
        </VStack>
      </Container>
    </Box>
  );
}
