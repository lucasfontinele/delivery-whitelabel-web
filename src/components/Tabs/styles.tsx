import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;

  width: fit-content;
`;

const activeTab = css`
  background: ${({ theme }) => theme.colors.primary};

  font-weight: 700;
  font-size: 1.6rem;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.neutral.light};
`;

export const Tab = styled.button<{ active: boolean }>`
  border: none;
  padding: 8px 16px;
  background: transparent;
  border-radius: 8px;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral.dark};

  transition: all 0.2s linear;

  ${({ active }) => active && activeTab};

  &:hover {
    cursor: pointer;
  }
`;
