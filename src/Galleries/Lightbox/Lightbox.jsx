import React from 'react';
import { IconButton, Box } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Dialog } from '../../Utils';
import useStyles from './useStyles';

const Lightbox = () => {
  const {
    modal,
    iframe,
    closeBtn,
    grid,
    figcaption,
  } = useStyles();

  const VideoPaper = ({
    open,
    setOpen,
    target,
    setTarget,
  }) => {
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
          <figcaption>this is caption</figcaption>
        </figure>
      </Box>
    );
  };
  return (
    <Dialog className={modal} PaperComponent={VideoPaper}>
      {({ open, setOpen, target, setTarget }) => {
        return (
          <button type="button" onClick={open}>
            open{target}
          </button>
        );
      }}
    </Dialog>
  );
};

export default Lightbox;
