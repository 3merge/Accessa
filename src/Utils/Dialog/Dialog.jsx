import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@material-ui/core';

const _Dialog = ({
  PaperComponent,
  initialTarget,
  children,
  ...rest
}) => {
  const [open, setOpen] = React.useState(false);
  const [target, setTarget] = React.useState(
    () => initialTarget,
  );

  const props = { open, setOpen, target, setTarget };

  return (
    <>
      {children(props)}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperComponent={() => <PaperComponent {...props} />}
        {...rest}
      />
    </>
  );
};

_Dialog.defaultProps = {
  initialTarget: null,
};

_Dialog.propTypes = {
  PaperComponent: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  initialTarget: PropTypes.any,
};

export default _Dialog;
