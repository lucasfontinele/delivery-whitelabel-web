import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const IconButton = styled.button`
  background: transparent;
  outline: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Counter = styled.b<{ variantColor: string }>`
  margin: 0 14px;

  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  color: ${({ variantColor }) => variantColor};
`;
