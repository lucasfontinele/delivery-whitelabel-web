import styled, { css, DefaultTheme } from 'styled-components';
import { AlertProps } from './Alert.misc';

type WrapperProps = Pick<AlertProps, 'type'>;

const wrapperModifiers = {
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.feedback.success};
  `,

  danger: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.feedback.error};
  `,

  info: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.feedback.info};
  `,

  warning: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.feedback.warning};
  `,

  default: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.neutral.medium};
  `,
};

export const Wrapper = styled.p<WrapperProps>`
  ${({ theme, type }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border-radius: 8px;
    font-style: normal;
    font-weight: ${theme.font.weights.bold};
    font-size: 16px;
    line-height: 100%;
    color: #ffffff;

    ${type && wrapperModifiers[type](theme)}
  `}
`;
