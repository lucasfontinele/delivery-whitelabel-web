import Header from 'components/Header';
import NavBar from 'components/NavBar';
import HeadImage from 'components/HeadImage';
import PageCard from 'components/PageCard';
import ProductInfo from 'components/ProductInfo';
import MenuSection from 'components/MenuSection';

import AdditionalItem from './components/AdditionalItem';
import OrderNotes from './components/OrderNotes';

import * as S from './styles';

function AddProduct() {
  return (
    <S.Container>
      <Header />

      <HeadImage
        imageUrl="https://i.imgur.com/bkaVGCB.png"
        handleBackButton={() => {
          /* */
        }}
      />

      <S.CardContainer>
        <PageCard>
          <ProductInfo
            name="Salada Primavera"
            description="Folhas, gergelim, abobrinha e tomate com suco de limão e molho."
            price={24.9}
          />
        </PageCard>

        <MenuSection title="Molhos" description="Escolha até 2 itens" mandatory>
          <AdditionalItem />
          <AdditionalItem />
        </MenuSection>

        <MenuSection
          title="Deixe sua mensagem"
          description="Escreva até 140 caracteres"
          mandatory={false}
        >
          <OrderNotes />
        </MenuSection>
      </S.CardContainer>

      <NavBar />
    </S.Container>
  );
}

export default AddProduct;
