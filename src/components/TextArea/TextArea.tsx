import type { TextAreaProps } from './TextArea.misc';
import * as S from './styles';

function TextArea({ ...props }: TextAreaProps) {
  const { error } = props;

  return (
    <S.Container>
      <S.TextArea {...props} />
      <S.Small>{error}</S.Small>
    </S.Container>
  );
}

export default TextArea;
