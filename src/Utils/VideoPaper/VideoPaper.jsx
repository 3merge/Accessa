import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './useStyles';

const VideoPaper = ({ video }) => {
  const { iframe, figcaption, figure } = useStyles();
  return (
    <figure className={figure}>
      <iframe
        key="18a9368c-56f7-4e5d-8aca-d05b5a788bad"
        className={iframe}
        title="WorldX video"
        src={`//www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      />
      <figcaption className={figcaption}>
        {video.title}
      </figcaption>
    </figure>
  );
};

VideoPaper.defaultProps = {
  video: {},
};

VideoPaper.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default VideoPaper;
