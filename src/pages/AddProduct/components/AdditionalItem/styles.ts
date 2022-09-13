import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0 16px;
  padding-bottom: 24px;

  &:not(:first-child) {
    margin-top: 24px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.medium};
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 16px;
`;

export const Title = styled.b`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

export const Description = styled.p`
  margin-top: 10px;

  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;
