import React from 'react';
import PropTypes from 'prop-types';
import { renderListSafely } from '../../Hocs';
import { Dialog, VideoPaper } from '../../Utils';

export const getId = (x) => x.split('/').pop();

const Lightbox = ({ lists, Button }) => (
  <Dialog PaperComponent={VideoPaper} fullScreen>
    {({ setOpen, setTarget, target }) =>
      lists
        .map((x) => ({
          title: x.title,
          id: getId(x.video),
        }))
        .map((v) => (
          <Button
            key={v.title}
            onClick={() => (setTarget(v), setOpen(true))}
            aria-label="Click to watch the video"
            aria-pressed={
              target ? v.id === target.id : false
            }
            {...v}
          />
        ))
    }
  </Dialog>
);

Lightbox.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      video: PropTypes.string.isRequired,
    }),
  ).isRequired,
  Button: PropTypes.elementType.isRequired,
};

export default renderListSafely(Lightbox);
