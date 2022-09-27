import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 0;
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

export const AlwaysOnTop = styled.div`
  z-index: ${({ theme }) => theme.layers.alwaysOnTop};
`;

export const OverflowInfo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.neutral.darkest};
  opacity: 0.8;
`;

export const OverflowBox = styled.div`
  padding: 0.9rem 7.7rem;
  background: #666666;
  opacity: 0.8;
  border-radius: 8px;

  z-index: ${({ theme }) => theme.layers.alwaysOnTop};

  > span {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.neutral.light};
  }
`;
