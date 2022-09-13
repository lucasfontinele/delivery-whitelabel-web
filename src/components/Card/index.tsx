import QuantityCounter from 'components/QuantityCounter';
import formatPrice from 'utils/format-price';
import * as S from './styles';

export type CardProps = {
  name: string;
  description: string;
  price: number;
  promotionalPrice?: number;
  image: string;
  href: string;
  hasCounter?: boolean;
};

const Card = ({
  description,
  image,
  href,
  name,
  price,
  promotionalPrice,
  hasCounter,
}: CardProps) => {
  return (
    <S.WrapperLink to={href}>
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
              <QuantityCounter />
            </S.CounterContainer>
          )}
        </S.Header>

        <S.Image src={image} />
      </S.Wrapper>
    </S.WrapperLink>
  );
};

export default Card;
