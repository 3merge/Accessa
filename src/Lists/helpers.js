export const addLeadingZero = (i) => {
  const leading = i + 1;
  const str = String(leading);
  return str.length === 1 ? `0${str}` : str;
};
