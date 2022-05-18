import { handleConvertPxToRem } from 'helpers/pxToRem';

export type LogoProps = {
  width: number;
  height: number;
};

function Logo({ height, width }: LogoProps) {
  return (
    <img
      src="/assets/images/orla-rio.svg"
      alt="Orla Rio"
      style={{
        height: handleConvertPxToRem(height, true),
        width: handleConvertPxToRem(width, true),
      }}
    />
  );
}

export default Logo;
