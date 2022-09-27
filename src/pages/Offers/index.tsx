import { ChangeEvent, useEffect, useState } from 'react';

import BottomCart from 'components/BottomCart';
import Card from 'components/Card';
import CategoriesScroll from 'components/CategoriesScroll';
import CommerceInfo from 'components/CommerceInfo';
import HeadImage from 'components/HeadImage';
import HeartIcon from 'components/Icons/Heart';
import PageCard from 'components/PageCard';
import Search from 'components/Search';

import { useStore } from 'hooks/useStore';
import { calculateDistanceBetween } from 'utils/spherical';
import { isClosedStore } from 'utils/date';
import { useOffers } from 'hooks/useOffers';
import { useCart } from 'hooks/useCart';

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
  const offers = useOffers();
  const { offers: cart } = useCart();
  const isClosed = isClosedStore(opening_schedule);

  const [distance, setDistance] = useState('0');
  const [search, setSearch] = useState('');

  const scrollOptions = offers.map((option, index) => {
    return {
      id: index,
      label: option.label,
    };
  });

  const handleDistance = () => {
    const calculatedDistance = calculateDistanceBetween([a, b]);

    setDistance(calculatedDistance);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearch(value);
  };

  useEffect(() => {
    handleDistance();
  }, []);

  return (
    <>
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
                <Search
                  placeholder="Pesquisar"
                  disabled={isClosed}
                  onChange={handleSearch}
                />
              </S.SearchContainer>

              <S.CategoriesContainer>
                <CategoriesScroll options={scrollOptions} />
              </S.CategoriesContainer>

              <S.OffersContainer>
                {offers.map(group => {
                  if (
                    group.offers.filter(data => data.title.includes(search))
                      .length <= 0
                  ) {
                    return undefined;
                  }

                  return (
                    <S.CategoryContainer key={group.label} id={group.label}>
                      <S.CategoryTitle>{group.label}</S.CategoryTitle>

                      {group.offers
                        .filter(data => data.title.includes(search))
                        .map(offer => (
                          <Card
                            key={offer.id}
                            description={offer.description}
                            name={offer.title}
                            price={
                              offer.amount_without_discount > 0
                                ? offer.amount_without_discount
                                : 0
                            }
                            promotionalPrice={offer.amount}
                            image="https://img.cybercook.com.br/receitas/71/salada-primavera-6.jpeg"
                            offerId={offer.id}
                          />
                        ))}
                    </S.CategoryContainer>
                  );
                })}
              </S.OffersContainer>
            </S.ControlArea>
          </PageCard>
        </S.PageCardContainer>
      </S.Container>

      {cart.length > 0 && <BottomCart />}
    </>
  );
}

export default Offers;
