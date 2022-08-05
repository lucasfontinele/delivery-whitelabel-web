import type { MenuSectionProps } from './misc';
import * as S from './styles';

function MenuSection({ ...props }: MenuSectionProps) {
  const { title, description, mandatory, children } = props;

  return (
    <S.Container>
      <S.SectionHeader>
        <S.SectionTitle>{title}</S.SectionTitle>

        <S.SectionDescriptionContainer>
          {description && (
            <S.SectionDescrition>{description}</S.SectionDescrition>
          )}
          {mandatory && (
            <S.SectionMandatoryField>
              &nbsp;(Obrigatório)
            </S.SectionMandatoryField>
          )}
        </S.SectionDescriptionContainer>
      </S.SectionHeader>

      <S.SectionContent>{children}</S.SectionContent>
    </S.Container>
  );
}

export default MenuSection;
