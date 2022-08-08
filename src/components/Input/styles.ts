import styled, { css } from 'styled-components';

export const StorybookContainer = styled.div`
  max-width: 375px;
  width: 100%;
  padding: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;

  padding: 1.7rem 2.4rem;

  border-radius: 8px;
  ${({ theme }) => css`
    background: ${theme.colors.neutral.background};
    border: 1px solid ${theme.colors.neutral.medium};

    ::placeholder {
      color: ${theme.colors.neutral.medium};
    }

    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
    color: ${theme.colors.neutral.dark};
  `}
`;

export const ErrorMessage = styled.small`
  margin-top: 8px;

  font-weight: 400;
  font-size: 1.4rem;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.feedback.error};
`;
