import CameraIcon from 'components/Icons/Camera';
import MapIcon from 'components/Icons/Map';
import MenuIcon from 'components/Icons/Menu';
import NewspaperIcon from 'components/Icons/Newspaper';
import UserIcon from 'components/Icons/User';

export default [
  {
    label: 'Catálogos',
    href: `/catalogos`,
    icon: <MenuIcon aria-label="Catálogos" />,
  },
  {
    label: 'Mapa',
    href: `/mapa`,
    icon: <MapIcon aria-label="Mapa" />,
  },
  {
    label: 'Fotos',
    href: `/fotos`,
    icon: <CameraIcon aria-label="Fotos" />,
  },
  {
    label: 'Notícias',
    href: `/noticias`,
    icon: <NewspaperIcon aria-label="Notícias" />,
  },
  {
    label: 'Perfil',
    href: `/perfil`,
    icon: <UserIcon aria-label="Perfil" />,
  },
];
