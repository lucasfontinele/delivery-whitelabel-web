import { ReactNode } from 'react';

export type MenuSectionProps = {
  title: string;
  description?: string;
  mandatory: boolean;
  children: ReactNode;
};
