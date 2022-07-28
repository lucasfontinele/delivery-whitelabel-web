import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${theme.layers.alwaysOnTop};
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxsmall};
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  `}
`;

export const MenuItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
`;
