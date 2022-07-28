import styled, { css, DefaultTheme } from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperSkeleton = styled.div`
  max-width: 350px;
  display: block;
`;

export const WrapperLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: initial;
  max-width: 350px;
  display: block;
`;

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: ${theme.spacings.medium};
  `}
`;

export const Header = styled.header`
  max-width: 196px;
  width: 100%;
`;

export const Name = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.bold};
    font-size: ${theme.font.content.regular};
    line-height: 120%;
    color: ${theme.colors.neutral.dark};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.regular};
    font-size: ${theme.font.content.small};
    line-height: 120%;
    color: ${theme.colors.neutral.dark};
    margin-top: ${theme.spacings.xxxsmall};
  `}
`;

export const BuyBox = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxxsmall};
  `}
`;

type PriceProps = {
  isPromotional?: boolean;
};

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.weights.medium};
    font-size: ${theme.font.content.large};
    color: ${theme.colors.neutral.dark};
  `,

  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.feedback.error};
    font-weight: ${theme.font.weights.medium};
    font-size: ${theme.font.content.regular};
    text-decoration: line-through;
    margin-left: ${theme.spacings.small};
  `,
};

export const Price = styled.div<PriceProps>`
  ${({ theme, isPromotional }) => css`
    display: inline-flex;
    align-items: center;

    ${!isPromotional && priceModifiers.default(theme)}
    ${isPromotional && priceModifiers.promotional(theme)}
  `}
`;

export const Image = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 0.8rem;
`;
