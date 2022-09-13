import { useState } from 'react';
import Checkbox from 'components/Checkbox';
import QuantityCounter from 'components/QuantityCounter';

import * as S from './styles';

function AdditionalItem() {
  const [checked, setChecked] = useState(false);

  return (
    <S.Container>
      <Checkbox onChangeChecked={value => setChecked(value)} />
      <S.Wrapper>
        <S.DescriptionContainer>
          <S.Title>Confit de alho</S.Title>
          <S.Description>R$ 0,90 cada</S.Description>
        </S.DescriptionContainer>

        {checked && <QuantityCounter />}
      </S.Wrapper>
    </S.Container>
  );
}

export default AdditionalItem;
