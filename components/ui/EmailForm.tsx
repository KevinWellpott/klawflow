'use client';

import { useState } from 'react';
import {
  Stack,
  Input,
  Text,
  Box,
  HStack,
  Icon,
  useToast,
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import Button from './Button';

const EMAIL_REGEX = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;

type FormState = 'idle' | 'loading' | 'error_validation' | 'error_server';

interface EmailFormProps {
  placeholder?: string;
  buttonLabel?: string;
}

export default function EmailForm({
  placeholder = 'deine@email.de',
  buttonLabel = 'Auf die Warteliste',
}: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [serverError, setServerError] = useState('');
  const toast = useToast();
  const isLoading = state === 'loading';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');

    if (!EMAIL_REGEX.test(email.trim())) {
      setState('error_validation');
      return;
    }

    setState('loading');

    // TODO: API-Call für echte Speicherung (Resend / CRM)
    window.setTimeout(() => {
      const simulateServerFailure = Math.random() < 0.1;

      if (simulateServerFailure) {
        setServerError('Server momentan nicht erreichbar. Bitte versuche es in Kürze erneut.');
        setState('error_server');
        return;
      }

      setEmail('');
      setState('idle');
      toast({
        title: 'Du bist auf der Warteliste!',
        description: 'Wir melden uns mit dem nächsten Update.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    }, 500);
  };

  const validationError = state === 'error_validation';
  const serverErrorActive = state === 'error_server';

  return (
    <Box
      as="form"
      className="glass-card"
      onSubmit={handleSubmit}
      w="full"
      maxW="500px"
      p={{ base: 4, md: 5 }}
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={3}
        align={{ base: 'stretch', md: 'center' }}
      >
        <Input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state !== 'loading') setState('idle');
            setServerError('');
          }}
          placeholder={placeholder}
          size="lg"
          flex={1}
          h="52px"
          isDisabled={isLoading}
          aria-label="E-Mail-Adresse"
          isInvalid={validationError}
          _invalid={{ bg: 'rgba(239,68,68,0.12)', boxShadow: 'none' }}
        />
        <Button
          type="submit"
          isLoading={isLoading}
          loadingText="Wird gesendet…"
          flexShrink={0}
          whiteSpace="nowrap"
        >
          {buttonLabel}
        </Button>
      </Stack>

      {validationError && (
        <HStack spacing={2} mt={2} ml={1}>
          <Icon as={WarningIcon} color="red.400" boxSize={3} flexShrink={0} />
          <Text color="red.400" fontSize="sm">
            Bitte korrigiere deine E-Mail-Adresse.
          </Text>
        </HStack>
      )}

      {serverErrorActive && (
        <HStack
          spacing={3}
          mt={3}
          px={4}
          py={3}
          bg="rgba(239,68,68,0.1)"
          borderRadius="xl"
        >
          <Icon as={WarningIcon} color="red.400" boxSize={3.5} flexShrink={0} />
          <Text color="red.400" fontSize="sm">
            {serverError}
          </Text>
        </HStack>
      )}
    </Box>
  );
}
