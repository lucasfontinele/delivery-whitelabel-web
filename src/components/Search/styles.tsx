import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.neutral.light};
  border-radius: 8px;
  border: none;
  outline: none;
  width: 100%;

  padding: 8.6px 10px 10px;

  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.neutral.dark};

  ::placeholder {
    color: ${({ theme }) => theme.colors.neutral.medium};
  }

  :disabled {
    opacity: 0.6;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 8.6px;
  right: 10px;
`;
