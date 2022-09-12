import Mastercard from 'components/Icons/Mastercard';
import * as S from './styles';

function InAppPurchase() {
  return (
    <S.Container>
      <S.Title>Cartão de Crédito</S.Title>

      <S.CardContainer>
        <S.IconBox>
          <Mastercard />
        </S.IconBox>

        <S.CardInfoContainer>
          <S.CardInfoWrapper>
            <S.CardTitle>Mastercard</S.CardTitle>
            <S.CardDescription>•••• •••• •••• 1234</S.CardDescription>
          </S.CardInfoWrapper>

          <S.ChangeCardTitle href="#">Alterar</S.ChangeCardTitle>
        </S.CardInfoContainer>
      </S.CardContainer>
    </S.Container>
  );
}

export default InAppPurchase;
