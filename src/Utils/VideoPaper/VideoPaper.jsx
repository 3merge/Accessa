import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Box } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import useStyles from './useStyles';

const VideoPaper = ({ setOpen, target, setTarget }) => {
  const {
    grid,
    closeBtn,
    iframe,
    figcaption,
  } = useStyles();

  return (
    <Box className={grid}>
      <IconButton className={closeBtn}>
        <Close onClick={() => setOpen((cur) => !cur)} />
      </IconButton>
      <figure>
        <iframe
          key="18a9368c-56f7-4e5d-8aca-d05b5a788bad"
          className={iframe}
          title="WorldX video"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
          frameBorder="0"
          allowFullscreen
        />
        <figcaption className={figcaption}>
          this is caption
        </figcaption>
      </figure>
    </Box>
  );
};

VideoPaper.propTypes = {
  setOpen: PropTypes.func.isRequired,
  target: PropTypes.bool.isRequired,
  setTarget: PropTypes.func.isRequired,
};

export default VideoPaper;
