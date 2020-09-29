import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Container,
  Box,
  TextField,
  IconButton,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import useInput from './useInput';
import useStyles from './useStyles';

const FullScreenSearch = ({
  setOpen,
  searchRequest,
  onSubmitCallback,
}) => {
  const { btn, container } = useStyles();
  const [{ value, error }, { onChange }] = useInput();

  const [data, setData] = React.useState({
    data: {},
    error: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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

  // React.useEffect(() => {
  //   if (value.trim().length > 0) {
  //     handleSubmit();
  //   }
  // }, [value]);

  return (
    <Container className={container}>
      <AppBar position="fixed" color="primary">
        <IconButton
          className={btn}
          onClick={() => setOpen(false)}
          aria-label="Close search dialog"
        >
          <Close />
        </IconButton>
      </AppBar>
      <Box pt={10}>
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
      </Box>
    </Container>
  );
};

FullScreenSearch.defaultProps = {
  onSubmitCallback: null,
};

FullScreenSearch.propTypes = {
  setOpen: PropTypes.func.isRequired,
  searchRequest: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  onSubmitCallback: PropTypes.any,
};

export default FullScreenSearch;
