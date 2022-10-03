import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 8px 0 16px 0;

  font-weight: 400;
  font-size: 16px;
  line-height: 100%;

  color: #666666;
`;

export const Divisor = styled.div`
  width: 100%;
  height: 1px;

  margin-top: 16px;

  background: #cccccc;
`;
