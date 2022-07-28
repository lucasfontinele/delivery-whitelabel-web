import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
  color?: string;
}

const UserIcon = ({
  title = 'User',
  titleId = 'User-icon',
  color = '#666',
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    color={color}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M3.003 14.982A13.162 13.162 0 0 1 9.5 13.278c2.361 0 4.578.618 6.497 1.704m-3.664-7.37a2.833 2.833 0 1 1-5.667 0 2.833 2.833 0 0 1 5.667 0ZM18 9.5a8.501 8.501 0 0 1-14.51 6.01A8.5 8.5 0 1 1 18 9.5Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default UserIcon;
