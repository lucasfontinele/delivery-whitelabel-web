import styled, { css } from 'styled-components';

interface ContainerProps {
  backgroundColor: boolean;
}

export const Title = styled.p`
  margin-bottom: 8px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: #666666;
`;

export const ContainerBackground = styled.div<ContainerProps>`
  padding: 0 16px;

  ${props =>
    !props.backgroundColor &&
    css`
      background: #f2f2f2;

      border-top: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
    `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Divisor = styled.div`
  width: 100%;
  height: 1px;

  margin: 16px 0;

  background: #cccccc;
`;

export const TitleOrder = styled.p`
  margin: 24px 0 24px 0;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: #666666;
`;

export const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;

  font-weight: 700;
  font-size: 16px;
  line-height: 120%;

  color: #666666;
`;

export const AdditionalItem = styled.div`
  display: flex;
  justify-content: space-between;

  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  color: #666666;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 18px;

  font-weight: 700;
  font-size: 16px;
  line-height: 120%;

  color: #666666;
`;
