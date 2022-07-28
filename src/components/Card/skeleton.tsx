import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import * as S from './styles';

const CardSkeleton = () => {
  return (
    <S.WrapperSkeleton>
      <S.Wrapper>
        <S.Header>
          <S.Name>
            <Skeleton width={120} height={18} />
          </S.Name>
          <S.Description>
            <Skeleton />
            <Skeleton width={190} />
            <Skeleton width={160} />
          </S.Description>
          <S.BuyBox>
            <S.Price>
              <Skeleton width={71} height={22} />
            </S.Price>
          </S.BuyBox>
        </S.Header>

        <Skeleton width={110} height={110} borderRadius={8} />
      </S.Wrapper>
    </S.WrapperSkeleton>
  );
};

export default CardSkeleton;
