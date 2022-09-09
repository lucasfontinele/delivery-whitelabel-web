import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Marker = ({
  title = 'Marker',
  titleId = 'Maker-icon',
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={27}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M26.182 13.09C26.182 23.274 13.09 32 13.09 32S0 23.273 0 13.09a13.09 13.09 0 0 1 26.182 0Z"
      fill="#1D71B8"
    />
    <path
      d="M13.09 17.454a4.364 4.364 0 1 0 0-8.727 4.364 4.364 0 0 0 0 8.727Z"
      stroke="#fff"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Marker;
