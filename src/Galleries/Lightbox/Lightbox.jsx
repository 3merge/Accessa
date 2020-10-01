import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { renderListSafely } from '../../Hocs';
import { Dialog, VideoPaper } from '../../Utils';

export const getId = (x) => x.split('/').pop();

const Lightbox = ({ lists }) =>
  lists
    .map((x) => ({
      ...x,
      id: getId(x.video),
    }))
    .map((v) => (
      <Dialog
        key={v.id}
        title={v.title}
        description={v.description}
        ButtonComponent={({ setOpen }) => (
          <Button
            aria-label="Click to watch the video"
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            {v.title}
          </Button>
        )}
        maxWidth="sm"
        fullWidth
      >
        {({ setOpen }) => (
          <VideoPaper setOpen={setOpen} video={v} />
        )}
      </Dialog>
    ));

Lightbox.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      video: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default renderListSafely(Lightbox);
