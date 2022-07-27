import type { AlertProps } from './Alert.misc';

import * as S from './styles';

const Alert = ({ type, message }: AlertProps) => (
  <S.Wrapper type={type}>{message}</S.Wrapper>
);

export default Alert;
