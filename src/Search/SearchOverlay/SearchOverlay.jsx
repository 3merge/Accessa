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
import { Dialog } from '../../Utils';
import { Archer } from '../../Lists';
import useInput from './useInput';

const renderSearchResult = (obj) => {
  if (Object.keys(obj).length === 0) return null;

  const filtered = Object.entries(obj).filter(
    (x) => x[1].length > 0,
  );

  if (filtered.length === 0)
    return <Box mt={5}>No match</Box>;

  return (
    <Box mt={5}>
      <Grid container>
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

const SearchIcon = ({ handleOpen }) => (
  <IconButton
    onClick={handleOpen}
    aria-label="open search dialog"
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

  return (
    <Dialog
      ButtonComponent={SearchIcon}
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
