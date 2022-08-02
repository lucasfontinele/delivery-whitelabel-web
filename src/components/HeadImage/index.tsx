import ChevronLeftIcon from 'components/Icons/ChevronLeft';

import type { HeadImageProps } from './misc';
import * as S from './styles';

function HeadImage({ ...props }: HeadImageProps) {
  const { imageUrl, handleBackButton, rightContent } = props;

  return (
    <S.Container>
      <S.Header>
        {handleBackButton && (
          <S.IconButton>
            <ChevronLeftIcon />
          </S.IconButton>
        )}
        {rightContent}
      </S.Header>
      <S.Image src={imageUrl} alt="Product" />
    </S.Container>
  );
}

export default HeadImage;
