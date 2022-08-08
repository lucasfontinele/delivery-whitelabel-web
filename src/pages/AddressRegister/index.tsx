import PaperAirplanner from 'components/Icons/PaperAirplanner';
import StickChevronLeft from 'components/Icons/StickChevronLeft';

import OutlinedContainer from 'components/OutlinedContainer';
import Input from 'components/Input';
import Button from 'components/Button';

import * as S from './styles';

function AddressRegister() {
  return (
    <S.Container>
      <S.PageInfoContainer>
        <S.IconButton type="button">
          <StickChevronLeft />
        </S.IconButton>

        <S.PageTitle>Alterar endereço</S.PageTitle>
      </S.PageInfoContainer>

      <S.MandatoryFields>*Campos obrigatórios</S.MandatoryFields>

      <S.FormContainer>
        <OutlinedContainer>
          <PaperAirplanner />
          <S.GeolocationTitle>Usar sua localização atual</S.GeolocationTitle>
        </OutlinedContainer>

        <Input placeholder="CEP*" />
        <Input placeholder="Endereço*" />
        <Input placeholder="Número*" />
        <Input placeholder="Complemento" />
        <Input placeholder="Bairro*" />

        <S.SubmitContainer>
          <Button variant="contained" type="submit" content="center">
            Alterar endereço
          </Button>
        </S.SubmitContainer>
      </S.FormContainer>
    </S.Container>
  );
}

export default AddressRegister;
