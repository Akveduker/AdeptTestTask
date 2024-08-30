export const checkLength = (str: string, length: number) => {
  if (str.length < length) return false;
  return true;
};
