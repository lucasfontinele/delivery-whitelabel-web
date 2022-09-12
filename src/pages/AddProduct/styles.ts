import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 70px;
`;

export const CardContainer = styled.div`
  margin-top: -24px;
  z-index: 50;
`;

export const NotesCharLength = styled.p`
  margin-top: 16px;
  margin-right: 16px;

  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  text-align: right;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

export const SubmitActionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
`;

export const ProductQuantityContainer = styled.div`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;

  padding: 18px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubmitContainer = styled.div`
  margin-top: 24px;
  width: 100%;
`;
