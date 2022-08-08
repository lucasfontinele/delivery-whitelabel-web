import type { OutlinedContainerProps } from './misc';
import * as S from './styles';

function OutlinedContainer({ ...props }: OutlinedContainerProps) {
  const { children } = props;

  return <S.Container>{children}</S.Container>;
}

export default OutlinedContainer;
