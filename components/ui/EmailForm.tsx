'use client';

import { useState } from 'react';
import {
  Stack,
  Input,
  Text,
  Box,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import Button from './Button';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = 'idle' | 'loading' | 'success' | 'error_validation' | 'error_server';

interface EmailFormProps {
  placeholder?: string;
  buttonLabel?: string;
}

export default function EmailForm({
  placeholder = 'deine@email.de',
  buttonLabel = 'Früh­zugang sichern',
}: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [serverError, setServerError] = useState('');

  const isLoading = state === 'loading';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');

    // Pfad B: Client-seitige Validierung
    if (!EMAIL_REGEX.test(email.trim())) {
      setState('error_validation');
      return;
    }

    setState('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Pfad B: Server-Fehler
        setServerError(
          data?.error ?? 'Server momentan nicht erreichbar. Bitte versuche es in Kürze erneut.'
        );
        setState('error_server');
        return;
      }

      // Pfad A: Erfolg
      setEmail('');
      setState('success');
    } catch {
      // Pfad B: Netzwerk / Server down
      setServerError('Server momentan nicht erreichbar. Bitte versuche es in Kürze erneut.');
      setState('error_server');
    }
  };

  // Pfad A: Erfolgsmeldung
  if (state === 'success') {
    return (
      <Box
        px={{ base: 5, md: 7 }}
        py={4}
        bg="rgba(34,197,94,0.08)"
        border="1px solid rgba(34,197,94,0.25)"
        borderRadius="2xl"
        display="inline-flex"
        alignItems="center"
        gap={3}
        maxW="500px"
        w="full"
      >
        <Box
          w={2}
          h={2}
          bg="#22C55E"
          borderRadius="full"
          flexShrink={0}
          boxShadow="0 0 6px #22C55E"
        />
        <Text color="#22C55E" fontWeight="semibold" fontSize="sm" lineHeight="snug">
          Bestätigungsmail verschickt – bitte prüfe dein Postfach und klicke den Link.
        </Text>
      </Box>
    );
  }

  const validationError = state === 'error_validation';
  const serverErrorActive = state === 'error_server';

  return (
    <Box as="form" onSubmit={handleSubmit} w="full" maxW="500px">
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
            if (state !== 'idle') setState('idle');
            setServerError('');
          }}
          placeholder={placeholder}
          size="lg"
          flex={1}
          h="52px"
          isDisabled={isLoading}
          aria-label="E-Mail-Adresse"
          isInvalid={validationError}
          borderColor={validationError ? 'red.500' : undefined}
          _invalid={{ borderColor: 'red.500', boxShadow: '0 0 0 1px var(--chakra-colors-red-500)' }}
        />
        <Button
          type="submit"
          isLoading={isLoading}
          loadingText="Wird eingetragen…"
          flexShrink={0}
          whiteSpace="nowrap"
        >
          {buttonLabel}
        </Button>
      </Stack>

      {/* Pfad B: Validierungsfehler */}
      {validationError && (
        <HStack spacing={2} mt={2} ml={1}>
          <Icon as={WarningIcon} color="red.400" boxSize={3} flexShrink={0} />
          <Text color="red.400" fontSize="sm">
            Bitte korrigiere deine E-Mail-Adresse.
          </Text>
        </HStack>
      )}

      {/* Pfad B: Server-Fehler */}
      {serverErrorActive && (
        <HStack
          spacing={3}
          mt={3}
          px={4}
          py={3}
          bg="rgba(239,68,68,0.08)"
          border="1px solid rgba(239,68,68,0.2)"
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
