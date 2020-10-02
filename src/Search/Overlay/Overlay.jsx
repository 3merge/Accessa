import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Dialog } from '../../Utils';
import FullScreenSearch from '../FullScreenSearch';

const SearchIcon = ({ setOpen }) => (
  <IconButton
    onClick={() => setOpen(true)}
    aria-label="open search dialog"
  >
    <Search />
  </IconButton>
);

SearchIcon.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

const Overlay = ({ searchRequest, onSubmitCallback }) => (
  <Dialog
    ButtonComponent={SearchIcon}
    fullScreen
    title="Search"
  >
    {({ setOpen }) => {
      return (
        <FullScreenSearch
          setOpen={setOpen}
          searchRequest={searchRequest}
          onSubmitCallback={onSubmitCallback}
        />
      );
    }}
  </Dialog>
);

Overlay.defaultProps = {
  onSubmitCallback: null,
};

Overlay.propTypes = {
  searchRequest: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func,
};

export default Overlay;
