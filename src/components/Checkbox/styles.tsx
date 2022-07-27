import styled from 'styled-components';

export const Container = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;

  font: inherit;
  color: currentColor;
  width: 22px;
  height: 22px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;

  &::before {
    content: '';
    width: 16px;
    height: 16px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1.57em 1em #1d71b8;
    border-radius: 2px;
  }

  &:checked::before {
    transform: scale(1);
  }
`;
