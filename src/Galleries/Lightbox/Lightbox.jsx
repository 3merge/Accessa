import React from 'react';
import { Dialog, IconButton, Box } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import useStyles from './useStyles';

const Test = () => (
  <Box className={grid}>
    <IconButton className={closeBtn}>
      <Close onClick={handleDialog} />
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

const Lightbox = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDialog = () => setIsOpen((cur) => !cur);

  const {
    modal,
    iframe,
    closeBtn,
    grid,
    figcaption,
  } = useStyles();

  return (
    <>
      <button onClick={handleDialog} type="button">
        open
      </button>
      <Dialog
        className={modal}
        open={isOpen}
        onClose={handleDialog}
        PaperProps={{
          className: modal,
        }}
      >
        <Box className={grid}>
          <IconButton className={closeBtn}>
            <Close onClick={handleDialog} />
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
      </Dialog>
    </>
  );
};

export default Lightbox;
