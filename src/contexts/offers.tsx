import { createContext, ReactNode } from 'react';

import type { OffersResponse } from 'types/offer';
import { offers } from 'constants/mock';

type OffersContextType = OffersResponse[];

type OffersProviderType = {
  children: ReactNode;
};

export const OffersContext = createContext<OffersContextType>(offers);

export function OffersProvider({ children }: OffersProviderType) {
  return (
    <OffersContext.Provider value={offers}>{children}</OffersContext.Provider>
  );
}
