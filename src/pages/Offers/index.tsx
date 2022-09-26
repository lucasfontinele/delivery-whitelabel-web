import { useEffect, useState } from 'react';

import Card from 'components/Card';
import CategoriesScroll from 'components/CategoriesScroll';
import CommerceInfo from 'components/CommerceInfo';
import HeadImage from 'components/HeadImage';
import HeartIcon from 'components/Icons/Heart';
import PageCard from 'components/PageCard';
import Search from 'components/Search';
import cardMock from 'components/Card/mock';

import { useStore } from 'hooks/useStore';
import { calculateDistanceBetween } from 'utils/spherical';
import { isClosedStore } from 'utils/date';

import * as S from './styles';

const a = {
  lat: -10.2269592,
  lng: -48.328996,
};
const b = {
  lat: -10.204595,
  lng: -48.336795,
};

function Offers() {
  const { profile, order_settings, opening_schedule } = useStore();

  const isClosed = isClosedStore(opening_schedule);
  const [distance, setDistance] = useState('0');

  const handleDistance = () => {
    const calculatedDistance = calculateDistanceBetween([a, b]);

    setDistance(calculatedDistance);
  };

  useEffect(() => {
    handleDistance();
  }, []);

  return (
    <S.Container>
      <HeadImage
        imageUrl="https://i.imgur.com/1jLCNwa.png"
        rightContent={<HeartIcon />}
        message={isClosed ? 'Fechado agora' : ''}
      />

      <S.PageCardContainer>
        <PageCard>
          <CommerceInfo
            commerceType=""
            distance={`${distance} de distância`}
            imageUrl="https://i.imgur.com/UF0uF3p.png"
            minimumOrderPrice={
              order_settings.delivery.cover_area[0].minimum_order_value
            }
            name={profile.name}
            opening={isClosed ? 'Fechado agora' : 'Hoje • 7h às 22h'}
          />

          <S.ControlArea disabled={isClosed}>
            <S.SearchContainer>
              <Search placeholder="Pesquisar" disabled={isClosed} />
            </S.SearchContainer>

            <S.CategoriesContainer>
              <CategoriesScroll />
            </S.CategoriesContainer>

            <S.OffersContainer>
              <S.CategoryContainer>
                <S.CategoryTitle>Promoções</S.CategoryTitle>

                <Card {...cardMock} />
                <Card {...cardMock} />
              </S.CategoryContainer>
              <S.CategoryContainer>
                <S.CategoryTitle>Sanduíches</S.CategoryTitle>

                <Card {...cardMock} />
                <Card {...cardMock} />
                <Card {...cardMock} />
                <Card {...cardMock} />
              </S.CategoryContainer>
            </S.OffersContainer>
          </S.ControlArea>
        </PageCard>
      </S.PageCardContainer>
    </S.Container>
  );
}

export default Offers;
