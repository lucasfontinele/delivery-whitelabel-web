import SearchIcon from 'components/Icons/Search';

import type { SearchProps } from './misc';
import * as S from './styles';

function Search({ ...props }: SearchProps) {
  return (
    <S.Container>
      <S.Input {...props} />
      <S.Icon>
        <SearchIcon />
      </S.Icon>
    </S.Container>
  );
}

export default Search;
