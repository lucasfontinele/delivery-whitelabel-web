import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none;
  }

  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 24px;
`;

export const Option = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 8px 16px;
  border: none;
  outline: none;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  text-align: center;

  color: ${({ theme }) => theme.colors.neutral.background};
  transition: all 0.2s linear;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;
