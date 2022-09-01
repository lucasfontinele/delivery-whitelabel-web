import Card from 'components/Card';
import CategoriesScroll from 'components/CategoriesScroll';
import CommerceInfo from 'components/CommerceInfo';
import HeadImage from 'components/HeadImage';
import HeartIcon from 'components/Icons/Heart';
import PageCard from 'components/PageCard';
import Search from 'components/Search';

import cardMock from 'components/Card/mock';

import * as S from './styles';

function Offers() {
  return (
    <S.Container>
      <HeadImage
        imageUrl="https://i.imgur.com/1jLCNwa.png"
        handleBackButton={() => {
          /** */
        }}
        rightContent={<HeartIcon />}
      />

      <S.PageCardContainer>
        <PageCard>
          <CommerceInfo
            commerceType="Quiosque"
            distance="1km de distância"
            imageUrl="https://i.imgur.com/UF0uF3p.png"
            minimumOrderPrice={15}
            name="Quiosque do Bem"
            opening="Hoje • 7h às 22h"
          />

          <S.SearchContainer>
            <Search placeholder="Pesquisar" />
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
        </PageCard>
      </S.PageCardContainer>
    </S.Container>
  );
}

export default Offers;
