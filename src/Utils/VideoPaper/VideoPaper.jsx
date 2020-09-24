import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Box } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import useStyles from './useStyles';

const VideoPaper = ({ setOpen, target }) => {
  const {
    grid,
    closeBtn,
    iframe,
    figcaption,
    figure,
  } = useStyles();

  // const test = {
  //   id: 'GfiPOuU_gAM',
  //   title: 'Marcangelo vs Michelangelo',
  // };

  return (
    <Box className={grid}>
      <IconButton
        className={closeBtn}
        onClick={() => setOpen((cur) => !cur)}
        aria-label="close"
      >
        <Close />
      </IconButton>
      <figure className={figure}>
        <iframe
          key="18a9368c-56f7-4e5d-8aca-d05b5a788bad"
          className={iframe}
          title="WorldX video"
          src={`//www.youtube.com/embed/${target.id}`}
          frameBorder="0"
          allowFullScreen
        />
        <figcaption className={figcaption}>
          {target.title}
        </figcaption>
      </figure>
    </Box>
  );
};

VideoPaper.propTypes = {
  setOpen: PropTypes.func.isRequired,
  target: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default VideoPaper;