/* eslint-disable import/no-unresolved */
import { useCallback, useState } from 'react';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useCart } from 'hooks/useCart';
import HeadImage from 'components/HeadImage';
import PageCard from 'components/PageCard';
import ProductInfo from 'components/ProductInfo';
import MenuSection from 'components/MenuSection';
import QuantityCounter from 'components/QuantityCounter';
import Button from 'components/Button';

import formatPrice from 'utils/format-price';

// import AdditionalItem from './components/AdditionalItem';
import OrderNotes from './components/OrderNotes';

import * as S from './styles';

function AddProduct() {
  const navigate = useNavigate();
  const { colors } = useTheme();
  const { setCurrentOffer, currentOffer, handleAddOffer } = useCart();
  const [quantity, setQuantity] = useState(0);

  const handleBackButton = useCallback(() => {
    if (!navigate || !setCurrentOffer) return;

    setCurrentOffer(undefined);
    navigate(-1);
  }, [navigate, setCurrentOffer]);

  const handleIncrementProduct = useCallback(() => {
    if (!handleAddOffer || !currentOffer || quantity <= 0 || !navigate) return;

    handleAddOffer(currentOffer, '', quantity);
    navigate('/');
  }, [currentOffer, handleAddOffer, quantity, navigate]);

  function handleGetOfferAmount(amount: number, _quantity: number): string {
    const value = amount * _quantity;

    if (value <= 0) {
      return formatPrice(amount);
    }

    return formatPrice(value);
  }

  // TODO: improve decrement and increment functions
  const handleIncrement = () => {
    setQuantity(current => {
      const newValue = current + 1;

      return newValue;
    });
  };

  const handleDecrement = () => {
    setQuantity(current => {
      if (current <= 0) {
        return 0;
      }

      const newValue = current - 1;

      return newValue;
    });
  };

  return (
    <S.Container>
      <HeadImage
        imageUrl="https://i.imgur.com/bkaVGCB.png"
        handleBackButton={handleBackButton}
      />

      <S.CardContainer>
        <PageCard>
          <ProductInfo
            name={currentOffer?.title ?? ''}
            description={currentOffer?.description ?? ''}
            price={currentOffer?.amount ?? 0}
          />
        </PageCard>

        {/* <MenuSection title="Molhos" description="Escolha até 2 itens" mandatory>
          <AdditionalItem />
          <AdditionalItem />
        </MenuSection> */}

        <MenuSection
          title="Deixe sua mensagem"
          description="Escreva até 140 caracteres"
          mandatory={false}
        >
          <OrderNotes />
          <S.NotesCharLength>111</S.NotesCharLength>
        </MenuSection>
      </S.CardContainer>

      <S.SubmitActionsContainer>
        <S.ProductQuantityContainer>
          <QuantityCounter
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            counter={quantity}
            variantColor={colors.primary}
          />
        </S.ProductQuantityContainer>

        <S.SubmitContainer>
          <Button
            variant="contained"
            content="center"
            onClick={handleIncrementProduct}
          >
            Adicionar{' '}
            {handleGetOfferAmount(currentOffer?.amount ?? 0, quantity)}
          </Button>
        </S.SubmitContainer>
      </S.SubmitActionsContainer>
    </S.Container>
  );
}

export default AddProduct;
