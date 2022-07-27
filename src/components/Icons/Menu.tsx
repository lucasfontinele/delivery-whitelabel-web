import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
  color?: string;
}

const MenuIcon = ({
  title = 'Menu',
  titleId = 'menu-icon',
  color = '#666',
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={19}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    color={color}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.65 0a.65.65 0 0 0 0 1.3h16.788a.65.65 0 1 0 0-1.3H.65Zm0 3.73a.65.65 0 1 0 0 1.3h13.057a.65.65 0 1 0 0-1.3H.65ZM0 8.112a.65.65 0 0 1 .65-.65h16.788a.65.65 0 1 1 0 1.3H.65a.65.65 0 0 1-.65-.65Zm.65 3.08a.65.65 0 1 0 0 1.3h13.057a.65.65 0 1 0 0-1.3H.65Z"
      fill="currentColor"
    />
  </svg>
);

export default MenuIcon;
