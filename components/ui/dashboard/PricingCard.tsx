'use client';

import { Box, Heading, Text, VStack, HStack } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { motion, useReducedMotion } from 'framer-motion';
import Button from '../Button';

interface PricingCardProps {
  tier: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
  index?: number;
}

export default function PricingCard({
  tier,
  price,
  period,
  description,
  features,
  featured = false,
  cta,
  index = 0,
}: PricingCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{ height: '100%' }}
    >
      <Box
        bg={featured ? 'rgba(209,254,73,0.08)' : 'rgba(255,255,255,0.03)'}
        border="none"
        borderRadius="24px"
        p={{ base: 6, md: 8 }}
        position="relative"
        overflow="hidden"
        boxShadow={
          featured ? '0 0 48px rgba(209,254,73,0.12)' : '0 12px 40px rgba(0,0,0,0.25)'
        }
        transition="all 0.25s ease"
        h="full"
        _hover={
          !featured
            ? {
                bg: 'rgba(255,255,255,0.05)',
                boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
              }
            : {}
        }
      >
        {featured && (
          <>
            <Box
              position="absolute"
              top="-80px"
              right="-80px"
              w="250px"
              h="250px"
              bg="radial-gradient(circle, rgba(209,254,73,0.18) 0%, transparent 70%)"
              pointerEvents="none"
            />
            <Box
              position="absolute"
              top={0}
              left="50%"
              transform="translateX(-50%)"
              px={4}
              py="5px"
              bg="#D1FE49"
              borderBottomRadius="10px"
            >
              <Text
                fontSize="xs"
                color="#000000"
                fontWeight="semibold"
                letterSpacing="0.07em"
                whiteSpace="nowrap"
              >
                BELIEBTESTE WAHL
              </Text>
            </Box>
          </>
        )}

        <VStack align="flex-start" spacing={6} mt={featured ? 8 : 0} position="relative" zIndex={1}>
          <Box>
            <Text
              fontSize="xs"
              color={featured ? '#BEE890' : '#9494A8'}
              fontWeight="semibold"
              letterSpacing="0.08em"
              textTransform="uppercase"
            >
              {tier}
            </Text>
            <HStack align="baseline" spacing={1} mt={2}>
              <Text
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="extrabold"
                letterSpacing="-0.04em"
                color="white"
              >
                {price}
              </Text>
              {period && <Text fontSize="sm" color="#5C5C70">{period}</Text>}
            </HStack>
            <Text fontSize="sm" color="#9494A8" mt={2} lineHeight="1.65">
              {description}
            </Text>
          </Box>

          <Box w="full" h="1px" bg={featured ? 'rgba(209,254,73,0.2)' : 'rgba(255,255,255,0.06)'} />

          <VStack align="flex-start" spacing={3} w="full">
            {features.map((f, i) => (
              <HStack key={i} spacing={3} align="flex-start">
                <Box
                  w="18px"
                  h="18px"
                  mt="1px"
                  flexShrink={0}
                  bg={featured ? 'rgba(209,254,73,0.2)' : 'rgba(255,255,255,0.05)'}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <CheckIcon boxSize={2.5} color={featured ? '#BEE890' : '#9494A8'} />
                </Box>
                <Text
                  fontSize="sm"
                  color={featured ? 'rgba(255,255,255,0.78)' : '#9494A8'}
                  lineHeight="1.55"
                >
                  {f}
                </Text>
              </HStack>
            ))}
          </VStack>

          <Button variant={featured ? 'accent' : 'secondary'} size="md" w="full" justifyContent="center" mt={2}>
            {cta}
          </Button>
        </VStack>
      </Box>
    </motion.div>
  );
}
