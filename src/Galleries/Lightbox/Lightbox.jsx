import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { renderListSafely } from '../../Hocs';
import { Dialog, VideoPaper } from '../../Utils';

export const getId = (x) => x.split('/').pop();

const Lightbox = ({ label, lists }) =>
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
        ButtonComponent={({ handleOpen, open }) => (
          <Fab
            color="primary"
            onClick={handleOpen}
            aria-label={label}
            aria-pressed={open}
          >
            <PlayArrowIcon />
          </Fab>
        )}
        maxWidth="md"
        fullWidth
      >
        {({ setOpen }) => (
          <VideoPaper setOpen={setOpen} video={v} />
        )}
      </Dialog>
    ));

Lightbox.propTypes = {
  label: PropTypes.string,
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      video: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Lightbox.defaultProps = {
  label: 'Click to open video dialog',
};

export default renderListSafely(Lightbox);
