import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.1rem 1.6rem 2.4rem;
`;

export const PageInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const PageTitle = styled.h2`
  margin-left: 2.4rem;

  font-weight: 700;
  font-size: 1.8rem;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

export const MandatoryFields = styled.strong`
  margin-top: 2.4rem;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

export const FormContainer = styled.form`
  margin-top: 2.4rem;

  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-row-gap: 1.6rem;
`;

export const GeolocationTitle = styled.p`
  margin-left: 2.4rem;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SubmitContainer = styled.div`
  margin-top: 0.8rem;
`;
