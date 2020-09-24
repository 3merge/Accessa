import React from 'react';
import PropTypes from 'prop-types';
import { renderListSafely } from '../../Hocs';
import { Dialog, VideoPaper } from '../../Utils';

export const getId = (x) => x.split('/').pop();

const Lightbox = ({ lists }) => {
  return (
    <Dialog PaperComponent={VideoPaper} fullScreen>
      {({ setOpen, setTarget }) => {
        const handleClick = (t) => () => {
          setTarget(t);
          setOpen(true);
        };

        return lists
          .map((x) => ({
            title: x.title,
            id: getId(x.video),
          }))
          .map((v) => (
            <button
              type="button"
              key={v.title}
              onClick={handleClick(v)}
            >
              {v.title}
            </button>
          ));
      }}
    </Dialog>
  );
};

Lightbox.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      video: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default renderListSafely(Lightbox);
