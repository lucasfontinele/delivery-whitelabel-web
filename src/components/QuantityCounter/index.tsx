import RoundedMinus from 'components/Icons/RoundedMinus';
import RoundedPlus from 'components/Icons/RoundedPlus';

import type { QuantityCounterProps } from './misc';
import * as S from './styles';

function QuantityCounter({
  handleIncrement,
  handleDecrement,
  counter,
  ...props
}: QuantityCounterProps) {
  const { variantColor = '#171717' } = props;

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
