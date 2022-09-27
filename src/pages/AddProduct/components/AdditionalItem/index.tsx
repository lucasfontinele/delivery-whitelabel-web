import { useState } from 'react';
import Checkbox from 'components/Checkbox';
import QuantityCounter from 'components/QuantityCounter';

import * as S from './styles';

function AdditionalItem() {
  const [checked, setChecked] = useState(false);
  const [quantity, setQuantity] = useState(0);

  // TODO: improve decrement and increment functions
  const handleIncrement = () => {
    setQuantity(current => {
      const newValue = current + 1;

      return newValue;
    });
  };

  const handleDecrement = () => {
    setQuantity(current => {
      if (current <= 0) {
        return 0;
      }

      const newValue = current - 1;

      return newValue;
    });
  };

  return (
    <S.Container>
      <Checkbox onChangeChecked={value => setChecked(value)} />
      <S.Wrapper>
        <S.DescriptionContainer>
          <S.Title>Confit de alho</S.Title>
          <S.Description>R$ 0,90 cada</S.Description>
        </S.DescriptionContainer>

        {checked && (
          <QuantityCounter
            counter={quantity}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        )}
      </S.Wrapper>
    </S.Container>
  );
}

export default AdditionalItem;
