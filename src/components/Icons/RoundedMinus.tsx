import { SVGProps } from 'react';

type RoundedMinusProps = {
  title?: string;
  titleId?: string;
  color?: string;
};

const RoundedPlus = ({
  title = 'Rounded-minus',
  titleId = 'Rounded-Minus-icon',
  color = '#171717',
  ...props
}: SVGProps<SVGSVGElement> & RoundedMinusProps) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM5.8 9h6.4"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default RoundedPlus;
