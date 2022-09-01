import formatPrice from 'utils/format-price';
import type { CommerceInfoProps } from './misc';
import * as S from './styles';

function CommerceInfo({ ...props }: CommerceInfoProps) {
  const { imageUrl, commerceType, distance, minimumOrderPrice, name, opening } =
    props;

  return (
    <S.Container>
      <S.Image src={imageUrl} alt="Commerce Logo" />

      <S.InfoContainer>
        <S.Title>{name}</S.Title>

        <S.TextInfo>
          {distance} • {commerceType}
        </S.TextInfo>
        <S.TextInfo>Pedido mínimo {formatPrice(minimumOrderPrice)}</S.TextInfo>
        <S.TextInfo>{opening}</S.TextInfo>
      </S.InfoContainer>
    </S.Container>
  );
}

export default CommerceInfo;
