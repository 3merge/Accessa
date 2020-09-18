const compose = (...fns) => {
  if (fns.length <= 0)
    throw new Error('At least one function needed');

  return (x) => fns.reduceRight((acc, fn) => fn(acc), x);
};

const add = (x) => (y) => x + y;

const addLeadingZero = (str) => {
  return str.length === 1 ? `0${str}` : str;
};

export const generateLeading = compose(
  addLeadingZero,
  String,
  add(1),
);
