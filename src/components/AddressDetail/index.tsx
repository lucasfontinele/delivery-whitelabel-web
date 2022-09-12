import { useTheme } from 'styled-components';

import MapIcon from 'components/Icons/Map';

import * as S from './styles';

function AddressDetail() {
  const { colors } = useTheme();

  return (
    <S.Container>
      <MapIcon color={colors.primary} />

      <S.AddressContainer>
        <S.Title>Endereço</S.Title>
        <S.Details>Praia de Ipanema</S.Details>

        <S.ChangeAddress>Alterar</S.ChangeAddress>
      </S.AddressContainer>
    </S.Container>
  );
}

export default AddressDetail;
