import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: 'left' | 'center' | 'right';
  children?: ReactNode | ReactNode[];
  variant: 'outlined' | 'contained';
}
