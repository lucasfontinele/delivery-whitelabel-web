import ChevronRightIcon from 'components/Icons/ChevronRight';
import { ROUTES } from 'constants/routes';
import * as S from './styles';

function BottomCart() {
  return (
    <S.Wrapper>
      <S.Link to={`/${ROUTES.CHECKOUT.ROOT}`}>
        <S.Container>
          <S.Label>Ver carrinho&nbsp;•&nbsp;R$ 26,70</S.Label>

          <S.Icon>
            <ChevronRightIcon />
          </S.Icon>
        </S.Container>
      </S.Link>
    </S.Wrapper>
  );
}

export default BottomCart;
