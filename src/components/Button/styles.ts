import styled, { css } from 'styled-components';

export const Container = styled.button`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 150%;
  text-align: center;

  width: 100%;
  height: 100%;
  border-radius: 8px;
  outline: none;
  border: none;

  display: flex;
  align-items: center;

  padding: 12px 25px 13px;

  transition: all 0.2s linear;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  :disabled {
    cursor: not-allowed;
  }

  ${({ theme }) => css`
    &.outlined {
      background: ${theme.colors.neutral.background};
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};
    }

    &.contained {
      background: ${theme.colors.primary};
      color: ${theme.colors.neutral.background};
    }
  `}

  &.left {
    justify-content: flex-start;
  }

  &.center {
    justify-content: center;
  }

  &.right {
    justify-content: flex-end;
  }
`;
