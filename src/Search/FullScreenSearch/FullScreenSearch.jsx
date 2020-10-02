import React from 'react';
import PropTypes from 'prop-types';
import { Container, TextField } from '@material-ui/core';
import useInput from './useInput';

const FullScreenSearch = ({
  searchRequest,
  onSubmitCallback,
}) => {
  const [{ value, error }, { onChange }] = useInput();

  const [data, setData] = React.useState({
    data: {},
    error: null,
  });

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (error != null) return;

    searchRequest(value)
      .then((d) => {
        if (
          d == null ||
          !Object.values(d).every(Array.isArray)
        )
          throw new Error('Expected an objects of arrays');

        return typeof onSubmitCallback === 'function'
          ? onSubmitCallback(d)
          : setData({ data: d, error: null });
      })
      .catch((err) => {
        setData({
          ...data,
          error: 'something went wrong...',
        });
        throw err;
      });
  };

  React.useEffect(() => {
    if (value) handleSubmit();
  }, [value]);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={onChange}
          id="search"
          label="search"
          variant="outlined"
          color="primary"
          helperText={error || ''}
          error={Boolean(error)}
          fullWidth
          required
        />
      </form>
      {data.error && <p>{data.error}</p>}
    </Container>
  );
};

FullScreenSearch.defaultProps = {
  onSubmitCallback: null,
};

FullScreenSearch.propTypes = {
  searchRequest: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  onSubmitCallback: PropTypes.any,
};

export default FullScreenSearch;
