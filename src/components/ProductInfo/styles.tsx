import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  row-gap: 16px;
`;

export const Title = styled.b`
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  color: #666666;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  color: #666666;
`;

export const Price = styled.strong`
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  color: #666666;
`;
