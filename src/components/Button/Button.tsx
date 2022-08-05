import clsx from 'clsx';

import type { ButtonProps } from './Button.misc';
import * as S from './styles';

function Button({ ...props }: ButtonProps) {
  const { children, content, variant } = props;

  return (
    <S.Container className={clsx(content, variant)} type="button" {...props}>
      {children}
    </S.Container>
  );
}

export default Button;
