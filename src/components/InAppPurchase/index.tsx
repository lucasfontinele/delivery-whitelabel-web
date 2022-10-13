/* eslint-disable import/no-unresolved */
import Mastercard from 'components/Icons/Mastercard';
import { CardType } from 'pages/Checkout';
import * as S from './styles';

export type InAppPurchaseProps = {
  creditCard: CardType;
};

function InAppPurchase({ creditCard }: InAppPurchaseProps) {
  return (
    <S.Container>
      <S.Title>Cartão de Crédito</S.Title>

      <S.CardContainer>
        <S.IconBox>
          <Mastercard />
        </S.IconBox>

        <S.CardInfoContainer>
          <S.CardInfoWrapper>
            <S.CardTitle>{creditCard.flag}</S.CardTitle>
            <S.CardDescription>{creditCard.card}</S.CardDescription>
          </S.CardInfoWrapper>
          <S.ChangeCardTitle href="#">Alterar</S.ChangeCardTitle>
        </S.CardInfoContainer>
      </S.CardContainer>
    </S.Container>
  );
}

export default InAppPurchase;
