import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Grid,
  Container,
  IconButton,
  TextField,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Dialog } from '../../Utils';
import { Archer } from '../../Lists';
import useInput from './useInput';

export const renderSearchResult = (obj) => {
  if (Object.keys(obj).length === 0) return null;

  const filtered = Object.entries(obj).filter(
    (x) => x[1].length > 0,
  );

  if (filtered.length === 0)
    return <Box mt={5}>No match</Box>;

  return (
    <Box mt={5} id="search-results" role="region">
      <Grid container aria-live="polite">
        {filtered.map((x) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={x[0]}
          >
            <Archer subheader={x[0]} lists={x[1]} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const SearchIcon = ({ handleOpen, ...props }) => (
  <IconButton
    {...props}
    aria-label="search dialog"
    onClick={handleOpen}
    color="inherit"
  >
    <Search />
  </IconButton>
);

SearchIcon.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

const SearchOverlay = ({
  searchRequest,
  onSubmitCallback,
}) => {
  const initialState = {
    data: {},
    error: null,
  };

  const [
    { value, error },
    { onChange, reset },
  ] = useInput();
  const [data, setData] = React.useState(initialState);

  const handleReset = () => {
    setData(initialState);
    reset();
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (error != null) return;

    // eslint-disable-next-line consistent-return
    return searchRequest(value)
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
          error: err.message,
        });
        return err;
      });
  };

  React.useEffect(() => {
    if (value) {
      handleSubmit();
    } else {
      setData(initialState);
    }
  }, [value]);

  return (
    <Dialog
      ButtonComponent={SearchIcon}
      onExit={handleReset}
      fullScreen
      id="search"
      title="Search"
    >
      {() => {
        return (
          <Container>
            <form onSubmit={handleSubmit}>
              <TextField
                value={value}
                onChange={onChange}
                id="search"
                aria-controls="search-results"
                aria-label="search"
                variant="outlined"
                color="primary"
                helperText={error || ''}
                FormHelperTextProps={{
                  role: 'alert',
                }}
                error={Boolean(error)}
                fullWidth
                required
                inputProps={{
                  autoComplete: 'off',
                }}
                // eslint-disable-next-line
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </form>
            {data.error && <p>{data.error}</p>}
            {renderSearchResult(data.data)}
          </Container>
        );
      }}
    </Dialog>
  );
};

SearchOverlay.defaultProps = {
  onSubmitCallback: null,
};

SearchOverlay.propTypes = {
  searchRequest: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func,
};

export default SearchOverlay;
