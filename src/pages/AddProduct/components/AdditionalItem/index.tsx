import Checkbox from 'components/Checkbox';

import * as S from './styles';

function AdditionalItem() {
  return (
    <S.Container>
      <Checkbox />
      <S.DescriptionContainer>
        <S.Title>Confit de alho</S.Title>
        <S.Description>R$ 0,90 cada</S.Description>
      </S.DescriptionContainer>
    </S.Container>
  );
}

export default AdditionalItem;
