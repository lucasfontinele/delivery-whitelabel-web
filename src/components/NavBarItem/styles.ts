import styled, { css, DefaultTheme } from 'styled-components';
import { Link } from 'react-router-dom';

export type WrapperProps = {
  isActive?: boolean;
};

const wrapperModifiers = {
  isActive: (theme: DefaultTheme) => css`
    &,
    svg {
      color: ${theme.colors.primary};
    }

    span {
      font-weight: ${theme.font.weights.bold};
    }
  `,
};

export const Wrapper = styled.li<WrapperProps>`
  ${({ theme, isActive }) => css`
    list-style: none;
    cursor: pointer;
    color: ${theme.colors.neutral.dark};
    width: 8rem;

    ${isActive && wrapperModifiers.isActive(theme)};
  `}
`;

export type AnchorProps = {
  isDisabled?: boolean;
};

const disabled = (theme: DefaultTheme) => css`
  &,
  svg {
    cursor: not-allowed;
    color: ${theme.colors.disabled};
  }
`;

export const Anchor = styled(Link)<AnchorProps>`
  ${({ theme, isDisabled }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;

    &:focus {
      outline-color: ${theme.colors.primary};
    }

    ${isDisabled && disabled(theme)};
  `}
`;

export const IconWrapper = styled.div<AnchorProps>`
  margin-bottom: 0.2rem;

  width: 2rem;
  height: 2rem;
`;

export const Span = styled.span`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.content.xsmall};
    font-weight: ${theme.font.weights.regular};
    line-height: 1.8rem;
    transition: ${theme.transition.fast};
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: inherit;
    align-items: center;
    justify-content: center;
    border: 0;
    background: transparent;
    cursor: pointer;

    &:focus {
      outline-color: ${theme.colors.primary};
    }
  `}
`;
