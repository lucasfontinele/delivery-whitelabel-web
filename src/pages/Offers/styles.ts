import styled, { css } from 'styled-components';

type ControlAreaType = {
  disabled: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageCardContainer = styled.div`
  margin-top: -30px;
  z-index: 50;
  width: 100%;
`;

export const SearchContainer = styled.div`
  margin-top: 24px;
`;

export const CategoriesContainer = styled.div`
  margin-top: 24.4px;
`;

export const OffersContainer = styled.div`
  margin-top: 24px;

  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 24px;
  margin-bottom: 48px;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 24px;
`;

export const CategoryTitle = styled.strong`
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.neutral.darkest};
`;

export const ControlArea = styled.div<ControlAreaType>`
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      pointer-events: none;
    `}
`;
