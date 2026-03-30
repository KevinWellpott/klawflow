'use client';

import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

interface ButtonProps extends Omit<ChakraButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent';
}

export default function Button({
  variant = 'primary',
  size = 'lg',
  children,
  ...props
}: ButtonProps) {
  return (
    <ChakraButton variant={variant} size={size} {...props}>
      {children}
    </ChakraButton>
  );
}
