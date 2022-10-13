/* eslint-disable import/no-unresolved */
import { useCallback, useState } from 'react';

import AddressDetail from 'components/AddressDetail';
import BackButton from 'components/BackButton';
import OutlinedContainer from 'components/OutlinedContainer';
import Card from 'components/Card';
import Map from 'components/Map';
import Tabs from 'components/Tabs';
import { mock, TabsProps } from 'components/Tabs/misc';
import { TextArea } from 'components/TextArea/styles';
import PaymentOnDelivery from 'components/PaymentOnDelivery';
import { PaymentType } from 'components/PaymentOnDelivery/misc';
import Button from 'components/Button';
import InAppPurchase from 'components/InAppPurchase';
import Clock from 'components/Icons/Clock';
import { useCart } from 'hooks/useCart';
import CreditCard from 'components/Icons/CreditCard';

import * as S from './styles';

export type CardType = {
  flag: string;
  card: string;
};

const paymentDetails: TabsProps = {
  options: [
    {
      label: 'Pague pelo app',
      value: 0,
    },
    {
      label: 'Pague na entrega',
      value: 1,
    },
  ],
};

const card = {
  flag: 'Mastercard',
  card: '•••• •••• •••• 1234',
};

function Checkout() {
  const { offers } = useCart();

  const [paymentDetailsValue, setPaymentDetailsValue] = useState(0);
  const [paymentType, setPaymentType] = useState<PaymentType>();
  const [creditCard, setCreditCard] = useState<CardType>();

  const handleSelectPaymentDetails = useCallback((type?: PaymentType) => {
    // if (type === paymentType) {
    //   setPaymentType(undefined);

    //   return;
    // }

    setPaymentType(type);
  }, []);

  return (
    <S.Container>
      <S.BackContainer>
        <BackButton />
      </S.BackContainer>
      <S.TabsContainer>
        <Tabs {...mock} />
      </S.TabsContainer>
      <S.MapContainer>
        <S.MapTitle>Defina sua localização</S.MapTitle>

        <Map />

        <S.AddressDetailsContainer>
          <AddressDetail />
        </S.AddressDetailsContainer>

        <S.MapObservationContainer>
          <TextArea placeholder="Adicione aqui informações adicionais sobre sua localização." />
        </S.MapObservationContainer>
      </S.MapContainer>
      <S.EstimatedDeliveryTimeContainer>
        <Clock />

        <S.EstimatedDeliveryInfo>
          <S.EstimatedDeliveryTitle>Tempo de Entrega</S.EstimatedDeliveryTitle>
          <S.EstimatedDeliveryDescription>
            15 - 30 minutos
          </S.EstimatedDeliveryDescription>
        </S.EstimatedDeliveryInfo>
      </S.EstimatedDeliveryTimeContainer>
      <S.OrderDetailsContainer>
        <S.SectionTitle>Seu pedido</S.SectionTitle>

        <S.OffersList>
          {offers.map(({ offer, quantity }) => (
            <Card
              description={offer.description}
              name={offer.title}
              price={offer.amount * quantity}
              image="https://img.cybercook.com.br/receitas/71/salada-primavera-6.jpeg"
              hasCounter
              offerId={offer.id}
              counter={quantity}
              hasNavigation={false}
            />
          ))}
        </S.OffersList>

        <S.AmountValueContainer>
          <S.SectionTitle>Total</S.SectionTitle>
          <S.SectionTitle>R$ 26,70</S.SectionTitle>
        </S.AmountValueContainer>
      </S.OrderDetailsContainer>
      <S.Divider />
      {!creditCard && (
        <S.PaymentDetailsContainer>
          <S.ButtonContainer>
            <S.LinkStyled to="/payments/register">
              <OutlinedContainer>
                <CreditCard />
                <S.AddCardTitle>Adicionar um cartão</S.AddCardTitle>
              </OutlinedContainer>
            </S.LinkStyled>
          </S.ButtonContainer>
        </S.PaymentDetailsContainer>
      )}
      {creditCard && (
        <S.PaymentDetailsContainer>
          <S.SectionTitle>Pagamento</S.SectionTitle>
          <Tabs
            onChangeTab={value => setPaymentDetailsValue(value)}
            {...paymentDetails}
          />
          {paymentDetailsValue === 0 && (
            <InAppPurchase creditCard={creditCard} />
          )}
          {paymentDetailsValue === 1 && (
            <PaymentOnDelivery
              onChangePaymentType={type => handleSelectPaymentDetails(type)}
              paymentType={paymentType}
            />
          )}
          <S.ButtonContainer>
            <Button content="center" type="button" variant="contained">
              Fazer pedido
            </Button>
          </S.ButtonContainer>
        </S.PaymentDetailsContainer>
      )}
    </S.Container>
  );
}

export default Checkout;
