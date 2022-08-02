import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Header = styled.div`
  height: 60px;
  width: 100%;
  padding: 0 16px;
  background: linear-gradient(
    180deg,
    rgba(23, 23, 23, 0.75) 0%,
    rgba(23, 23, 23, 0) 100%
  );

  position: absolute;
  top: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconButton = styled.button`
  background: transparent;
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
