import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, VideoPaper } from '../../Utils';

const Lightbox = () => {
  return (
    <Dialog PaperComponent={VideoPaper} fullScreen>
      {({ setOpen, target, setTarget }) => {
        return (
          <button
            type="button"
            onClick={() => setOpen(true)}
          >
            open{target}
          </button>
        );
      }}
    </Dialog>
  );
};

Lightbox.propTypes = {
  setOpen: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  target: PropTypes.object.isRequired,
  setTarget: PropTypes.func.isRequired,
};

export default Lightbox;
