import { useContext } from 'react';

import { OffersContext } from 'contexts/offers';

export function useOffers() {
  const context = useContext(OffersContext);

  return context;
}
