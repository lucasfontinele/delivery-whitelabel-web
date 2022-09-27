import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

import type { Offer } from 'types/offer';

type OfferType = {
  offer: Offer;
  quantity: number;
  message?: string;
};

type CartContextType = {
  offers: OfferType[];
  handleAddOffer: (offer: Offer, message: string, quantity: number) => void;
  currentOffer?: Offer;
  setCurrentOffer: (offer: Offer | undefined) => void;
};

type CartProviderType = {
  children: ReactNode;
};

export const CartContext = createContext<CartContextType>(
  {} as CartContextType,
);

export function CartProvider({ children }: CartProviderType) {
  const [offers, setOffers] = useState<OfferType[]>([]);
  const [currentOffer, setCurrentOffer] = useState<Offer | undefined>();

  const handleAddOffer = useCallback(
    (offer: Offer, message: string, quantity = 1) => {
      const prevOffers = [...offers];

      // Check if cart has this offer
      const hasOffer = prevOffers.find(item => item.offer.id === offer.id);

      if (hasOffer) {
        const index = prevOffers.findIndex(
          prev => prev.offer.id === hasOffer.offer.id,
        );

        const item = prevOffers[index];

        item.quantity += 1;

        prevOffers.push(item);

        return;
      }

      prevOffers.push({
        offer,
        quantity,
        message,
      });

      setOffers(prevOffers);
    },
    [offers],
  );

  const value = useMemo<CartContextType>(() => {
    return {
      offers,
      handleAddOffer,
      currentOffer,
      setCurrentOffer,
    };
  }, [offers, handleAddOffer, currentOffer, setCurrentOffer]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
