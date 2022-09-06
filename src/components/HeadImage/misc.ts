import { ReactNode } from 'react';

export type HeadImageProps = {
  imageUrl: string;
  handleBackButton?: () => void;
  rightContent?: ReactNode;
  message?: string;
};
