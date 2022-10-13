import styled, { css, DefaultTheme } from 'styled-components';
import { SelectProps } from '.';

type IconPositionProps = Pick<SelectProps, 'iconPosition' | 'icon'>;
type WrapperProps = Pick<SelectProps, 'disabled'> & { error?: boolean };

export const Label = styled.label`
  margin-bottom: 8px;
  display: inline-block;

  font-size: 14px;
  line-height: 14px;
  color: #6d6e70;
`;

export const baseInputStyles = ({
  iconPosition,
  icon,
}: IconPositionProps) => css`
  ${({ theme }) => css`
    padding: 20px 0;
    width: 100%;
    font-size: 16px;
    color: #5a5a5a;
    outline: 0;
    // caret-color: #5a5a5a;

    ${icon &&
    css`
      padding-${iconPosition}: 1rem;
    `}

    &::placeholder {
      color: #6d6e70;
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 40px #fff inset;
      filter: none;
      &::first-line {
        font-family: ${theme.font.family};
      }
    }
  `}
`;

export const InputWrapper = styled.div<IconPositionProps>`
  ${({ theme, iconPosition, icon }) => css`
    display: flex;
    align-items: center;
    background: #ffffff;
    border: 1px solid #d1d2d4;
    border-radius: 10px;
    padding: 0 24px;
    width: 100%;

    transition: border-color ${theme.transition.default};

    &:focus-within {
      border-color: #61abd8;
    }

    && select {
      ${baseInputStyles({ iconPosition, icon })}
    }
  `}
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.neutral.medium};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 2rem;
      height: 100%;
      position: relative;
      top: -1px;
    }
  `}
`;

export const Input = styled.select<IconPositionProps>`
  ${({ iconPosition, icon }) => css`
    ${baseInputStyles({ iconPosition, icon })}
    background-color: #fff;
    border: none;
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.feedback.error};
  `}
`;

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.feedback.error};
    }

    ${Icon},
    ${Label} {
      color: ${theme.colors.feedback.error};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    opacity: 0.6;

    ${InputWrapper}, ${Input} {
      background-color: #fafafa;
    }

    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.neutral.medium};

      &::placeholder {
        color: currentColor;
      }
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    width: 100%;

    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}

    input {
      outline: none;
    }
  `}
`;

export const Prefix = styled.p<IconPositionProps>`
  ${({ iconPosition, icon }) => css`
    font-size: 12px;
    line-height: 14px;
    color: #d1d2d4;
    margin-right: 4px;
    top: 1px;
    position: relative;

    ${icon &&
    iconPosition === 'left' &&
    css`
      padding-${iconPosition}: 0.8rem;
    `}
  `}
`;

export const HelpText = styled.p`
  font-weight: 500;
  font-size: 11px;
  line-height: 150%;
  color: #a1a1a1;
  margin-top: 5px;
`;
