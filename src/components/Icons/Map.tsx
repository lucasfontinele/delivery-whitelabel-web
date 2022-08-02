import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
  color?: string;
}

const MapIcon = ({
  title = 'Map',
  titleId = 'Map-icon',
  color = '#666',
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={15}
    height={18}
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
      d="M3.094 3.094a6.124 6.124 0 0 1 10.453 4.33c0 2.373-1.54 4.66-3.208 6.42a22.264 22.264 0 0 1-2.915 2.568 22.265 22.265 0 0 1-2.915-2.567C2.84 12.085 1.3 9.796 1.3 7.423c0-1.624.645-3.182 1.794-4.33Zm3.969 14.655.36-.541-.36.54a.65.65 0 0 0 .721 0l-.36-.54.36.54h.003l.004-.004.017-.011.062-.043a21.362 21.362 0 0 0 1.017-.762 23.539 23.539 0 0 0 2.395-2.19c1.72-1.814 3.565-4.419 3.565-7.314A7.424 7.424 0 1 0 0 7.424c0 2.895 1.846 5.5 3.565 7.314a23.54 23.54 0 0 0 3.413 2.952l.061.043.017.011.005.003.001.001ZM5.816 7.424a1.608 1.608 0 1 1 3.216 0 1.608 1.608 0 0 1-3.216 0Zm1.608-2.908a2.908 2.908 0 1 0 0 5.816 2.908 2.908 0 0 0 0-5.816Z"
      fill="currentColor"
    />
  </svg>
);

export default MapIcon;
