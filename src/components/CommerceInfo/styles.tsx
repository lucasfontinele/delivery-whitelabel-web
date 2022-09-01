import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 70px auto;
  grid-column-gap: 16px;
  align-items: center;
`;

export const Image = styled.img`
  height: 70px;
  width: 70px;
  object-fit: cover;
  border-radius: 50%;
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 4px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

export const TextInfo = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;
