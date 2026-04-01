'use client';

import {
  AccordionItem as ChakraAccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Box,
} from '@chakra-ui/react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

export default function AccordionItem({ question, answer }: AccordionItemProps) {
  return (
    <ChakraAccordionItem
      className="glass"
      border="none"
      borderRadius="lg"
      mb={3}
      overflow="hidden"
    >
      <AccordionButton py={5} px={{ base: 4, md: 5 }} _hover={{ bg: 'rgba(255,255,255,0.03)' }}>
        <Box flex="1" textAlign="left">
          <Text color="white" fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }}>
            {question}
          </Text>
        </Box>
        <AccordionIcon color="gray.400" />
      </AccordionButton>
      <AccordionPanel pb={5} px={{ base: 4, md: 5 }} pt={0}>
        <Text color="gray.400" fontSize="sm" lineHeight="relaxed">
          {answer}
        </Text>
      </AccordionPanel>
    </ChakraAccordionItem>
  );
}
