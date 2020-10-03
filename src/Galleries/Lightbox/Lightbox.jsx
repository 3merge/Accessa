import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Dialog, VideoPaper } from '../../Utils';

export const getId = (x) => x.split('/').pop();

export const addYouTubeAttributes = (item) => {
  const copy = { ...item };
  copy.id = getId(copy.video);
  copy.img = `https://img.youtube.com/vi/${copy.id}/0.jpg`;
  return copy;
};

const Lightbox = ({ children, label, lists }) => {
  const renderPlayButton = (video) => (props) => {
    const { handleOpen, open } = props;
    const dialogButton = (
      <Fab
        color="primary"
        onClick={handleOpen}
        aria-label={label}
        aria-pressed={open}
      >
        <PlayArrowIcon />
      </Fab>
    );

    return typeof children === 'function'
      ? children(video, dialogButton, props)
      : dialogButton;
  };

  return lists.map(addYouTubeAttributes).map((v) => (
    <Dialog
      key={v.id}
      title={v.title}
      description={v.description}
      ButtonComponent={renderPlayButton(v)}
      maxWidth="md"
      fullWidth
    >
      {({ setOpen }) => (
        <VideoPaper setOpen={setOpen} video={v} />
      )}
    </Dialog>
  ));
};

Lightbox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]),
  label: PropTypes.string,
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      video: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Lightbox.defaultProps = {
  children: undefined,
  label: 'Click to open video dialog',
};

export default Lightbox;
