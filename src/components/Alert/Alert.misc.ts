import { ReactNode } from 'react';

export type AlertProps = {
  type: 'success' | 'danger' | 'info' | 'warning' | 'default';
  message: ReactNode;
};
