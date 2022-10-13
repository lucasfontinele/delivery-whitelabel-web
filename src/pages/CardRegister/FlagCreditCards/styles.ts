import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const WrapperFlags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const LabelFlags = styled.p`
  ${({ theme }) => css`
    font-size: 16px;
    font-weight: ${theme.font.weights.bold};
    color: ${theme.colors.neutral.dark};
  `};
`;
