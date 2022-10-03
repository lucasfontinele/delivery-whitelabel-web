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

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  background: #ffffff;

  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 0.8rem 0.8rem 0px 0px;
`;

export const MenuIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;

  width: 42px;
`;

export const Title = styled.p`
  padding: 24px 16px;

  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  color: #666666;
`;

export const TitleLabel = styled.p`
  margin: 8px 0;
  padding: 0 16px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: #666666;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin-bottom: 24px;
`;

export const AddressLabel = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: #666666;
`;

export const AddressDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;

  color: #666666;
`;

export const Head = styled.div`
  display: flex;
  justify-content: flex-start;

  padding: 0 16px;
  margin: 21px 0 8px 0;
`;

export const TitleHead = styled.p`
  margin-left: 24px;

  font-weight: 700;
  font-size: 18px;
  line-height: 120%;

  color: #666666;
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
