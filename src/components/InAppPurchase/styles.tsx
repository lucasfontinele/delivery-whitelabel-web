import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 24px;

  width: 100%;
`;

export const Title = styled.b`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const IconBox = styled.div`
  background: #f2f2f2;
  border-radius: 6px;
  max-height: 34px;
  padding: 8.1px 11.33px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: 16px;
  width: 100%;
`;

export const CardInfoWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 8px;
`;

export const CardTitle = styled.strong`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

export const CardDescription = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

export const ChangeCardTitle = styled.a`
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.primary};
`;
