import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
  color?: string;
}

const HeartIcon = ({
  title = 'ChevronLeft',
  titleId = 'ChevronLeft-icon',
  color = '#fff',
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={15}
    height={14}
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
      d="M9.415 1.288a3.778 3.778 0 0 1 4.119 6.164l-5.431 5.431a.4.4 0 0 1-.565 0L2.107 7.452a3.78 3.78 0 0 1 5.345-5.345l.368.37.37-.37c.35-.35.767-.63 1.225-.82Zm3.554 1.384a2.979 2.979 0 0 0-4.215 0l-.651.651a.4.4 0 0 1-.565 0l-.651-.651a2.98 2.98 0 1 0-4.215 4.215l5.148 5.149 5.15-5.149a2.98 2.98 0 0 0 0-4.215Z"
      fill="#fff"
    />
    <path
      d="M13.534 7.452a3.778 3.778 0 0 0-1.226-6.164 3.779 3.779 0 0 0-4.119.82m5.345 5.344s0 0 0 0Zm0 0-5.431 5.431a.4.4 0 0 1-.565 0L2.107 7.452a3.78 3.78 0 0 1 5.345-5.345l.368.37.37-.37m0 0s0 0 0 0Zm4.78.565.282-.282m-.283.282a2.979 2.979 0 0 0-4.215 0l-.651.651a.4.4 0 0 1-.565 0l-.651-.651a2.98 2.98 0 1 0-4.215 4.215l5.148 5.149 5.15-5.149a2.98 2.98 0 0 0 0-4.215Z"
      stroke="#fff"
      strokeWidth={0.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HeartIcon;
