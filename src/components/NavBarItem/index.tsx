import * as S from './styles';

export type NavBarItemProps = {
  icon: React.ReactNode;
  label?: string;
  href?: string;
  isActive?: boolean;
  handleClick?: () => void;
};

const NavBarItem = ({
  icon,
  label,
  href,
  isActive = false,
  handleClick,
}: NavBarItemProps) => {
  return (
    <S.Wrapper isActive={isActive}>
      {!handleClick ? (
        <S.Anchor to={href || '#'} isDisabled={!href}>
          <S.IconWrapper isDisabled={!href}>{icon}</S.IconWrapper>
          <S.Span>{label}</S.Span>
        </S.Anchor>
      ) : (
        <S.Button onClick={handleClick}>
          <S.IconWrapper>{icon}</S.IconWrapper>
          <S.Span>{label}</S.Span>
        </S.Button>
      )}
    </S.Wrapper>
  );
};

export default NavBarItem;
