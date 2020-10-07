export const addLeadingZero = (i) => {
  const str = String(i + 1);
  return str.length === 1 ? `0${str}` : str;
};
