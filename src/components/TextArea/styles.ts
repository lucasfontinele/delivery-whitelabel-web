import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 125px;
  resize: none;
  padding: 16px;

  background: ${({ theme }) => theme.colors.neutral.background};
  border: 1px solid ${({ theme }) => theme.colors.neutral.medium};
  border-radius: 8px;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.neutral.dark};

  ::placeholder {
    color: ${({ theme }) => theme.colors.neutral.dark};
  }
`;

export const Small = styled.small`
  margin-top: 8px;

  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 100%;
  color: $color-feedback-error;
`;
