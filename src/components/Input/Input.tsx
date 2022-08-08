import React from 'react';

import type { InputProps } from './Input.misc';
import * as S from './styles';

function Input({ ...props }: InputProps) {
  const { error } = props;

  return (
    <S.Wrapper>
      <S.Input {...props} />
      {error ? <S.ErrorMessage>{error}</S.ErrorMessage> : undefined}
    </S.Wrapper>
  );
}

export default Input;
