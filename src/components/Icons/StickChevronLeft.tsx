import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
  color?: string;
}

const StickChevronLeft = ({
  title = 'ChevronLeft',
  titleId = 'ChevronLeft-icon',
  color = '#666',
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={16}
    height={16}
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
      d="M7.52.2a.68.68 0 1 1 .96.96L2.32 7.32h13a.68.68 0 0 1 0 1.36h-13l6.16 6.16a.68.68 0 1 1-.96.96L.203 8.486A.684.684 0 0 1 0 8a.677.677 0 0 1 .204-.485L7.519.199Z"
      fill={color}
    />
  </svg>
);

export default StickChevronLeft;
