import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
  color?: string;
}

const PaperAirplanner = ({
  title = 'ChevronLeft',
  titleId = 'ChevronLeft-icon',
  color = '#1D71B8',
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    color={color}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M1 8.579 17 1 9.421 17l-1.684-6.737L1 8.58Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PaperAirplanner;
