import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Mastercard = ({
  title = 'Mastercard',
  titleId = 'Mastercard-icon',
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={30}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.238 17.905a8.905 8.905 0 1 0 0-17.81 8.905 8.905 0 0 0 0 17.81Z"
      fill="#D8232A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.905 15.87a8.905 8.905 0 1 0 0-13.738 8.887 8.887 0 0 1 3.238 6.868 8.887 8.887 0 0 1-3.238 6.87Z"
      fill="#ED9F2D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.905 2.13A8.887 8.887 0 0 0 11.667 9a8.887 8.887 0 0 0 3.238 6.87A8.887 8.887 0 0 0 18.143 9a8.887 8.887 0 0 0-3.238-6.87Z"
      fill="#D8232A"
    />
    <mask
      id="a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={11}
      y={2}
      width={8}
      height={14}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.905 2.13A8.887 8.887 0 0 0 11.667 9a8.887 8.887 0 0 0 3.238 6.87A8.887 8.887 0 0 0 18.143 9a8.887 8.887 0 0 0-3.238-6.87Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.857 2.524h8.096v.81h-8.095v-.81Zm0 1.619h8.096v.81h-8.096v-.81Zm8.096 1.619h-8.096v.81h8.096v-.81ZM10.857 7.38h8.096v.81h-8.096v-.81ZM18.953 9h-8.096v.81h8.096V9Zm-8.096 1.62h8.096v.809h-8.096v-.81Zm8.096 1.618h-8.096v.81h8.096v-.81Zm-8.096 1.619h8.096v.81h-8.096v-.81Zm8.096 1.62h-8.096v.809h8.096v-.81Z"
        fill="#ED9F2D"
      />
    </g>
  </svg>
);

export default Mastercard;
