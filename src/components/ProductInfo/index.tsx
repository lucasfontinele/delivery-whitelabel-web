import formatPrice from 'utils/format-price';

import type { ProductInfoProps } from './misc';
import * as S from './styles';

function ProductInfo({ ...props }: ProductInfoProps) {
  const { name, description, price } = props;

  return (
    <S.Container>
      <S.Title>{name}</S.Title>
      {description && <S.Description>{description}</S.Description>}
      <S.Price>{formatPrice(price)}</S.Price>
    </S.Container>
  );
}

export default ProductInfo;
