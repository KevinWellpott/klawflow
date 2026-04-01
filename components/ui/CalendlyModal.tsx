'use client';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
} from '@chakra-ui/react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  url?: string;
}

export default function CalendlyModal({
  isOpen,
  onClose,
  url = 'https://calendly.com/your-link',
}: CalendlyModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay bg="rgba(0,0,0,0.8)" backdropFilter="blur(8px)" sx={{ WebkitBackdropFilter: 'blur(8px)' }} />
      <ModalContent borderRadius="2xl" mx={4} overflow="hidden">
        <ModalHeader color="white" fontSize="lg" fontWeight="bold" pt={6} pb={0}>
          Kostenlose Strategie-Session buchen
        </ModalHeader>
        <ModalCloseButton color="gray.400" top={4} right={4} />
        <ModalBody p={0} pt={4}>
          <Box
            as="iframe"
            src={`${url}?embed_type=Inline&hide_gdpr_banner=1`}
            w="full"
            h="600px"
            border="none"
            title="Calendly Terminbuchung"
            loading="lazy"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
