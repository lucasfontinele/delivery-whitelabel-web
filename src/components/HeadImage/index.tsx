import ChevronLeftIcon from 'components/Icons/ChevronLeft';

import type { HeadImageProps } from './misc';
import * as S from './styles';

function HeadImage({ ...props }: HeadImageProps) {
  const { imageUrl, handleBackButton, rightContent, message } = props;

  return (
    <S.Container>
      <S.Header>
        {handleBackButton && (
          <S.AlwaysOnTop>
            <S.IconButton onClick={handleBackButton}>
              <ChevronLeftIcon />
            </S.IconButton>
          </S.AlwaysOnTop>
        )}
        <S.AlwaysOnTop>{rightContent}</S.AlwaysOnTop>
      </S.Header>
      <S.Image src={imageUrl} alt="Product" />
      {!!message && (
        <S.OverflowInfo>
          <S.OverflowBox>
            <span>{message}</span>
          </S.OverflowBox>
        </S.OverflowInfo>
      )}
    </S.Container>
  );
}

export default HeadImage;
