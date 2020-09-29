import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Dialog } from '../../Utils';
import FullScreenSearch from '../FullScreenSearch';

const Overlay = ({ searchRequest }) => {
  return (
    <Dialog
      PaperComponent={FullScreenSearch}
      searchRequest={searchRequest}
      disableOnClose
    >
      {({ setOpen }) => {
        return (
          <IconButton
            onClick={() => setOpen(true)}
            aria-label="open search dialog"
          >
            <Search />
          </IconButton>
        );
      }}
    </Dialog>
  );
};

Overlay.propTypes = {
  searchRequest: PropTypes.func.isRequired,
};

export default Overlay;
