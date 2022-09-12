import AddressDetail from 'components/AddressDetail';
import BackButton from 'components/BackButton';
import Card from 'components/Card';
import Map from 'components/Map';
import Tabs from 'components/Tabs';
import { mock, paymentTypeMock } from 'components/Tabs/misc';
import { TextArea } from 'components/TextArea/styles';

import { checkoutMock } from 'components/Card/mock';

import Button from 'components/Button';
import InAppPurchase from 'components/InAppPurchase';
import Clock from 'components/Icons/Clock';
import * as S from './styles';

function Checkout() {
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
          <Card {...checkoutMock} />
          <Card {...checkoutMock} />
        </S.OffersList>

        <S.AmountValueContainer>
          <S.SectionTitle>Total</S.SectionTitle>
          <S.SectionTitle>R$ 26,70</S.SectionTitle>
        </S.AmountValueContainer>
      </S.OrderDetailsContainer>

      <S.Divider />

      <S.PaymentDetailsContainer>
        <S.SectionTitle>Pagamento</S.SectionTitle>

        <Tabs {...paymentTypeMock} />

        <InAppPurchase />

        <S.ButtonContainer>
          <Button content="center" type="button" variant="contained">
            Fazer pedido
          </Button>
        </S.ButtonContainer>
      </S.PaymentDetailsContainer>
    </S.Container>
  );
}

export default Checkout;
