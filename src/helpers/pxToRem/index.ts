const BASE = 10;

export const handleConvertPxToRem = (
  px: number,
  returnString: boolean,
): number | string => {
  const converted = px / BASE;

  if (returnString) {
    return `${converted}em`;
  }

  return converted;
};
