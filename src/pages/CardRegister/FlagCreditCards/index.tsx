import Mastercard from 'components/Icons/Mastercard';
import Visacard from 'components/Icons/Visacard';
import Elocard from 'components/Icons/Elocard';
import Hypercard from 'components/Icons/Hypercard';
import AmericanExpress from 'components/Icons/AmericanExpress';
import DinersClub from 'components/Icons/DinersClub';
import Cabalcard from 'components/Icons/CabalCard';
import Sodexo from 'components/Icons/SodexoIcon';
import TicketCard from 'components/Icons/TicketCardIcon';
import VRCard from 'components/Icons/VRCard';
import Alelo from 'components/Icons/AleloCard';
import { NewCardType } from '..';
import * as S from './styles';

type FlagCardTypes = {
  flags: NewCardType;
};

function FlagsCreditCard({ flags }: FlagCardTypes) {
  return (
    <>
      {flags === 'card-credit' && (
        <S.Wrapper>
          <S.LabelFlags>Bandeiras</S.LabelFlags>
          <S.WrapperFlags>
            <Mastercard />
            <Visacard />
            <Elocard />
            <Hypercard />
            <AmericanExpress />
            <DinersClub />
            <Cabalcard />
          </S.WrapperFlags>
        </S.Wrapper>
      )}
      {flags === 'meal-ticket' && (
        <S.Wrapper>
          <S.LabelFlags>Bandeiras</S.LabelFlags>
          <S.WrapperFlags>
            <Sodexo />
            <TicketCard />
            <VRCard />
            <Alelo />
          </S.WrapperFlags>
        </S.Wrapper>
      )}
    </>
  );
}

export default FlagsCreditCard;
