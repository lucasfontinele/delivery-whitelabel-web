import { useLocation } from 'react-router-dom';

import NavBarItem from 'components/NavBarItem';
import items from './items';

import * as S from './styles';

const NavBar = () => {
  const location = useLocation();

  return (
    <S.Wrapper>
      <S.MenuItems>
        {items.map(({ href, icon, label }) => (
          <NavBarItem
            key={label}
            label={label}
            href={href}
            icon={icon}
            isActive={location.pathname.includes(href)}
          />
        ))}
      </S.MenuItems>
    </S.Wrapper>
  );
};

export default NavBar;
