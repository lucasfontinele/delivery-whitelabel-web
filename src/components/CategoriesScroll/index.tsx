import type { CategoriesScrollProps } from './misc';
import * as S from './styles';

function CategoriesScroll({ options }: CategoriesScrollProps) {
  return (
    <S.Container>
      {options.map(item => (
        <S.Option href={`#${item.label}`} key={item.id}>
          {item.label}
        </S.Option>
      ))}
    </S.Container>
  );
}

export default CategoriesScroll;
