import styled from 'styled-components';

export const Container = styled.div``;

export const PageCardContainer = styled.div`
  margin-top: -30px;
  z-index: ${({ theme }) => theme.layers.base};
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
