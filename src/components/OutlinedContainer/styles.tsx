import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.7rem 2.4rem;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;
