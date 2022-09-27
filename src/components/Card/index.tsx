import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from 'hooks/useCart';
import { useOffers } from 'hooks/useOffers';
import QuantityCounter from 'components/QuantityCounter';
import formatPrice from 'utils/format-price';
import { ROUTES } from 'constants/routes';

import * as S from './styles';

export type CardProps = {
  name: string;
  description: string;
  price: number;
  promotionalPrice?: number;
  image: string;
  hasCounter?: boolean;
  offerId: string;
  counter?: number;
  hasNavigation?: boolean;
};

const Card = ({
  description,
  image,
  name,
  price,
  promotionalPrice,
  hasCounter,
  offerId,
  counter = 0,
  hasNavigation = true,
}: CardProps) => {
  const navigate = useNavigate();
  const { setCurrentOffer } = useCart();
  const offersResponse = useOffers();
  const [quantity, setQuantity] = useState(counter);

  const handleClick = useCallback(() => {
    if (!navigate || !setCurrentOffer || !offersResponse || !hasNavigation)
      return;

    const foundOffer = offersResponse.map(group =>
      group.offers.find(item => item.id === offerId),
    );

    if (!foundOffer[0]) return;

    setCurrentOffer(foundOffer[0]);
    navigate(`/${ROUTES.PRODUCT.REGISTER}`);
  }, [navigate, setCurrentOffer, offersResponse, offerId, hasNavigation]);

  // TODO: improve decrement and increment functions
  const handleIncrement = () => {
    setQuantity(current => {
      const newValue = current + 1;

      return newValue;
    });
  };

  const handleDecrement = () => {
    setQuantity(current => {
      if (current <= 0) {
        return 0;
      }

      const newValue = current - 1;

      return newValue;
    });
  };

  return (
    <S.WrapperLink onClick={handleClick}>
      <S.Wrapper>
        <S.Header>
          <S.Name>{name}</S.Name>
          <S.Description>{description}</S.Description>
          <S.BuyBox>
            <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
            {!!promotionalPrice && (
              <S.Price isPromotional>{formatPrice(price)}</S.Price>
            )}
          </S.BuyBox>
          {hasCounter && (
            <S.CounterContainer>
              <QuantityCounter
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                counter={quantity}
              />
            </S.CounterContainer>
          )}
        </S.Header>

        <S.Image src={image} />
      </S.Wrapper>
    </S.WrapperLink>
  );
};

export default Card;
