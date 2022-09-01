import { mock } from './misc';
import * as S from './styles';

function CategoriesScroll() {
  return (
    <S.Container>
      {mock.map(item => (
        <S.Option key={item.id}>{item.label}</S.Option>
      ))}
    </S.Container>
  );
}

export default CategoriesScroll;
