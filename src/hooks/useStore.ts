import { useContext } from 'react';

import { StoreContext } from 'contexts/store';

export function useStore() {
  const context = useContext(StoreContext);

  return context;
}
