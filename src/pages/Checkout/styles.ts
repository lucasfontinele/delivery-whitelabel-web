import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  padding-bottom: 24px;
`;

export const BackContainer = styled.div`
  position: absolute;
  /* top: 24px; */
  left: 16px;
`;

export const TabsContainer = styled.div`
  margin: 24px auto 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export const MapContainer = styled.div`
  margin-top: 24px;

  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 16px;

  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.medium};
`;

export const MapTitle = styled.strong`
  margin-left: 16px;

  font-weight: 700;
  font-size: 1.8rem;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

export const AddressDetailsContainer = styled.div`
  margin-top: 24px;
  padding: 0 16px;

  width: 100%;
`;

export const MapObservationContainer = styled.div`
  margin-top: 24px;
  padding: 0 16px;
`;

export const EstimatedDeliveryTimeContainer = styled.div`
  padding: 24px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.medium};

  display: flex;
  align-items: center;
`;

export const EstimatedDeliveryInfo = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 4px;

  margin-left: 24px;
`;

export const EstimatedDeliveryTitle = styled.strong`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

export const EstimatedDeliveryDescription = styled.strong`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

export const OrderDetailsContainer = styled.div`
  margin-top: 24px;
  padding: 0 16px 24px;

  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.strong`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

export const OffersList = styled.div`
  margin-top: 16px;

  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 24px;
`;

export const AmountValueContainer = styled.div`
  margin-top: 24px;
  padding-top: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid ${({ theme }) => theme.colors.neutral.medium};
`;

export const Divider = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.medium};
`;

export const PaymentDetailsContainer = styled.div`
  margin-top: 24px;
  padding: 0 16px 0;

  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 24px;
`;

export const ButtonContainer = styled.div`
  margin-top: 8px;
`;

export const AddCardTitle = styled.p`
  margin-left: 2.4rem;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.primary};
`;
