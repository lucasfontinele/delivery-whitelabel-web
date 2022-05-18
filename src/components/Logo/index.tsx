export type LogoProps = {
  width: number;
  height: number;
};

function Logo({ height, width }: LogoProps) {
  return (
    <img src="/assets/images/orla-rio.svg" alt="" style={{ height, width }} />
  );
}

export default Logo;
