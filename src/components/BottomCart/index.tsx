import { useCart } from 'hooks/useCart';

import ChevronRightIcon from 'components/Icons/ChevronRight';
import { ROUTES } from 'constants/routes';
import formatPrice from 'utils/format-price';

import * as S from './styles';

function BottomCart() {
  const { offers: cart } = useCart();

  const totalAmount = cart.reduce((accumulator, item) => {
    const value = accumulator + item.offer.amount * item.quantity;

    return value;
  }, 0);

  return (
    <S.Wrapper>
      <S.Link to={`/${ROUTES.CHECKOUT.ROOT}/${ROUTES.CHECKOUT.CART}`}>
        <S.Container>
          <S.Label>Ver carrinho&nbsp;•&nbsp;{formatPrice(totalAmount)}</S.Label>

          <S.Icon>
            <ChevronRightIcon />
          </S.Icon>
        </S.Container>
      </S.Link>
    </S.Wrapper>
  );
}

export default BottomCart;
