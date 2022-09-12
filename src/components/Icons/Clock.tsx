import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Clock = ({
  title = 'Clock',
  titleId = 'Clock-icon',
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
      d="M1.4 8.177a6.777 6.777 0 1 1 13.553 0 6.777 6.777 0 0 1-13.553 0ZM8.177 0a8.177 8.177 0 1 0 0 16.353A8.177 8.177 0 0 0 8.177 0Zm.7 3.69a.7.7 0 1 0-1.4 0v4.487a.7.7 0 0 0 .387.626l2.99 1.495a.7.7 0 0 0 .626-1.252L8.877 7.744V3.691Z"
      fill="#1D71B8"
    />
  </svg>
);

export default Clock;
