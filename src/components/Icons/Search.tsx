import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
  color?: string;
}

const SvgComponent = ({
  title = 'Search',
  titleId = 'Search-icon',
  color = '#666',
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.413 7.865c0-3.362 2.67-6.068 5.941-6.068 3.27 0 5.941 2.706 5.941 6.068 0 1.647-.64 3.137-1.679 4.228a.605.605 0 0 0-.13.134 5.862 5.862 0 0 1-4.132 1.707c-3.27 0-5.94-2.706-5.94-6.069Zm10.548 5.554a7.034 7.034 0 0 1-4.607 1.715c-3.955 0-7.14-3.265-7.14-7.269 0-4.003 3.185-7.268 7.14-7.268 3.955 0 7.141 3.265 7.141 7.268 0 1.789-.636 3.43-1.692 4.698l3.156 3.218a.6.6 0 1 1-.857.84l-3.14-3.202Z"
      fill={color}
    />
  </svg>
);

export default SvgComponent;
