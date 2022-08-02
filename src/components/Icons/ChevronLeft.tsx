import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
  color?: string;
}

const ChevronLeftIcon = ({
  title = 'ChevronLeft',
  titleId = 'ChevronLeft-icon',
  color = '#fff',
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={8}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    color={color}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M7 14.02 1 7.948l6-6.074"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronLeftIcon;
