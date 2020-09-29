import React from 'react';

const useInput = () => {
  const [value, setValue] = React.useState({
    value: '',
    error: null,
  });

  const onChange = (e) =>
    e.target.value.trim().length > 0
      ? setValue({ value: e.target.value, error: null })
      : setValue({
          value: '',
          error: 'Please enter a value',
        });

  const reset = () => setValue({ value: '', error: null });

  const binds = {
    setValue,
    onChange,
    reset,
  };

  return [value, binds];
};

export default useInput;
