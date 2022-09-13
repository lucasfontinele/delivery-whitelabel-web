import Button from 'components/Button';
import Cash from 'components/Icons/Cash';
import CreditCard from 'components/Icons/CreditCard';
import Input from 'components/Input';
import type { PaymentOnDeliveryProps, PaymentType } from './misc';
import * as S from './styles';

function PaymentOnDelivery({
  paymentType,
  onChangePaymentType,
}: PaymentOnDeliveryProps) {
  const isPaymentByCash = (value?: PaymentType) => {
    if (!value) return false;

    return value === 'cash';
  };

  const isPaymentByCreditCard = (value?: PaymentType) => {
    if (!value) return false;

    return value === 'credit_card';
  };

  return (
    <S.Container>
      {isPaymentByCash(paymentType) ? (
        <Button variant="contained" content="left">
          <S.ButtonContent onClick={() => onChangePaymentType(undefined)}>
            <Cash color="#FFFFFF" />
            <S.Label active>Dinheiro</S.Label>
          </S.ButtonContent>
        </Button>
      ) : (
        <Button variant="outlined" content="left">
          <S.ButtonContent onClick={() => onChangePaymentType('cash')}>
            <Cash />
            <S.Label active={false}>Dinheiro</S.Label>
          </S.ButtonContent>
        </Button>
      )}

      {paymentType === 'cash' && (
        <S.CashContainer>
          <S.Title>Troco para quanto?</S.Title>
          <Input placeholder="Valor" />
        </S.CashContainer>
      )}

      {isPaymentByCreditCard(paymentType) ? (
        <Button variant="contained" content="left">
          <S.ButtonContent onClick={() => onChangePaymentType(undefined)}>
            <CreditCard color="#FFFFFF" />
            <S.Label active>Pagamento com cartão</S.Label>
          </S.ButtonContent>
        </Button>
      ) : (
        <Button variant="outlined" content="left">
          <S.ButtonContent onClick={() => onChangePaymentType('credit_card')}>
            <CreditCard />
            <S.Label active={false}>Pagamento com cartão</S.Label>
          </S.ButtonContent>
        </Button>
      )}
    </S.Container>
  );
}

export default PaymentOnDelivery;
