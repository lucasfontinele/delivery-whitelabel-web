import { createContext, ReactNode } from 'react';

import type { StoreResponse } from 'types/store';
import { store } from 'constants/mock';

type StoreContext = StoreResponse;

type StoreProvider = {
  children: ReactNode;
};

export const StoreContext = createContext<StoreResponse>(store);

export function StoreProvider({ children }: StoreProvider) {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
