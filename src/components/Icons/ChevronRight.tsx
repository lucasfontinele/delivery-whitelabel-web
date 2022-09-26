import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
  color?: string;
}

const ChevronRightIcon = ({
  title = 'ChevronRight',
  titleId = 'ChevronRight-icon',
  color = '#fff',
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.48.2a.68.68 0 1 0-.96.96l6.16 6.16h-13a.68.68 0 0 0 0 1.36h13l-6.16 6.16a.68.68 0 1 0 .96.96l7.316-7.315A.684.684 0 0 0 16 8a.677.677 0 0 0-.204-.485L8.481.199Z"
      fill={color}
    />
  </svg>
);

export default ChevronRightIcon;
