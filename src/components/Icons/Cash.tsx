import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
  color?: string;
}

const Cash = ({
  title = 'Cash',
  titleId = 'Cash-icon',
  color = '#1D71B8',
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={14}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.6.8A.8.8 0 1 0 6 .8V4H4.3a4.3 4.3 0 1 0 0 8.6H6V18H.8a.8.8 0 0 0 0 1.6H6v3.2a.8.8 0 0 0 1.6 0v-3.2h1.7a4.3 4.3 0 1 0 0-8.6H7.6V5.6h4.2a.8.8 0 0 0 0-1.6H7.6V.8ZM6 5.6H4.3a2.7 2.7 0 1 0 0 5.4H6V5.6Zm1.6 7V18h1.7a2.7 2.7 0 0 0 0-5.4H7.6Z"
      fill={color}
    />
  </svg>
);

export default Cash;
