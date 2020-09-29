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
import useStyles from './useStyles';

const FullScreenSearch = ({ setOpen, searchRequest }) => {
  const { btn, container } = useStyles();
  const [input, setInput] = React.useState({
    value: '',
    error: '',
  });
  const [data, setData] = React.useState({
    data: {},
    error: null,
  });

  const handleChange = (e) => {
    const { value } = e.target;
    const isValid = value.trim().length > 0;

    if (!isValid) {
      return setInput({
        value: '',
        error: 'Please enter a value',
      });
    }

    return setInput({ value, error: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.error.length) return;

    searchRequest(input.value)
      .then((d) => {
        if (
          d == null ||
          !Object.values(d).every(Array.isArray)
        )
          throw new Error(
            'Data expects an objects of arrays',
          );

        setData(d);
      })
      .catch((error) => {
        setData({
          ...data,
          error: 'something went wrong...',
        });
        throw error;
      });
  };

  return (
    <Container className={container}>
      <AppBar position="fixed" color="primary">
        <IconButton
          className={btn}
          onClick={() => setOpen(false)}
        >
          <Close />
        </IconButton>
      </AppBar>
      <Box pt={10}>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            id="search"
            label="search"
            variant="outlined"
            color="primary"
            helperText={input.error}
            error={!!input.error}
            fullWidth
            required
          />
        </form>
        {data.error && <p>{data.error}</p>}
      </Box>
    </Container>
  );
};

FullScreenSearch.propTypes = {
  setOpen: PropTypes.func.isRequired,
  searchRequest: PropTypes.func.isRequired,
};

export default FullScreenSearch;
