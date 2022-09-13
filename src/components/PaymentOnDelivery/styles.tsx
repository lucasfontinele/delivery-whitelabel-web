import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 24px;
`;

const ActiveLabel = css`
  color: ${({ theme }) => theme.colors.neutral.light};
`;

export const ButtonContent = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 16px;
  align-items: center;
`;

export const Label = styled.p<{ active: boolean }>`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.primary};

  ${({ active }) => active && ActiveLabel};
`;

export const CashContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 24px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;
