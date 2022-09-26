import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 56px;
  width: 100%;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px 8px 0px 0px;
  padding: 18px 0;

  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Label = styled.strong`
  text-decoration: none !important;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 150%;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const Icon = styled.div`
  position: absolute;
  right: 16px;
`;
