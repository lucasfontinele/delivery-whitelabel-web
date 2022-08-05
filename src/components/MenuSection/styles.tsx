import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const SectionHeader = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.neutral.light};
  padding: 16px 18px 16px 16px;

  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.b`
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

export const SectionDescriptionContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const SectionDescrition = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

export const SectionMandatoryField = styled.strong`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.feedback.error};
`;

export const SectionContent = styled.div`
  padding: 24px 0;
  background: ${({ theme }) => theme.colors.neutral.background};
`;
