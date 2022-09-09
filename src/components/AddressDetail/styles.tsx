import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const AddressContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 1px;
  margin-left: 16px;
  position: relative;

  width: 100%;
`;

export const Title = styled.b`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

export const Details = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

export const ChangeAddress = styled.a`
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  text-align: right;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.primary};

  position: absolute;
  right: 0;
  bottom: 0;
`;
