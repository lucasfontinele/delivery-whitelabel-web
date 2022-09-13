import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
  color?: string;
}

const CreditCard = ({
  title = 'CreditCard',
  titleId = 'CreditCard-icon',
  color = '#1D71B8',
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={24}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.8 3.389a1.2 1.2 0 0 1 1.2-1.2h18a1.2 1.2 0 0 1 1.2 1.2v3.2H1.8v-3.2Zm-1.6 4v-4A2.8 2.8 0 0 1 3 .589h18a2.8 2.8 0 0 1 2.8 2.8v12a2.8 2.8 0 0 1-2.8 2.8H3a2.8 2.8 0 0 1-2.8-2.8v-8Zm22 .8v7.2a1.2 1.2 0 0 1-1.2 1.2H3a1.2 1.2 0 0 1-1.2-1.2v-7.2h20.4Z"
      fill={color}
    />
  </svg>
);

export default CreditCard;
