import StickChevronLeft from 'components/Icons/StickChevronLeft';
import Input from 'components/Input';
import Select from 'components/Select';
import Button from 'components/Button';

import { useState } from 'react';
import FlagsCreditCards from './FlagCreditCards';

import * as S from './styles';

const optionsCardsTypes = [
  { value: 'card-credit', label: 'Cartão de Crédito' },
  { value: 'meal-ticket', label: 'Vale-refeição' },
];

export type NewCardType = 'card-credit' | 'meal-ticket';

function CardRegister() {
  const [selectCard, setSelectCard] = useState<NewCardType>();

  const handleSelectCard = (selected: string) => {
    if (selected === 'card-credit' || selected === 'meal-ticket') {
      setSelectCard(selected);
    }
  };

  return (
    <S.Container>
      <S.PageInfoContainer>
        <S.IconButton type="button">
          <StickChevronLeft />
        </S.IconButton>

        <S.PageTitle>Adicionar um cartão</S.PageTitle>
      </S.PageInfoContainer>

      <S.MandatoryFields>*Campos obrigatórios</S.MandatoryFields>

      <S.FormContainer>
        <Select
          options={[{ value: '', label: 'Selecione...' }, ...optionsCardsTypes]}
          onChange={e => handleSelectCard(e.target.value)}
        />
        {selectCard && <FlagsCreditCards flags={selectCard} />}
        <Input placeholder="Nome para o Cartão" />
        <Input placeholder="Número do Cartão*" />
        <Input placeholder="Validade*" />
        <Input placeholder="CVV" />
        <Input placeholder="CPF/CNPJ do Titular" />

        <S.SubmitContainer>
          <Button variant="contained" type="submit" content="center">
            Adicionar cartão
          </Button>
        </S.SubmitContainer>
      </S.FormContainer>
    </S.Container>
  );
}

export default CardRegister;
