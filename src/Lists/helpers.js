export const addLeadingZero = (val) => {
  const str = String(val);
  return str.length === 1 ? `0${str}` : str;
};
