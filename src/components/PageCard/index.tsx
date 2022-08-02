import type { PageCardProps } from './misc';
import * as S from './styles';

function PageCard({ ...props }: PageCardProps) {
  const { children } = props;

  return <S.Container>{children}</S.Container>;
}

export default PageCard;
