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
    <ChakraAccordionItem>
      <AccordionButton py={5} px={0} _hover={{ bg: 'transparent' }}>
        <Box flex="1" textAlign="left">
          <Text color="white" fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }}>
            {question}
          </Text>
        </Box>
        <AccordionIcon color="gray.400" />
      </AccordionButton>
      <AccordionPanel pb={5} px={0}>
        <Text color="gray.400" fontSize="sm" lineHeight="relaxed">
          {answer}
        </Text>
      </AccordionPanel>
    </ChakraAccordionItem>
  );
}
