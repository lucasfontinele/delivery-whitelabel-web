import { useState } from 'react';

import RoundedMinus from 'components/Icons/RoundedMinus';
import RoundedPlus from 'components/Icons/RoundedPlus';

import type { QuantityCounterProps } from './misc';
import * as S from './styles';

function QuantityCounter({ ...props }: QuantityCounterProps) {
  const { variantColor = '#171717' } = props;
  const [counter, setCounter] = useState(0);

  // TODO: improve decrement and increment functions
  const handleIncrement = () => {
    setCounter(current => {
      return current + 1;
    });
  };

  const handleDecrement = () => {
    setCounter(current => {
      if (current <= 0) return 0;

      return current - 1;
    });
  };

  return (
    <S.Container>
      <S.IconButton onClick={handleDecrement}>
        <RoundedMinus color={variantColor} />
      </S.IconButton>
      <S.Counter variantColor={variantColor}>{counter}</S.Counter>
      <S.IconButton onClick={handleIncrement}>
        <RoundedPlus color={variantColor} />
      </S.IconButton>
    </S.Container>
  );
}

export default QuantityCounter;
